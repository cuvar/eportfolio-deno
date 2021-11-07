export function complicatedOperation(a, b) {
  return a + b;
}

export async function writeFile(filename, content) {
  await Deno.writeTextFile(filename, content);
}
