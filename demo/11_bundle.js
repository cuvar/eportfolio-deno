// reference: https://deno.land/manual@v1.15.3/tools/bundler, https://deno.land/manual@v1.15.3/tools/compiler
// cmd win:
//    0. deno run --allow-write .\11_bundle.js
//    1. deno bundle .\11_bundle.js .\bundle\bundle.js
//    2. deno compile --allow-write --output .\bundle\program .\bundle\code.bundle.js
//    3. bundle/program
// cmd unixoid:
//    0. deno run --allow-write 11_bundle.js
//    1. deno bundle 11_bundle.js bundle/bundle.js
//    2. deno compile --allow-write --output bundle/program bundle/code.bundle.js
//    3. bundle/program

import { yellow } from "https://deno.land/std@0.113.0/fmt/colors.ts";
import { complicatedOperation, writeFile } from "./res/bundle-module.js";

const a = 3;
const b = 4;
const result = complicatedOperation(a, b);
const output = `Magical output of ${a} + ${b}: ${result}`;
console.log(yellow(output));
await writeFile("res/bundling.txt", output);
