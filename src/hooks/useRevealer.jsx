"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.3, 1");

export default function useRevealer(ref) {
	useGSAP(
		() => {
			const el = ref.current;
			if (!el) return;

			gsap.to(el, {
				scaleY: 0,
				duration: 2,
				ease: "hop",
			});
		},
		{ scope: ref }
	);
}
