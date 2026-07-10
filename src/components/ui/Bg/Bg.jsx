"use client";

// #region ============================== Imports

// animation
import * as motion from "motion/react-client";
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

export function BgConstant() {
	return <div className="bg_constant" />;
}

export function BgNewPage() {
	return (
		<motion.div
			className="bg_new_page"
			initial={{ opacity: 1 }}
			animate={{ opacity: 0 }}
			transition={{ duration: 2, delay: 1 }}
		/>
	);
}
