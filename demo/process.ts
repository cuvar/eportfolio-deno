// https://deno.land/manual@v1.15.3/examples/subprocess

const p = Deno.run({
  cmd: ["deno", "run", "--allow-read", "demo/reader.ts"],
});

const { code } = await p.status();

if (code === 0) {
  const rawOutput = await p.output();

  console.log("DONE");
} else {
  console.log("ERROR");
}
Deno.exit(code);

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
// // const rawOutput = await p.output();
// // const rawError = await p.stderrOutput();

// if (code === 0) {
//   await Deno.stdout.write(rawOutput);
// } else {
//   const errorString = new TextDecoder().decode(rawError);
//   console.log(errorString);
// }

// Deno.exit(code);
