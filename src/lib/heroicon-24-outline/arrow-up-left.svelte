<script lang="ts">
	const { ...restProps } = $props<{ [x: string]: unknown }>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	data-slot="icon"
	style="display: inline-block;"
	aria-hidden="true"
	role="img"
	{...restProps}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
	/>
</svg>
