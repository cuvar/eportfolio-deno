// reference: https://deno.land/manual@v1.15.3/examples/read_write_files
// cmd win: deno run --allow-write .\demo\writer.ts .\demo\res\test2.txt
// cmd unixoid: deno run --allow-write demo/writer.ts demo/res/test2.txt

if (Deno.args.length == 0) {
  console.log("You need to specify a file!");
  Deno.exit(0);
}

let content: string = "This is the content";

await Deno.writeTextFile("demo/res/" + Deno.args[0], content);
