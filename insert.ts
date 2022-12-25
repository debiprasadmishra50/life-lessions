import { readFileSync, writeFileSync } from "fs";

function insertMine(quote: string) {
  let fileData: any = readFileSync("./src/resources/quotes.json").toString();

  fileData = JSON.parse(fileData);

  const { mine } = fileData;
  mine as Array<{ string: string }>;

  mine.push({ [mine.length + 1]: quote });

  // console.log(mine);

  fileData.mine = mine;

  writeFileSync("./src/resources/quotes.json", JSON.stringify(fileData), "utf-8");
}

export default insertMine;
