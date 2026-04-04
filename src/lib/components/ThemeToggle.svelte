<script lang="ts">
	import { browser } from '$app/environment';

	// Read initial state synchronously on the client; false is the SSR default.
	let isDark = $state(browser ? document.documentElement.classList.contains('dark') : false);

	$effect(() => {
		// Only wire up the OS-preference listener when no stored preference exists.
		const stored = localStorage.getItem('theme');
		if (stored) return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		function handleChange(e: MediaQueryListEvent) {
			isDark = e.matches;
			document.documentElement.classList.toggle('dark', e.matches);
		}

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	});

	function toggle() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
</script>

<button
	type="button"
	class="group relative flex h-11 w-11 items-center justify-center rounded hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:hover:bg-neutral-800 dark:focus-visible:ring-amber-300"
	onclick={toggle}
	aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
	aria-pressed={isDark}
>
	<!-- Sun icon -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="absolute text-neutral-500 transition-[transform,opacity] duration-200 group-hover:text-neutral-950 dark:rotate-90 dark:scale-0 dark:opacity-0 dark:group-hover:text-neutral-50"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="4" />
		<line x1="12" y1="2" x2="12" y2="4" />
		<line x1="12" y1="20" x2="12" y2="22" />
		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		<line x1="2" y1="12" x2="4" y2="12" />
		<line x1="20" y1="12" x2="22" y2="12" />
		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	</svg>

	<!-- Moon icon -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="absolute -rotate-90 scale-0 text-neutral-500 opacity-0 transition-[transform,opacity] duration-200 group-hover:text-neutral-950 dark:rotate-0 dark:scale-100 dark:opacity-100 dark:group-hover:text-neutral-50"
		aria-hidden="true"
	>
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
	</svg>
</button>
