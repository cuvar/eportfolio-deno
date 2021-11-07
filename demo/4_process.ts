// reference: https://deno.land/manual@v1.15.3/examples/subprocess
// cmd win: deno run --allow-run .\process.ts
// cmd unixoid: deno run --allow-run process.ts

// Example 1: simple subprocess
const p1 = Deno.run({
  cmd: ["echo", "Hello"],
});
await p1.status();

// Example 2: write to file via subprocess
// const p = Deno.run({
//   cmd: ["deno", "run", "--allow-write", "writer.ts", "helloworld.txt"],
// });

// const { code } = await p.status();

// if (code === 0) {
//   console.log("Wrote to file");
// }

// Deno.exit(code);

//-------

// Example 3: read from file via subprocess
// https://deno.land/manual@v1.15.3/examples/subprocess
// const fileNames = Deno.args;

// const p = Deno.run({
//   cmd: [
//     "deno",
//     "run",
//     "--allow-read",
//     "https://deno.land/std@0.113.0/examples/cat.ts",
//     ...fileNames,
//   ],
//   stdout: "piped",
//   stderr: "piped",
// });

// const { code } = await p.status();

// // Reading the outputs closes their pipes
// const rawOutput = await p.output();
// const rawError = await p.stderrOutput();

// if (code === 0) {
//   await Deno.stdout.write(rawOutput);
// } else {
//   const errorString = new TextDecoder().decode(rawError);
//   console.log(errorString);
// }

// Deno.exit(code);
