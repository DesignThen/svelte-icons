<script lang="ts">
	const { ...restProps } = $props<{ [x: string]: unknown }>();
</script>

<svg
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	style="display: inline-block;"
	aria-hidden="true"
	role="img"
	{...restProps}
	fill="currentColor"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg
>
