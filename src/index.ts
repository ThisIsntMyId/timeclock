import { Hono } from "hono";
import { cors } from "hono/cors";

interface CloudflareBindings { }

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use("*", cors());

app.get("/ping", (c) => {
  return c.json({
    status: true,
    message: "pong",
    data: null
  });
});

export default app;