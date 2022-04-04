<script lang="ts">
	import { onMount } from 'svelte'

	let ParticlesComponent

	onMount(async () => {
		const module = await import('svelte-particles')

		ParticlesComponent = module.default
	})
	export let color = '#fff'

	let config = {
		fpsLimit: 30,
		particles: {
			color: {
				value: color,
			},
			shape: {
				type: 'square',
			},
			rotate: {
				direction: 'random',
				value: 50,
				animation: {
					enable: true,
					speed: 5,
					sync: false,
				},
			},
			shadow: {
				enable: true,
				blur: 10,
				color: ['#000'],
				offset: {
					x: 1,
					y: 1,
				},
			},
			opacity: {
				value: 1,
				random: {
					enable: true,
					minimumValue: 0.2,
				},
			},
			size: {
				value: 4,
				random: {
					enable: true,
					minimumValue: 2,
				},
			},
			move: {
				enable: true,
				speed: 1,
				direction: 'top',
				outMode: 'destroy',
			},
		},
		interactivity: {
			detectsOn: 'canvas',
			events: {
				resize: true,
			},
		},
		detectRetina: true,

		emitters: {
			direction: 'top',
			position: {
				x: 0,
				y: 100,
			},
			rate: {
				delay: 5,
				quantity: 50,
			},
			size: {
				width: 900,
				height: 0,
			},
		},
		fullScreen: {
			enable: false,
		},
		pauseOnOutsideViewport: true,
	}
	export let className = ''
	const random = (length = 8) => {
		return Math.random().toString(16).substr(2, length)
	}
</script>

<div class={className + ' group relative'}>
	<div class="relative z-10">
		<slot />
	</div>
	<div
		class="absolute top-0 opacity-0 transition-all duration-1000 group-hover:opacity-100"
	>
		<svelte:component
			this={ParticlesComponent}
			id={random(20)}
			options={config}
		/>
	</div>
</div>
