"use client";

// #region ============================== Imports

// animation
// import { motion } from "motion/react";

// assets
import img_src from "../../public/images/img_h_1.webp";

// components
import Revealer from "@/components/ui/Revealer/Revealer";
import { BgNewPage } from "@/components/ui/Bg/Bg";

// constants

// hooks
import Image from "next/image";

// providers / context

// stores

// styles
// import css from ''

// utility
import React from "react";

// #endregion ===========================

export default function HomePage() {
	return (
		<main>
			<BgNewPage />
			<Revealer />
			<section className="section">
				<h1 className="f_h1">Home page</h1>

				<Image src={img_src} alt="" className="img" />
			</section>
		</main>
	);
}
