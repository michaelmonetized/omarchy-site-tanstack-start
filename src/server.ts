import handler from "@tanstack/react-start/server-entry";

declare const __BUILD_ID__: string;

/** Every page is public and identical for every visitor, so the edge keeps HTML for five minutes. */
const PUBLIC_HTML = "public, max-age=0, s-maxage=300, stale-while-revalidate=86400";

type Ctx = { waitUntil(promise: Promise<unknown>): void };

export default {
  async fetch(request: Request, _env: unknown, ctx: Ctx) {
    if (request.method !== "GET" || new URL(request.url).pathname.startsWith("/_serverFn")) {
      return handler.fetch(request);
    }
    const cache = (caches as unknown as { default: Cache }).default;
    const keyUrl = new URL(request.url);
    keyUrl.searchParams.set("__build", __BUILD_ID__);
    const key = new Request(keyUrl.toString(), { method: "GET" });
    const hit = await cache.match(key);
    if (hit) return hit;

    const response = await handler.fetch(request);
    const html = response.headers.get("content-type")?.includes("text/html");
    if (response.status !== 200 || !html || response.headers.has("set-cookie")) return response;
    const fresh = new Response(response.body, response);
    fresh.headers.set("cache-control", PUBLIC_HTML);
    ctx.waitUntil(cache.put(key, fresh.clone()));
    return fresh;
  },
};
