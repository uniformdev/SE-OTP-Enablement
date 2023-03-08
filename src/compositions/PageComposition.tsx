import Head from "next/head";
import {
	createUniformApiEnhancer,
	RootComponentInstance,
} from "@uniformdev/canvas";
import { UniformSlot, UniformComposition } from "@uniformdev/canvas-react";
import { RenderComponentResolver } from "@/components/canvasComponents";
import { MenuItem } from "@/components/NavMenu";
import { MenuItemsProvider } from "@/lib/providers/MenuItemsProvider";

export default function PageComposition({
	composition,
	menuItems,
}: {
	composition: RootComponentInstance;
	menuItems: MenuItem[];
}) {
	if (!composition) return null;

	const contextualEditingEnhancer = createUniformApiEnhancer({
		apiUrl: "/api/preview",
	});

	const componentStore = RenderComponentResolver();

	return (
		<>
			<Head>
				<title>{`Uniform Example${
					composition.parameters?.pageTitle?.value
						? ` | ${composition.parameters.pageTitle.value}`
						: ""
				}`}</title>
				<meta
					name="description"
					content={
						(composition.parameters?.pageDescription?.value as string) || ""
					}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<UniformComposition
					data={composition}
					resolveRenderer={componentStore}
					contextualEditingEnhancer={contextualEditingEnhancer}
				>
					<MenuItemsProvider menuItems={menuItems}>
						<UniformSlot name="header" />
					</MenuItemsProvider>
					<UniformSlot
						name="body"
						emptyPlaceholder={<div className="h-96 w-full"></div>}
					/>
					<UniformSlot name="footer" />
				</UniformComposition>
			</div>
		</>
	);
}
