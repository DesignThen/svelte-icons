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
	><title>Shotcut</title><path
		d="M0 0h6.667v24H0v-.889h5.778V.889H0V0zm7.556 0v24H24v-.889H8.444V.889H24V0H7.556zm1.388 22.611H24V1.389H8.944v21.222zM5.278 1.389H0v21.222h5.278V1.389z"
	/></svg
>
