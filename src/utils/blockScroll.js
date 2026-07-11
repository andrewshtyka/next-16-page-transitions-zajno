export function blockScroll(state) {
	const el = document.documentElement;

	if (!el) return;

	if (state) {
		el.style.overflow = "hidden";
	} else {
		el.style.overflow = "visible";
	}
}
