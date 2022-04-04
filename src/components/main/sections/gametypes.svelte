<script>
	import Game from './game-types/game.svelte'
</script>

<div class="grid w-full justify-center gap-16 bg-gray-900 py-32">
	<h2
		class="text-center font-playfair text-2xl uppercase leading-3 tracking-wider"
	>
		nasze tryby
	</h2>
	<div class="grid gap-4 px-8 lg:grid-cols-[1fr,1fr]">
		<Game title="Działki" color="#2563EB" />
		<Game title="SkyBlock" />
	</div>
</div>
