import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Application } from "../components/_application/Application";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Application>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </Application>
  );
}
