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
	><title>Graphite</title><path
		d="m15.215 0-12 3.215-3.215 12L8.785 24l12-3.215 3.215-12L15.215 0Zm1.958 20.966H6.827L1.655 12l5.172-8.966h10.346L22.345 12l-5.172 8.966Zm.68-14.823L9.86 4 4.006 9.858l2.14 8 7.995 2.141 5.853-5.857-2.14-8Z"
	/></svg
>
