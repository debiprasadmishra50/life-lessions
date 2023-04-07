import { readFileSync, writeFileSync } from "fs";

type MyArray = { [key: string]: string }[];

function insertMine(quote: string) {
  if (!quote.length) throw new Error("Quote not found!");

  let fileData: any = readFileSync("./src/resources/quotes.json").toString();

  fileData = JSON.parse(fileData);

  const { mine } = fileData;
  mine as MyArray;

  mine.push({ [mine.length + 1]: quote });

  // console.log(mine);

  fileData.mine = mine;

  writeFileSync("./src/resources/quotes.json", JSON.stringify(fileData), "utf-8");
}

export default insertMine;
