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
	><title>Qwant</title><path
		d="M11.39 0c5.322 0 9.652 4.46 9.652 9.944 0 5.358-4.132 9.738-9.285 9.938l-.235.006h9.488L22.262 24h-9.62l-1.253-4.11c-5.321-.001-9.65-4.462-9.65-9.946S6.067 0 11.388 0zm0 3.364c-3.522 0-6.387 2.952-6.387 6.58 0 3.63 2.865 6.58 6.387 6.58 3.522 0 6.387-2.95 6.387-6.58 0-3.628-2.865-6.58-6.387-6.58z"
	/></svg
>
