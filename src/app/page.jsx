"use client";

// #region ============================== Imports

// animation
// import { motion } from "motion/react";

// assets

// components
import Revealer from "@/components/ui/Revealer/Revealer";
import { BgNewPage } from "@/components/ui/Bg/Bg";

// constants

// data
import { imagesHome } from "@/data/imagesHome";

// hooks
import Image from "next/image";

// providers / context

// stores

// styles
// import css from ''

// utility
import React from "react";
import { shuffle } from "lodash";

// #endregion ===========================

export default function HomePage() {
	const [images, setImages] = React.useState(imagesHome);

	React.useEffect(() => {
		function handler() {
			setImages(shuffle(imagesHome));
		}
		handler();
	}, []);

	return (
		<main>
			<BgNewPage />
			<Revealer />
			<section className="section">
				<h1 className="f_h1">Home page</h1>

				<ul className="list">
					{images.map(({ id, src, alt }, i) => {
						const loading = i === 0 ? "eager" : "lazy";

						return (
							<Image
								key={id}
								src={src}
								alt={alt}
								className="img"
								loading={loading}
							/>
						);
					})}
				</ul>
			</section>
		</main>
	);
}
