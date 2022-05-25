const shared: svelte.JSX.SVGProps<SVGSVGElement> = {
	role: "img",
	"aria-hidden": "true",
	style: `width: auto; display: inline-block;`,
	// viewBox: "0 0 24 24",
};

export const solid: svelte.JSX.SVGProps<SVGSVGElement> = {
	...shared,
	fill: "currentColor",
};

export const outline: svelte.JSX.SVGProps<SVGSVGElement> = {
	...shared,
	stroke: "currentColor",
};

export const iconProps = {
	solid,
	outline,
};
