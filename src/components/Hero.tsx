import { ComponentProps } from "@uniformdev/canvas-react";
import Splitter from "./Splitter";

export default function Hero( {title, description, image} : {title: string, description: string, image: string}) {
	return (
		<>
			<div className="pt-24">
				<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
					<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
						<h1 className="my-4 text-5xl font-bold leading-tight">
							{title}
						</h1>
						<p className="leading-normal text-2xl mb-8">
							{description}
						</p>
					</div>
					<div className="w-full md:w-3/5 py-6 text-center">
						<img src={image} alt="" />
					</div>
				</div>
			</div>
			<Splitter />
		</>
	);
}
