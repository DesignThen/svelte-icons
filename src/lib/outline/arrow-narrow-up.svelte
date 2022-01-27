<script>
	import { iconProps } from "$lib/icon-props";
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="none"
	{...iconProps.outline}
	{...$$props}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M8 7l4-4m0 0l4 4m-4-4v18"
	/>
</svg>
