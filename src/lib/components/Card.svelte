<script lang="ts">
	export let href: string | undefined = undefined;
	export let variant: 'default' | 'elevated' | 'outlined' = 'default';
	let className: string = '';
	export { className as class };

	const baseClasses =
		'rounded-lg transition-all duration-300 ease-in-out group overflow-hidden';
	const variantClasses = {
		default: 'bg-white dark:bg-stone-900 shadow-md hover:shadow-xl',
		elevated: 'bg-white dark:bg-stone-900 shadow-lg hover:shadow-2xl hover:-translate-y-1',
		outlined: 'border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600'
	};
</script>

{#if href}
	<a
		{href}
		class="{baseClasses} {variantClasses[variant]} {className} block cursor-pointer"
	>
		<slot />
	</a>
{:else}
	<div class="{baseClasses} {variantClasses[variant]} {className}">
		<slot />
	</div>
{/if}
