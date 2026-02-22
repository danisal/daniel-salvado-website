<script lang="ts">
	export let href: string | undefined = undefined;
	export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	let className: string = '';
	export { className as class };

	const baseClasses =
		'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses = {
		primary:
			'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg',
		secondary:
			'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 shadow-md hover:shadow-lg',
		outline:
			'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950',
		ghost: 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-stone-800'
	};

	const sizeClasses = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-5 py-2.5 text-base',
		lg: 'px-7 py-3.5 text-lg'
	};
</script>

{#if href}
	<a
		{href}
		class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {className}"
	>
		<slot />
	</a>
{:else}
	<button
		class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {className}"
		on:click
	>
		<slot />
	</button>
{/if}
