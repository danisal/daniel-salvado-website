<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import { onMount } from 'svelte';

	export let data;
	const { posts } = data;

	let heroVisible = false;
	let sectionsVisible: boolean[] = [];

	onMount(() => {
		heroVisible = true;

		// Intersection Observer for scroll animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = parseInt(entry.target.getAttribute('data-section') || '0');
						sectionsVisible[index] = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('.animate-on-scroll').forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	});

	const techStack = [
		'TypeScript',
		'JavaScript',
		'React',
		'Svelte',
		'Next.js',
		'SvelteKit',
		'Node.js',
		'GraphQL',
		'Playwright',
		'Git',
		'Docker',
		'Vercel',
		'Cloudflare'
	];

	const recentPosts = posts.slice(0, 3);
</script>

<main class="relative">
	<!-- Hero Section -->
	<section
		class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:from-stone-950 dark:via-purple-950/20 dark:to-stone-950"
	>
		<!-- Background decoration -->
		<div
			class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"
		></div>

		<div class="container mx-auto px-7 relative z-10">
			<div
				class="text-center max-w-4xl mx-auto"
				class:animate-fade-in-up={heroVisible}
			>
				<picture class="mx-auto block mb-8">
					<source type="image/avif" srcset="assets/profile-pic.avif" />
					<source type="image/webp" srcset="assets/profile-pic.webp" />
					<img
						alt="Daniel Salvado"
						class="aspect-square h-32 w-32 md:h-40 md:w-40 rounded-full object-cover mx-auto shadow-2xl ring-4 ring-white dark:ring-stone-800 transition-transform duration-300 hover:scale-105"
						loading="eager"
						src="assets/profile-pic.jpg"
						width="160"
						height="160"
					/>
				</picture>

				<h1
					class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-blue-950 dark:text-blue-50 leading-tight"
				>
					Hi, I'm <span
						class="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
						>Daniel Salvado</span
					>
				</h1>

				<p
					class="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-4 font-medium"
				>
					Full Stack Developer & DevOps Engineer
				</p>

				<p class="text-lg md:text-xl text-blue-700 dark:text-blue-300 mb-10 max-w-2xl mx-auto">
					I build beautiful web applications with modern JavaScript frameworks and love sharing
					what I learn along the way.
				</p>

				<div class="flex flex-wrap gap-4 justify-center">
					<Button href="/work" variant="primary" size="lg">View My Work</Button>
					<Button href="/blog" variant="outline" size="lg">Read My Blog</Button>
				</div>
			</div>
		</div>
	</section>

	<!-- Tech Stack Section -->
	<section
		class="py-20 bg-white dark:bg-stone-900 animate-on-scroll"
		data-section="0"
		class:animate-fade-in-up={sectionsVisible[0]}
	>
		<div class="container mx-auto px-7">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-950 dark:text-blue-50">
				Technologies I Work With
			</h2>
			<div class="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
				{#each techStack as tech}
					<Badge variant="default" size="md" class="text-base px-4 py-2">{tech}</Badge>
				{/each}
			</div>
		</div>
	</section>

	<!-- Latest Blog Posts Section -->
	{#if recentPosts.length > 0}
		<section
			class="py-20 bg-blue-50 dark:bg-stone-950 animate-on-scroll"
			data-section="1"
			class:animate-fade-in-up={sectionsVisible[1]}
		>
			<div class="container mx-auto px-7">
				<div class="flex justify-between items-center mb-12">
					<h2 class="text-3xl md:text-4xl font-bold text-blue-950 dark:text-blue-50">
						Latest Writing
					</h2>
					<Button href="/blog" variant="ghost">View All →</Button>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each recentPosts as post}
						<Card href={post.path} variant="elevated">
							<div class="p-6">
								<h3
									class="text-xl font-bold mb-3 text-blue-950 dark:text-blue-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
								>
									{post.meta.title}
								</h3>
								<div class="flex items-center gap-4 text-sm text-blue-600 dark:text-blue-400">
									<time datetime={post.meta.date}>
										{new Date(post.meta.date).toLocaleDateString('en-US', {
											month: 'short',
											day: 'numeric',
											year: 'numeric'
										})}
									</time>
									{#if post.meta.reading}
										<span>• {post.meta.reading} min read</span>
									{/if}
								</div>
								{#if post.meta.keywords && post.meta.keywords.length > 0}
									<div class="flex flex-wrap gap-2 mt-4">
										{#each post.meta.keywords.slice(0, 3) as keyword}
											<Badge variant="default" size="sm">{keyword}</Badge>
										{/each}
									</div>
								{/if}
							</div>
						</Card>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- About Section -->
	<section
		class="py-20 bg-white dark:bg-stone-900 animate-on-scroll"
		data-section="2"
		class:animate-fade-in-up={sectionsVisible[2]}
	>
		<div class="container mx-auto px-7 max-w-4xl">
			<h2 class="text-3xl md:text-4xl font-bold mb-8 text-blue-950 dark:text-blue-50 text-center">
				About Me
			</h2>
			<div class="prose dark:prose-invert prose-lg mx-auto">
				<p>
					I'm an enthusiastic developer who loves to work within the JavaScript ecosystem. I'm
					always striving to improve code quality and build beautiful, functional applications.
				</p>
				<p>
					With experience as a Release Manager and Frontend Engineer, I've worked with companies
					like Crystallize, InvertiGro, and others, focusing on React, TypeScript, GraphQL, and
					modern DevOps practices.
				</p>
				<p>
					I love to share my knowledge and experiences through writing. My blog covers topics I've
					tested and implemented in real products, hoping to help others on their development
					journey.
				</p>
				<p class="text-center mt-8">
					<Button href="/work" variant="primary">See My Experience →</Button>
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section
		class="py-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 animate-on-scroll"
		data-section="3"
		class:animate-fade-in-up={sectionsVisible[3]}
	>
		<div class="container mx-auto px-7 text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Connect</h2>
			<p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
				Feel free to reach out if you have any questions, suggestions, or just want to say hi!
			</p>
			<div class="flex flex-wrap gap-4 justify-center">
				<Button
					href="https://www.linkedin.com/in/daniel-salvado/"
					variant="secondary"
					size="lg"
				>
					LinkedIn
				</Button>
				<Button href="https://github.com/danisal" variant="secondary" size="lg">GitHub</Button>
				<Button href="https://twitter.com/danisalTweets" variant="secondary" size="lg">
					Twitter
				</Button>
			</div>
		</div>
	</section>
</main>
