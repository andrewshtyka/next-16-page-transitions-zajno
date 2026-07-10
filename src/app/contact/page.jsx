// "use client";

// #region ============================== Imports

// animation
// import { motion } from "motion/react";

// assets
import img_src from "../../../public/images/img_h_3.webp";

// components
import Revealer from "@/components/ui/Revealer/Revealer";
import Image from "next/image";
import { BgNewPage } from "@/components/ui/Bg/Bg";

// constants

// hooks

// providers / context

// styles
// import css from ''

// utility
import React from "react";

// #endregion ===========================

export default function ContactPage() {
	return (
		<main>
			<BgNewPage />

			<Revealer />

			<section className="section">
				<h1 className="f_h1">Contact</h1>
				<Image src={img_src} alt="" className="img" />
			</section>
		</main>
	);
}
