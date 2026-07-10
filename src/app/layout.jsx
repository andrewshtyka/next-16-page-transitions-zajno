// #region ============================== Imports

// components
import Nav from "@/components/ui/Nav/Nav";
import { BgConstant } from "@/components/ui/Bg/Bg";

// fonts
import { font } from "@/utils/importFonts";

// providers

// styles
import "@/styles/tokens/spacings.css";
import "@/styles/tokens/colors.css";
import "@/styles/tokens/fonts.css";
import "@/styles/reset.css";
import "@/styles/global.css";

// utility
import { ViewTransitions } from "next-view-transitions";

// #endregion ===========================

export const metadata = {
	title: "Page Transition #1",
	description: "Page Transition #1",
};

export default function RootLayout({ children }) {
	return (
		<ViewTransitions>
			<html lang="en" className={font.variable}>
				<body>
					<BgConstant />
					<Nav />
					{children}
				</body>
			</html>
		</ViewTransitions>
	);
}
