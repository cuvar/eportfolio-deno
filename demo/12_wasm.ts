// reference: https://www.telerik.com/blogs/how-to-compile-rust-into-webassembly-run-in-deno
// cmd win: deno run .\wasm.ts
// cmd unixoid: deno run --allow-read wasm.ts

// 0. install rust
// 1. rustup target add wasm32-unknown-unknown
// 2. cargo install wasm-gc
// 3. cargo new --lib deno-wasm
// 4. cd deno-wasm
// 5. update code
// 6. cargo build --target wasm32-unknown-unknown
// 7. wasm-gc target/wasm32-unknown-unknown/debug/deno_wasm.wasm
// 8. edit deno file

const wasmCode = await Deno.readFile(
  "./deno-wasm/target/wasm32-unknown-unknown/debug/deno_wasm.wasm"
);

const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const age = wasmInstance.exports.age as CallableFunction;

const yourAge = age(2020, 1994);
console.log(yourAge);
