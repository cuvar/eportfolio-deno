// reference: https://deno.land/manual@v1.15.3/runtime/web_storage_api
// cmd win: deno run .\demo\webstorage.ts
// cmd unixoid: deno run demo/webstorage.ts

localStorage.setItem("myDemo", "Deno App");
const cat = localStorage.getItem("myDemo");
console.log(cat);
localStorage.removeItem("myDemo");
localStorage.clear();
