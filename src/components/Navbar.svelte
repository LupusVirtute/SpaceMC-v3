<script lang="ts">
	import Link from './navbar/Link.svelte'
	import type { LinkProps } from '$common/types'
	import Icon from 'fa-svelte'
	import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket.js'

	const items: LinkProps[] = [
		{
			href: '/',
			text: 'Strona główna',
		},
		{
			href: '/about',
			text: 'O nas',
		},
		{
			href: '/contact',
			text: 'Kontakt',
		},
		{
			href: '/regulamin',
			text: 'Regulamin',
		},
		{
			href: '/panel',
			text: 'Panel',
		},
	]

	let isNavigationClosed = true

	function flipNavigation() {
		isNavigationClosed = !isNavigationClosed
	}
</script>

<header class="fixed z-[100] w-full flex justify-center bg-blue-800">
	<nav
		class="grid md:grid-cols-[8fr,3fr] gap-y-4 px-4 items-center z-10 w-full py-4 place-items-center text-xs relative"
	>
		<div
			class="flex flex-row flex-wrap gap-6 items-center justify-center py-2 md:justify-start relative z-10"
		>
			{#each items as item}
				<Link {item} />
			{/each}
		</div>
		<div
			class="[transform:rotate(135deg);] md:[transform:rotate(0deg);] absolute md:static bottom-[-1rem] bg-blue-600 md:bg-transparent rounded-full p-2 mouse-pointer border-r-yellow-700 border-t-yellow-700 border-t-2 border-r-2 md:border-0"
			on:click={flipNavigation}
		>
			<Icon icon={faRocket} class="text-2xl" />
		</div>
	</nav>
</header>
