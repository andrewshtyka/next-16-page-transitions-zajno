"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Link from "next/link";

// constants

// hooks

// providers / context

// stores

// styles
import css from "./Nav.module.css";

// utility
import React from "react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { blockScroll } from "@/utils/blockScroll";

// #endregion ===========================

const navItems = [
	{
		id: 1,
		title: "Home",
		href: "/",
	},
	{
		id: 2,
		title: "Projects",
		href: "/projects",
	},
	{
		id: 3,
		title: "About",
		href: "/about",
	},
	{
		id: 4,
		title: "Contact",
		href: "/contact",
	},
];

const routerOptions = (callback) => ({
	onTransitionReady: () => {
		const id = setTimeout(() => {
			blockScroll(false);
			callback(false);
		}, TIME_BEFORE_INTERACTIVE_MS);

		return () => clearTimeout(id);
	},
});

const TIME_BEFORE_INTERACTIVE_MS = 2200;

export default function Nav() {
	const [isLockedLink, setIsLockedLink] = React.useState(false);
	const router = useTransitionRouter();
	const pathname = usePathname();

	function handleNavigation(path) {
		return function (e) {
			if (path === pathname) {
				e.preventDefault();
				return;
			}
			blockScroll(true);
			setIsLockedLink(true);
			router.push(path, routerOptions(setIsLockedLink));
		};
	}

	return (
		<ul className={css.list}>
			{navItems.map(({ id, title, href }) => {
				const appliedClass =
					href === pathname ? `${css.is_active}` : " ";

				return (
					<li key={id}>
						<Link
							href={href}
							className={`f_body_2 ${appliedClass}`}
							onClick={handleNavigation(href)}
							style={{
								pointerEvents: isLockedLink
									? "none"
									: "initial",
							}}
						>
							{title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
