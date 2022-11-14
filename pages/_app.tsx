import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Epilogue } from "@next/font/google";
import { ThemeProvider } from "next-themes";

const epilogue = Epilogue();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={epilogue.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
