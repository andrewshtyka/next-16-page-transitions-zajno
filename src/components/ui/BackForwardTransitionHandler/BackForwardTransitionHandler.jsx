"use client";

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
		if (!document.startViewTransition) return;

		const original = document.startViewTransition.bind(document);

		document.startViewTransition = (callback) => {
			if (activeTransition.current) {
				callback();
				return activeTransition.current;
			}

			const transition = original(callback);
			activeTransition.current = transition;

			transition.finished
				.catch(() => {
					// Safari needs this
				})
				.finally(() => {
					activeTransition.current = null;
				});

			return transition;
		};

		return () => {
			document.startViewTransition = original;
		};
	}, []);

	return null;
}
