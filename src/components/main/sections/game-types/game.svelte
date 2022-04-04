<script>
	import Seperator from '$assets/img/dzialki.png?url'
	import ColorfulParticles from '$components/decor/colorful-particles.svelte'
	export let title = ''
	export let color = '#fff'
</script>

<ColorfulParticles className="z-10 group " {color}>
	<div
		class="grid max-w-[600px] scale-95 grayscale transition transition-all duration-500 hover:scale-100 hover:cursor-pointer hover:grayscale-0"
	>
		<img
			src={Seperator}
			class="mx-auto w-3/4 rounded-t-full border-2 border-b-0 border-blue-800"
			alt=""
		/>
		<div class="grid gap-6 rounded bg-zinc-900 p-4">
			<h3 class="mt-4 text-center font-playfair text-xl uppercase">
				{title}
			</h3>
			<hr class="border-gray-800" />
			<div class="w-full p-4 text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Maiores, iste. Doloremque nisi nostrum enim provident. Adipisci
				doloremque perferendis fugit, facere esse quibusdam neque
				recusandae inventore eaque incidunt maxime modi suscipit.
			</div>
		</div>
	</div>
</ColorfulParticles>
