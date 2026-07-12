"use client";

import { blockScroll } from "@/utils/blockScroll";
// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function BackForwardTransitionHandler() {
	const activeTransition = React.useRef(null);

	React.useEffect(() => {
		function handleBrowserButtons() {
			blockScroll(true);
		}

		window.addEventListener("popstate", handleBrowserButtons);
		return () =>
			window.removeEventListener("popstate", handleBrowserButtons);
	}, []);

	React.useEffect(() => {
		if (!document.startViewTransition) return;

		const originalScrollRestoration = window.history.scrollRestoration;
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}

		const original = document.startViewTransition.bind(document);

		document.startViewTransition = (callback) => {
			if (activeTransition.current) {
				callback();
				return activeTransition.current;
			}

			const wrappedCallback = async () => {
				await callback();
				window.scrollTo(0, 0);
			};

			// const transition = original(callback);
			const transition = original(wrappedCallback);
			activeTransition.current = transition;

			transition.finished
				.catch(() => {
					// Safari needs this
				})
				.finally(() => {
					blockScroll(false);
					activeTransition.current = null;
				});

			return transition;
		};

		return () => {
			document.startViewTransition = original;
			if ("scrollRestoration" in window.history) {
				window.history.scrollRestoration = originalScrollRestoration;
			}
		};
	}, []);

	return null;
}
