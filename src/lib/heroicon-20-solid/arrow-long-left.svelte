<script lang="ts">
	const { ...restProps } = $props<{ [x: string]: unknown }>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 20 20"
	fill="currentColor"
	data-slot="icon"
	style="display: inline-block;"
	aria-hidden="true"
	role="img"
	{...restProps}
>
	<path
		fill-rule="evenodd"
		d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
		clip-rule="evenodd"
	/>
</svg>
