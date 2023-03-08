import {
	componentStore,
	createComponentStoreResolver,
	DefaultNotImplementedComponent,
	registerUniformComponent,
} from "@uniformdev/canvas-react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import TalkList from "./TalkList";
import Talk from "./Talk";
import HeroContentful from "./HeroContentful";

registerUniformComponent({ type: "header", component: Header});
registerUniformComponent({ type: "hero", component: Hero});
registerUniformComponent({ type: "heroContentful", component: HeroContentful});
registerUniformComponent({ type: "footer", component: Footer});
registerUniformComponent({ type: "talkList", component: TalkList});
registerUniformComponent({ type: "talk", component: Talk});

export const RenderComponentResolver = () => {
	return createComponentStoreResolver({
		store: componentStore,
		defaultComponent: DefaultNotImplementedComponent,
	});
};
