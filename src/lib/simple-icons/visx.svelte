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
	><title>visx</title><path
		d="M.00195 0 12 11.51953 23.99805 0h-5.8711L12 6.08984 5.87305 0Zm23.9961 0L12.47852 11.99805l11.51953 11.99804V18.125l-6.08985-6.12695 6.08985-6.12696ZM.00195.0039V5.875l6.08985 6.12695-6.08985 6.12696V24l11.5039-11.99805Zm0 23.9961h5.8711L12 17.91016 18.12695 24h5.8711L12 12.4707Z"
	/></svg
>
