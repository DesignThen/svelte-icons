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
		d="M5.47 2.22A.75.75 0 0 1 6 2h7.25a.75.75 0 0 1 0 1.5h-6.5v7.94l.97-.97a.75.75 0 0 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V2.75a.75.75 0 0 1 .22-.53Z"
		clip-rule="evenodd"
	/>
</svg>
