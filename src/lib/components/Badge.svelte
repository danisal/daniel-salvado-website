<script lang="ts">
	export let variant: 'default' | 'primary' | 'accent' | 'success' | 'warning' = 'default';
	export let size: 'sm' | 'md' = 'md';
	let className: string = '';
	export { className as class };

	const baseClasses = 'inline-flex items-center rounded-full font-medium';

	const variantClasses = {
		default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
		primary: 'bg-blue-500 text-white',
		accent: 'bg-amber-500 text-white',
		success: 'bg-green-500 text-white',
		warning: 'bg-orange-500 text-white'
	};

	const sizeClasses = {
		sm: 'px-2 py-0.5 text-xs',
		md: 'px-3 py-1 text-sm'
	};
</script>

<span class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {className}">
	<slot />
</span>
