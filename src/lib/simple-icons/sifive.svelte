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
	><title>SiFive</title><path
		d="M2.9056 12.4076 6.0245 2.737h11.9511l1.2129 3.7623H8.6317l-.6751 2.1342h11.92l1.792 5.5583L12 21.319l-9.1888-6.7771h6.2049l2.9565 2.1805 5.8505-4.3125-14.9175-.0023zM19.4166.4426H4.5835L0 14.7306l12 8.8268 12-8.8298L19.4165.4427z"
	/></svg
>
