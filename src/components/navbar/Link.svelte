<script lang="ts">
	import type { LinkProps } from '$common/types'

	export let item: LinkProps = {
		href: '',
		text: '',
		visible: true,
	}
	const { href, text } = item
</script>

{#if !item.visible}
	<a {href} class="rounded-lg bg-blue-700 px-4 py-1">
		{text}
	</a>
{/if}
