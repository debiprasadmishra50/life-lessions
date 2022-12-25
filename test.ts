import fs from "fs";

function run(path: string) {
  fs.writeFileSync("./resources/quotes.json", '{"main": []}', { encoding: "utf-8" });

  let data: string | string[] = fs.readFileSync(path, { encoding: "utf-8" });
  let main: any = fs.readFileSync("./resources/quotes.json", { encoding: "utf-8" });
  main = JSON.parse(main);
  main as Array<{}>;
  main = main["main"];

  data = data.split("\n");

  data.map((el) => {
    const [no, quote] = el.split(". ");

    main.push({ [no.replace(".", "")]: quote });
  });
  //   console.log(main);

  fs.writeFileSync("./resources/quotes.json", `{"main": ${JSON.stringify(main)}}`, { encoding: "utf-8" });
}

run("./resources/quotes.txt");
