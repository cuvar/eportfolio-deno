// reference: https://deno.land/manual@v1.15.3/runtime/workers
// cmd win: deno run --location https://api.github.com/ .\worker.ts
// cmd unixoid: deno run --location https://api.github.com/ worker.ts

new Worker(new URL("./res/worker2w.ts", import.meta.url).href, {
  type: "module",
});
