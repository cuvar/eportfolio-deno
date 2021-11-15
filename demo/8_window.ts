// reference: https://deno.land/manual@v1.15.3/runtime/program_lifecycle
// cmd win: deno run .\8_window.ts
// cmd unixoid: deno run 8_window.ts

import { blue, red } from "https://deno.land/std@0.113.0/fmt/colors.ts";

const handler = (e: Event): void => {
  console.log(red(`Registered event via handler: ${e.type}`));
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(blue(`Registered event: ${e.type}`));
};

window.onunload = (e: Event): void => {
  console.log(blue(`Registered event: ${e.type}`));
};

// console.log("This is a beginning");
const inputData: string | null = prompt("Please enter input:");
alert(inputData ?? "no data to alert");
const cnf: boolean = confirm("Do you want to erase all the files?");
