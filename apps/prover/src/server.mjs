import { createServer } from "node:http";

const port = Number(process.env.PORT || 7301);

function json(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body),
  });
  res.end(body);
}

createServer((req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    return json(res, 200, { ok: true, service: "@d4gen/prover" });
  }

  if (req.method === "POST" && req.url === "/prove") {
    return json(res, 501, {
      ok: false,
      error:
        "Not implemented yet. Wire this endpoint to rapidsnark in the next phase.",
    });
  }

  return json(res, 404, { ok: false, error: "Not found" });
}).listen(port, () => {
  console.log(`[prover] listening on :${port}`);
});
