import Head from "next/head"
import Layout, {siteTitle} from "../Components/Layout"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

import {useSpring, animated} from "react-spring"
import {getSortedPostsData} from "../lib/posts"

/*
You can also query the database directly 
This is possible because getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.

This is useful when you need to fetch data at build time, not useful for data that changes on every user request
*/

export async function getStaticProps() {
	//Here you can also run fetch/axios requests for data
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default function Home({allPostsData}) {
	const springs = useSpring({
		delay: 500,
		from: {x: 0, opacity: 0},
		to: {x: 10, opacity: 1},
	})

	return (
		<animated.div style={springs}>
			<Layout home>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				{/* usando estos classname puedes utilizar varios estilos de un modulo css al mismo tiempo */}
				<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
					<p>Hello, My name is Ciro Delgado</p>
					<p>
						(This is a sample website - you'll be building a site like this on{" "}
						<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
					</p>
					<p>
						{" "}
						<Link href={"/posts/first-post"}>Enter my first post</Link>{" "}
					</p>
					<ul className={utilStyles.lists}>
						{allPostsData.map(({id, date, title}) => (
							<li>
								{title}
								<br />
								{id}
								<br />
								{date}
							</li>
						))}
					</ul>
				</section>
			</Layout>
		</animated.div>
	)
}
