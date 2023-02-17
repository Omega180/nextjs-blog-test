import React from "react"
import Image from "next/image"
export default function TestComponent() {
	return (
		<div className="testComponent">
			<div className="container d-flex justify-content-center">
				<Image src="/images/profile.jpg" height={144} width={144} alt="Ciro" />
			</div>
			<h1 className="testComponentH1 container d-flex justify-content-center">
				Hello, I'm a test component
			</h1>
		</div>
	)
}
