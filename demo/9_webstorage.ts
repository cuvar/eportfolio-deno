// reference: https://deno.land/manual@v1.15.3/runtime/web_storage_api
// cmd win: deno run --location https://www.example.com/ .\9_webstorage.ts
// cmd unixoid: deno run --location https://www.example.com/ 9_webstorage.ts

localStorage.setItem("demo-data-local", "e-Portfolio");
localStorage.setItem("demo-data-local2", "for");
sessionStorage.setItem("demo-data-session", "Deno");

const storedDataLocal: string = localStorage.getItem("demo-data-local");
const storedDataLocal2: string = localStorage.getItem("demo-data-local2");
const storedDataSession: string = sessionStorage.getItem("demo-data-session");
console.log(`${storedDataLocal} ${storedDataLocal2} ${storedDataSession}`);

console.log(`localStorage.length: ${localStorage.length}`);
localStorage.removeItem("demo-data-local");
console.log(`localStorage.length: ${localStorage.length}`);
localStorage.clear();
console.log(`localStorage.length: ${localStorage.length}`);
