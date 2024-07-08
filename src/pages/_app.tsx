import BlogLayout from "@/layout/BlogLayout";
import QueryWrapper from "@/query/QueryWrapper";
import ReduxProviderWrapper from "@/redux-toolkit/ReduxProviderWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryWrapper>
        <ReduxProviderWrapper>
          <BlogLayout>
            <Component {...pageProps} />
          </BlogLayout>
        </ReduxProviderWrapper>
      </QueryWrapper>
    </>
  );
}
