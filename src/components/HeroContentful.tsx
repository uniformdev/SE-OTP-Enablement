import Splitter from "./Splitter";
import Image from "next/image";

export type ImageProps = {
	fields: {
		file: {
			url?: string;
			details?: {
				image?: {
					width?: number;
					height?: number;
				};
			};
		};
		title?: string;
	};
};

export type HeroProps = {
	entry?: {
		fields?: {
			title?: string;
			description?: string;
			buttonText?: string;
			buttonLink?: string;
			image?: ImageProps;
		};
	};
};

export default function HeroContentful(props: HeroProps) {
	return (
		<>
			<div className="pt-24">
				<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
					<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
						<h1 className="my-4 text-5xl font-bold leading-tight">
							{props.entry?.fields?.title}
						</h1>
						<p className="leading-normal text-2xl mb-8">
							{props.entry?.fields?.description}
						</p>
					</div>
					<div className="w-full md:w-3/5 py-6 text-center">
						{props.entry?.fields?.image && (
							<Image
								className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
								width={
									props.entry?.fields?.image?.fields?.file?.details?.image
										?.width || 0
								}
								height={
									props.entry?.fields?.image?.fields?.file?.details?.image
										?.height || 0
								}
								src={props.entry?.fields?.image?.fields?.file?.url || ""}
								alt={props.entry?.fields?.image?.fields?.title || ""}
							/>
						)}
					</div>
				</div>
			</div>
			<Splitter />
		</>
	);
}
