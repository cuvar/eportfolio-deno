// reference: https://deno.land/manual@v1.15.3/examples/read_write_files
// cmd win: deno run --allow-write .\3_writer.ts .\res\test2.txt
// cmd unixoid: deno run --allow-write 3_writer.ts res/test2.txt

async function writeFile(filename: string, content: string) {
  await Deno.writeTextFile(filename, content);
}

if (Deno.args.length == 0) {
  console.log("You need to specify a file!");
  Deno.exit(0);
}

let content: string = "This is the content of this file";
await writeFile(Deno.args[0], content);
console.log(Deno.writeTextFile(Deno.args[0], content));
