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
	><title>Clever Cloud</title><path
		d="M4 12.862.416 18.431 11.168 24ZM12.831 0 20 11.139l3.584-5.57Zm-.001 24 10.753-5.569L20 12.862Zm11.169-6.647V6.648L20.554 12ZM12 .43 4.832 11.568h14.336Zm0 23.139 7.168-11.139H4.832Zm-8-12.43L11.168 0 .416 5.569ZM0 6.647v10.707L3.445 12Z"
	/></svg
>
