<script lang="ts">
	import { Hi20StarSolid } from "$lib/heroicon-20-solid";
	import Star from "$lib/heroicon-20-solid/star.svelte";
	import { Hi24PlusCircleOutline } from "$lib/heroicon-24-outline";
	import PlusCircle from "$lib/heroicon-24-outline/plus-circle.svelte";
	import { SiGithub } from "$lib/simple-icons";
	import Github from "$lib/simple-icons/github.svelte";
</script>

<style>
	.icon {
		font-size: 40px;
		color: red;
	}

	section :global(svg) {
		fill: red;
	}
</style>

<section>
	<h4>Import from barrel files</h4>
	<code lang="html">
		<pre>import { Hi20StarSolid } from "$lib/heroicon-20-solid";</pre>
		<pre>import { Hi24PlusCircleOutline } from "$lib/heroicon-24-outline";</pre>
		<pre>import { SiGithub } from "$lib/simple-icons";</pre>
	</code>
	<div class="icon"><Hi20StarSolid /></div>
	<div class="icon"><Hi24PlusCircleOutline /></div>
	<div class="icon"><SiGithub /></div>
</section>

<section>
	<h4>Import from barrel files</h4>
	<code lang="html">

		<pre>import Star from "$lib/heroicon-20-solid/star.svelte";</pre>
		<pre>import PlusCircle from "$lib/heroicon-24-outline/plus-circle.svelte";</pre>
		<pre>import Github from "$lib/simple-icons/github.svelte";</pre>
	</code>
	<div class="icon"><Star /></div>
	<div class="icon"><PlusCircle /></div>
	<div class="icon"><Github /></div>
</section>
