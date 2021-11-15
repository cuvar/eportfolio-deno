// reference: https://deno.land/manual@v1.15.3/examples/subprocess
// cmd win: deno run --allow-run .\4_process.ts .\res\test.txt
// cmd unixoid: deno run --allow-run 4_process.ts res/test.txt

// Example 1: simple subprocess
async function process1() {
  const p1: any = Deno.run({
    cmd: ["echo", "process1: Hello"],
  });
  await p1.status();
}

// Example 2: write to file via subprocess
async function process2() {
  const p: any = Deno.run({
    cmd: ["deno", "run", "--allow-write", "3_writer.ts", "res/test3.txt"],
  });

  const { code }: { code: number } = await p.status();

  if (code === 0) {
    console.log("process2: Wrote to file");
  }

  Deno.exit(code);
}

// Example 3: read from file via subprocess
// https://deno.land/manual@v1.15.3/examples/subprocess
async function process3() {
  const fileNames: string[] = Deno.args;
  const p: any = Deno.run({
    cmd: [
      "deno",
      "run",
      "--allow-read",
      "https://deno.land/std@0.113.0/examples/cat.ts",
      ...fileNames,
    ],
    stdout: "piped",
    stderr: "piped",
  });

  const { code }: { code: number } = await p.status();

  // Reading the outputs closes their pipes
  const rawOutput: any = await p.output();
  const rawError: any = await p.stderrOutput();

  if (code === 0) {
    await Deno.stdout.write(rawOutput);
  } else {
    const errorString: string = new TextDecoder().decode(rawError);
    console.log(errorString);
  }

  Deno.exit(code);
}

// await process1();
// await process2();
await process3();
