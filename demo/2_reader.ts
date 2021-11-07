// resource: https://deno.land/manual@v1.15.3/examples/read_write_files
// cmd win: deno run --allow-read .\2_reader.ts
// cmd unixoid: deno run --allow-read 2_reader.ts

import { readLines } from "https://deno.land/std@0.113.0/io/mod.ts";
import { copy } from "https://deno.land/std@0.113.0/io/util.ts";
import * as path from "https://deno.land/std@0.113.0/path/mod.ts";

// reference: https://deno.land/manual@v1.15.3/examples/read_write_files
async function basicReader(filename: string) {
  const text = await Deno.readTextFile(filename);
  console.log(text);
}

async function lineReader(file: string) {
  const filename = path.join(Deno.cwd(), file);
  let fileReader = await Deno.open(filename);

  for await (let line of readLines(fileReader)) {
    console.log(line);
  }
}

// reference: https://deno.land/manual@v1.15.3/examples/unix_cat
async function readWithCatImplementation(filename: string) {
  const filepath = path.join(Deno.cwd(), filename);
  const file = await Deno.open(filepath);
  await copy(file, Deno.stdout);
  file.close();
}

// ------------------------------------------------------------
// entry point

let filename: string = "./res/test.txt";

await basicReader(filename);
await lineReader(filename);
await readWithCatImplementation(filename);
