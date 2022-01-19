<script lang="ts">
	import Particles from 'svelte-particles'

	export let config = {
		fpsLimit: 30,
		particles: {
			color: {
				value: ['#fff', '#55f'],
			},
			shape: {
				type: 'star',
			},
			shadow: {
				enable: true,
				blur: 10,
				color: ['#00f', '#ff0'],
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
</script>

<div class={className + ' relative'}>
	<div class="relative z-10">
		<slot />
	</div>
	<div class="w-screen absolute bottom-[-7rem]">
		<Particles options={config} />
	</div>
</div>
