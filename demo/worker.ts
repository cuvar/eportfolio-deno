// reference: https://deno.land/manual@v1.15.3/runtime/workers
// cmd win: deno run --location https://api.github.com/.\demo\worker.ts
// cmd unixoid: deno run --location https://api.github.com/ demo/worker.ts

new Worker(new URL("./res/worker.ts", import.meta.url).href, {
  type: "module",
});
