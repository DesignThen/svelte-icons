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
	fill="currentColor"
	><title>Monster</title><path
		d="M0 0V24H5.42V12.39L12 18.19L18.58 12.39V24H24V0L12 11.23L0 0Z"
	/></svg
>
