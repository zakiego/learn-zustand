import "~/styles/globals.css";
import { NextSeo } from "next-seo";

// import App from "next/app";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	const meta = {
		title: "Learn Zustand",
		description: "Bear necessities for state management in React",
		url: "https://learn-zustand.vercel.app",
		images: "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg",
	};

	return (
		<>
			<NextSeo
				description={meta.description}
				title={meta.title}
				openGraph={{
					url: meta.url,
					title: meta.title,
					description: meta.description,
					site_name: meta.title,
					images: [{ url: meta.images }],
				}}
				twitter={{
					handle: "@handle",
					site: "@site",
					cardType: "summary_large_image",
				}}
			/>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
