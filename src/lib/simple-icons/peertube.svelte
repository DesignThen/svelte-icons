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
	><title>PeerTube</title><path
		d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545"
	/></svg
>
