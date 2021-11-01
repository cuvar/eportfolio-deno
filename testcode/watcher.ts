// https://deno.land/manual@v1.15.3/examples/file_system_events
const watcher = Deno.watchFs(".");
for await (const event of watcher) {
  console.log(">>>> event", event);
  // Example event: { kind: "create", paths: [ "/home/alice/deno/foo.txt" ] }
}
