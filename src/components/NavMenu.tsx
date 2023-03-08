import { MenuItemsContext } from "../lib/providers/MenuItemsProvider";
import Link from "next/link";
import { useContext } from "react";

export interface MenuItem {
	title: string;
	url: string;
}

export default function NavMenu() {
	const menuItems = useContext(MenuItemsContext);

	return (
		<ul className="list-reset lg:flex justify-end flex-1 items-center space-x-2 lg:mr-4">
			{menuItems.map((menuItem) => {
				return (
					<li key={menuItem.title}>
						<Link legacyBehavior prefetch={false} href={menuItem.url}>
							<a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
								{menuItem.title}
							</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
