import React,{useEffect} from "react";
import { Toaster } from "react-hot-toast";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

   useEffect(() => {
        if (typeof window !== 'undefined') {
                const loader = document.getElementById('globalLoader');
            if (loader)
                loader.style.display = 'none';
        }
    }, []);
  


  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });


  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  );
}

export default MyApp;
