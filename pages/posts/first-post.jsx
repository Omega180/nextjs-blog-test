import React from "react"
import TestComponent from "../../Components/TestComponent"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../Components/Layout"
import {useInView, useSpring, animated} from "react-spring"
import LayoutModule from "../../Components/Layout.module.css"
import utilStyles from "../../styles/utils.module.css"
import text from "../../text"
export default function FirstPost() {
	//Funcion para agregar animaciones fuera y dentro de la vista
	const [ref, newSprings] = useInView(
		() => ({
			delay: 500,
			from: {
				opacity: 0,
				x: -500,
			},
			to: {
				opacity: 1,
				x: 0,
			},
		}),
		{
			rootMargin: "-40% 0px 0% 0px",
		}
	)
	// Funcion para agregar animacion base al cargar el sitio web
	const springs = useSpring({
		delay: 200,
		from: {x: -100, opacity: 0},
		to: {x: 0, opacity: 1},
	})
	const goBackSprings = useSpring({
		delay: 500,
		from: {y: 10, opacity: 0},
		to: {y: 0, opacity: 1},
	})

	return (
		//para que funcione la animacion hay que usar el animated en un componente de HTMLbase como div, y agregarle el style de la funcion spring utilizada
		<animated.div style={springs}>
			<TestComponent />
			<animated.div className={utilStyles.centerItem} style={goBackSprings}>
				<p className={utilStyles.headingLg}>
					Go back <Link href={"/"}>To the Original page</Link>
				</p>
			</animated.div>
			<animated.div className={utilStyles.centerItem} style={goBackSprings}>
				<div className={LayoutModule.container}>
					<p className={utilStyles.lightText}>{text}</p>
					<p className={utilStyles.lightText}>{text}</p>
					<p className={utilStyles.lightText}>{text}</p>
				</div>
			</animated.div>

			<animated.div
				className={utilStyles.centerItem}
				ref={ref}
				style={newSprings}
			>
				<p className={utilStyles.headingLg}>This is different</p>
			</animated.div>
		</animated.div>
	)
}

{
	/* <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => {
                console.log("Script loaded succesfully")
            }}/> */
}
{
	/* <div className="mainContainer">
				<TestComponent />
			</div> */
}
