import { ComponentProps } from "@uniformdev/canvas-react";

const AudienceLabel: React.FC<{ audience?: string }> = ({ audience }) => {
	return (
		<span
			className={`ml-6 px-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
				audience === "Developers" ? "green" : "indigo"
			}-100 text-${audience === "Developers" ? "green" : "indigo"}-800`}
		>
			{audience}
		</span>
	);
};

export default function Talk({ title, audience, description }: { title: string, audience: string, description: string}) {
	return (
		<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow space-y-2 pt-2">
			<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden">
				<div className="mt-3 mb-3 flex items-center justify-start">
					<AudienceLabel audience={audience} />
				</div>
			</div>
			<div className="w-full font-bold text-xl text-gray-800 px-6">
				{title}
			</div>
			<div className="text-gray-800 px-6 pb-6 text-sm">{description}</div>
		</div>
	);
}
