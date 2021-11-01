import { readLines } from "https://deno.land/std@0.113.0/io/mod.ts";
import * as path from "https://deno.land/std@0.113.0/path/mod.ts";

const filename = path.join(Deno.cwd(), "demo/listener.ts");
let fileReader = await Deno.open(filename);

for await (let line of readLines(fileReader)) {
  console.log(line);
}
