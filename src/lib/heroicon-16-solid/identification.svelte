<script lang="ts">
	const { ...restProps } = $props<{ [x: string]: unknown }>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16 16"
	fill="currentColor"
	data-slot="icon"
	style="display: inline-block;"
	aria-hidden="true"
	role="img"
	{...restProps}
>
	<path
		fill-rule="evenodd"
		d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm2.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 5.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm.75 3.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM10 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 10 8Zm-2.378 3c.346 0 .583-.343.395-.633A2.998 2.998 0 0 0 5.5 9a2.998 2.998 0 0 0-2.517 1.367c-.188.29.05.633.395.633h4.244Z"
		clip-rule="evenodd"
	/>
</svg>
