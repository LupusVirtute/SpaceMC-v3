<script lang="ts">
	import Link from './navbar/Link.svelte'
	import type { LinkProps } from '$common/types'
	import Icon from 'fa-svelte'
	import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket.js'
	export const prerender = false

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

<header class="fixed z-[100] flex w-full justify-center bg-blue-800">
	<nav
		class="relative z-10 grid w-full place-items-center items-center gap-y-4 px-4 py-4 text-xs md:grid-cols-[8fr,3fr]"
	>
		<div
			class="relative z-10 flex flex-row flex-wrap items-center justify-center gap-6 py-2 md:justify-start"
		>
			{#each items as item}
				<Link {item} />
			{/each}
		</div>
		<div
			class="mouse-pointer absolute bottom-[-1.8rem] rounded-full border-t-2 border-r-2 border-r-yellow-700 border-t-yellow-700 bg-blue-600 p-2 [transform:rotate(135deg);] md:static md:border-0 md:bg-transparent md:[transform:rotate(0deg);]"
			on:click={flipNavigation}
		>
			<Icon icon={faRocket} class="text-2xl" />
		</div>
	</nav>
</header>
