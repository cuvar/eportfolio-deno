// reference: https://www.telerik.com/blogs/how-to-compile-rust-into-webassembly-run-in-deno
// cmd win: deno run .\12_wasm.ts
// cmd unixoid: deno run --allow-read 12_wasm.ts

// how to get started with deno and wasm:
// 0. install rust
// 1. rustup target add wasm32-unknown-unknown
// 2. cargo install wasm-gc
// 3. cargo new --lib deno-wasm
// 4. cd deno-wasm
// 5. update code
// 6. cargo build --target wasm32-unknown-unknown
// 7. wasm-gc target/wasm32-unknown-unknown/debug/deno_wasm.wasm
// 8. edit deno file

const wasmCode: any = await Deno.readFile(
  "./deno-wasm/target/wasm32-unknown-unknown/debug/deno_wasm.wasm"
);

const wasmModule: any = new WebAssembly.Module(wasmCode);
const wasmInstance: any = new WebAssembly.Instance(wasmModule);
const age: any = wasmInstance.exports.age as CallableFunction;

const yourAge: number = age(2021, 2001);
console.log(yourAge);
