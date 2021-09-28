import "~/styles/globals.css";
import Head from "next/head";

// import App from "next/app";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Head>
			<title>Try Zustand</title>
			<Component {...pageProps} />
		</Head>
	);
}

export default MyApp;
