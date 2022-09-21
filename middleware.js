import { NextResponse } from "next/server";

const basePath = () => {
  if (process.env.SERVICE === "service1") return "/service1";
  if (process.env.SERVICE === "service2") return "/service2";
  throw new Error("process.env.SERVICE is an unexpected value.");
};

export function middleware(req) {
  const { pathname } = req.nextUrl;
  // NOTE: 環境変数からではなく、hostnameから選択も可能
  // const hostname = req.headers.get("host"); // -> "localhost:3000"
  if (pathname.startsWith("/_next")) return;

  const newUrl = req.url.replace(basePath(), "");
  const destination = basePath() + pathname;

  return NextResponse.rewrite(new URL(destination, newUrl));
}
