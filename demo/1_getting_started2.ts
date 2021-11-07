// reference: https://deno.land/manual@v1.15.3/linking_to_external_code/import_maps
// cmd win: deno run --import-map=res\import_map.json .\getting_started.ts
// cmd unixoid: deno run --import-map=res/import_map.json getting_started.ts

// additional: deno run https://deno.land/std@0.113.0/examples/welcome.ts

import { red } from "https://deno.land/std@0.113.0/fmt/colors.ts";
import { blue } from "fmt/colors.ts";

console.log(red("Hello world"));
console.log(blue("Hello world again"));
