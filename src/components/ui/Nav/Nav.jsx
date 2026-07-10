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

// styles
import css from "./Nav.module.css";

// utility
import React from "react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

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

export default function Nav() {
	const router = useTransitionRouter();
	const pathname = usePathname();

	function handleNavigation(path) {
		return function (e) {
			if (path === pathname) {
				e.preventDefault();
				return;
			}
			router.push(path);
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
						>
							{title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
