// reference: https://deno.land/manual@v1.15.3/examples/http_server
// cmd win: deno run --allow-net --allow-read .\5_server.ts
// cmd unixoid: deno run --allow-net --allow-read 5_server.ts

import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";
import * as path from "https://deno.land/std@0.113.0/path/mod.ts";

const addr = ":8080";

async function getHtmlFromFile(): Promise<string> {
  const filename: string = path.join(Deno.cwd(), "res/index.html");
  const file: any = await Deno.open(filename);

  const decoder: any = new TextDecoder("utf-8");
  const content: string = decoder.decode(await Deno.readAll(file));
  file.close();
  return content;
}

function replacePlaceHolder(html: string, quote: string): string {
  return html.replace("{{quote}}", quote);
}

async function handler(request: Request): Promise<Response> {
  let body: string = await getHtmlFromFile();
  const response: any = await fetch("https://api.kanye.rest/");
  const quote: any = await response.json();
  body = replacePlaceHolder(body, quote["quote"]);

  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await listenAndServe(addr, handler);
