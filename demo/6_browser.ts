// reference: https://deno.land/manual@v1.15.3/runtime/location_api
// cmd win: deno run --location https://api.github.com/ --allow-net .\6_browser.ts
// cmd unixoid: deno run --location https://api.github.com/ --allow-net 6_browser.ts

console.log(location.href);
console.log(location);

const response: any = await fetch("./orgs/denoland");
console.log(response);
