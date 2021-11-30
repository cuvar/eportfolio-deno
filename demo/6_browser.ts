// reference: https://deno.land/manual@v1.15.3/runtime/location_api
// cmd win: deno run --location https://api.github.com/ --allow-net .\6_browser.ts
// cmd unixoid: deno run --location https://api.github.com/ --allow-net 6_browser.ts
import { red } from "https://deno.land/std@0.113.0/fmt/colors.ts";

console.log(red(location.href));
console.log(location);

const response: any = await fetch("./orgs/denoland");
console.log(response);
