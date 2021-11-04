// reference: https://deno.land/manual@v1.15.3/examples/subprocess
// cmd win: deno run --allow-run .\demo\process.ts
// cmd unixoid: deno run --allow-run demo/process.ts

// Example 1: simple subprocess
const p1 = Deno.run({
  cmd: ["echo", "Hello"],
});
await p1.status();

// Example 2: write to file via subprocess
// const p = Deno.run({
//   cmd: ["deno", "run", "--allow-write", "demo/writer.ts", "helloworld.txt"],
// });

// const { code } = await p.status();

// if (code === 0) {
//   console.log("Wrote to file");
// }

// Deno.exit(code);
