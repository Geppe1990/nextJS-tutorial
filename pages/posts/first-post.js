import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

const FirstPost = () => (
	<Layout>
		<Head>
			<title>First Post</title>
		</Head>

		<Script
			/* Il componente Script serve a renderizzare script di terze parti */
			src="https://connect.facebook.net/en_US/sdk.js"
			/* Definisce come gestire lo script, in questo caso al load della pagina */
			strategy="lazyOnload"
			/* Lancia uno script quando è stato caricato */
			onLoad={() => console.log('script loaded correctly, window.FB has been populated')}
		/>
		<h1>First Post</h1>
		<h2>
			{/* Il componente Link permette di renderizzare il componente linkato via client-side */}
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</h2>
	</Layout>
);

export default FirstPost;