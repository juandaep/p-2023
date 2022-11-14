import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Epilogue } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "../components/Navbar";

const epilogue = Epilogue({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={epilogue.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
