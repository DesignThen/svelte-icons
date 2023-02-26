<script lang="ts">
	import { Star } from "$lib/heroicon-20-solid";
	import { PlusCircle } from "$lib/heroicon-24-outline";
	import { Github, I500px } from "$lib/simple-icons";
</script>

<style>
	:global(.icon) {
		width: 24px;
		height: 24px;
	}

	section :global(svg) {
		fill: red;
	}
</style>

<section>
	<h4>Import from barrel files</h4>
	<code lang="html">
		<pre>import {"{ Star }"} from "$lib/heroicon-20-solid";</pre>
		<pre>import {"{ PlusCircle }"} from "$lib/heroicon-24-outline";</pre>
		<pre>import {"{ Github }"} from "$lib/simple-icons";</pre>
	</code>

	<Star class="icon" />
	<PlusCircle class="icon" />
	<Github class="icon" />
	<I500px class="icon" />
</section>
