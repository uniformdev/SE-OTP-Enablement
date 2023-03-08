import PageComposition from "@/compositions/PageComposition";
import { getCompositionsForNavigation } from "@/lib/canvas/canvasClient";
import {
	withUniformGetStaticProps,
	withUniformGetStaticPaths,
} from "@uniformdev/canvas-next/project-map";
import runEnhancers from "@/lib/enhancers";

export const getStaticProps = withUniformGetStaticProps({
	param: "slug",
	preview: process.env.NODE_ENV === "development",
	callback: async (context, composition) => {
		if (composition) {
		 	await runEnhancers(composition, context);
		} else {
			return {
				notFound: true,
			};
		}
		const { preview = false } = context || {};
		const menuItems = await getCompositionsForNavigation(preview);
		return {			
			props: { menuItems, preview, composition },
			revalidate: 60,
		};
	},
});

export const getStaticPaths = withUniformGetStaticPaths({
	preview: process.env.NODE_ENV === "development",
});

export default PageComposition;