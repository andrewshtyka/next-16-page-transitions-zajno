"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// hooks
import useRevealer from "@/hooks/useRevealer";

// providers / context

// styles
import css from "./Revealer.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Revealer() {
	const ref = React.useRef(null);
	useRevealer(ref);

	return <div ref={ref} className={css.container} />;
}
