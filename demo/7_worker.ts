// reference: https://deno.land/manual@v1.15.3/runtime/workers
// cmd win: deno run --allow-read .\7_worker.ts
// cmd unixoid: deno run --allow-read 7_worker.ts

new Worker(new URL("./res/worker2.ts", import.meta.url).href, {
  type: "module",
});
