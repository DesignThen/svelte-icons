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
	><title>Platform.sh</title><path
		d="M24 0H0v9.541h24V0zM24 20.755H0V24h24v-3.245zM0 12.618h24v4.892H0v-4.892z"
	/></svg
>
