import { createContext } from "@/server/context";
import { appRouter } from "@/server/routers/_app";
import { tlog } from "@/server/trpc";
import { getWSConnectionHandler } from "@trpc/server/adapters/ws";

export function SOCKET(
  client: import("ws").WebSocket,
  request: import("http").IncomingMessage,
  server: import("ws").WebSocketServer
) {
  if (request.url && !request.url?.startsWith("/api/ws")) {
    return;
  }
  tlog.i("socket", "A client connected!", { request: request.url });
  getWSConnectionHandler({
    router: appRouter,
    createContext,
  })(client, request);
}

/**
 * Fake GET handler for avoid NextJS error msg
 */
export const GET = async (
  req: import("http").IncomingMessage,
  res: import("http").ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello, World!");
  res.end();
};
