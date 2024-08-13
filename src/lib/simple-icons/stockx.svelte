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
	><title>StockX</title><path
		d="M13.74 16.5 22.5 24v-6l-7-6 7-6V0L10.26 10.5v-3L1.5 0v6l7 6-7 6v6l12.24-10.5Z"
	/></svg
>
