// reference: developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
// cmd win: deno run .\demo\wasm.ts
// cmd unixoid: deno run demo/wasm.ts

// 0. install rust
// 1. cargo install wasm-pack
// 2. cargo new --lib hello-wasm
// 3. cd hello-wasm
// 4. wasm-pack build --target web

// const wasmCode = new Uint8Array([
//   0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3,
//   130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0, 5, 131,
//   128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145, 128, 128, 128,
//   0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97, 105, 110, 0, 0, 10,
//   138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0, 65, 42, 11,
// ]);
// const wasmModule = new WebAssembly.Module(wasmCode);
// const wasmInstance = new WebAssembly.Instance(wasmModule);
// console.log(wasmInstance.exports);
// const main = wasmInstance.exports.main as CallableFunction;
// console.log(main().toString());

const wasmCode = await Deno.readFile("./res/hello-wasm/pkg/hello_wasm_bg.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
// const main = wasmInstance.exports.main as CallableFunction;

// console.log(wasmInstance);
// console.dir(wasmInstance.exports);
