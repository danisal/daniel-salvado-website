<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Badge from '$lib/components/Badge.svelte';

	const experiences = [
		{
			company: 'InvertiGro',
			url: 'https://www.invertigro.com',
			position: 'Full Stack Developer & DevOps Engineer',
			start: '2023-06',
			end: '2024-09',
			highlights: [
				'Introduced Vite.js for better developer experience',
				'Moved unit tests to Vitest for faster execution',
				'Implemented end-to-end tests with Playwright',
				'Created CI/CD pipelines for linting, type checking, and testing',
				'Decreased build time by 65%',
				'Reduced build size by 20%',
				'Added comprehensive documentation and guidelines'
			],
			description:
				'Developed web applications with NextJS using React Server Components, next-safe-actions, and Material UI. Created custom ThingsBoard widgets using Angular. Implemented BitBucket pipeline to deploy to Vercel with Neon branches integration.',
			skills: [
				'DevOps',
				'React.js',
				'NextJS',
				'Playwright',
				'GraphQL',
				'TypeScript',
				'Git',
				'Node.js'
			]
		},
		{
			company: 'Crystallize',
			url: 'https://www.crystallize.com',
			position: 'Release Manager & Frontend Engineer',
			start: '2019-05',
			end: '2023-04',
			highlights: [
				'Scheduled, managed, and coordinated releases across multiple applications',
				'Constructed release calendar for centralized view',
				'Managed risks and resolved issues regarding release quality',
				'Ensured adherence to engineering best practices',
				'Developed Crystallize PIM SaaS',
				'Improved codebase with modern development practices',
				'Took part in feature and roadmap planning'
			],
			description:
				'Led release management for multiple projects while developing the main Product Information Management SaaS. Monitored application errors with Sentry and implemented CI/CD for company products.',
			skills: [
				'GitHub',
				'React.js',
				'GraphQL',
				'TypeScript',
				'DevOps',
				'Testing',
				'Node.js'
			]
		},
		{
			company: 'Evodeck',
			url: 'https://www.evodeck.com',
			position: 'Software Engineer',
			start: '2018-01',
			end: '2019-04',
			highlights: [
				'Developed garage management system with ReactJS',
				'Introduced ES6/ES7 features and Higher-Order Components',
				'Applied DRY principles to improve codebase',
				'Participated in agile team analyses',
				'Developed applications using GraphQL, React, MongoDB, Express, Kubernetes, and Docker'
			],
			description:
				'Built modern web applications with focus on clean code and best practices within an agile environment.',
			skills: ['React.js', 'GraphQL', 'MongoDB', 'Node.js', 'Redux.js', 'Docker', 'Kubernetes']
		},
		{
			company: 'Truphone',
			url: 'https://www.truphone.com',
			position: 'Frontend Engineer',
			start: '2017-06',
			end: '2017-12',
			highlights: [
				'Integrated new payment options in web applications',
				'Optimized web styling with SASS pre-processor',
				'Started mobile app development with React Native'
			],
			description:
				'Focused on frontend development and mobile app creation with modern frameworks.',
			skills: ['React Native', 'SASS', 'HTML', 'CSS', 'Git', 'Selenium', 'Node.js']
		},
		{
			company: 'Trading Economics',
			url: 'https://tradingeconomics.com',
			position: 'Software Developer',
			start: '2016-10',
			end: '2017-05',
			highlights: [
				'Integrated PayPal payments and Twilio SMS notifications',
				'Created advanced notification system for financial indicators',
				'Refreshed UI with Bootstrap 3',
				'Developed management interface for admin monitoring'
			],
			description:
				'Enhanced high-traffic AngularJS application with payment integration and notification systems.',
			skills: ['AngularJS', 'JavaScript', 'MongoDB', 'Node.js', 'HTML', 'CSS']
		},
		{
			company: 'INEM',
			url: 'https://www.inem.pt',
			position: 'Emergency Medical Technician',
			start: '2008-02',
			end: '2016-09',
			highlights: [
				'Pre-hospital emergency intervention',
				'Patient triage, stabilisation and transport',
				'Operated information and telecommunication systems',
				'Emergency vehicle operation'
			],
			description:
				'Provided critical emergency medical services and patient care in pre-hospital settings.',
			skills: ['EMT', 'Emergency Medical Services', 'AED', 'Public Health']
		}
	];

	function formatDate(dateStr: string) {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
	}
</script>

<main class="container mx-auto px-7 py-16">
	<div class="max-w-5xl mx-auto">
		<h1 class="text-4xl md:text-5xl font-bold mb-4 text-blue-950 dark:text-blue-50">
			Work Experience
		</h1>
		<p class="text-lg text-blue-700 dark:text-blue-300 mb-16">
			My professional journey through technology and healthcare
		</p>

		<!-- Timeline -->
		<div class="relative">
			<!-- Timeline line -->
			<div
				class="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-500 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400"
			></div>

			<div class="space-y-12">
				{#each experiences as exp}
					<div class="relative pl-8 md:pl-20">
						<!-- Timeline dot -->
						<div
							class="absolute left-[-0.5rem] md:left-[1.5rem] top-2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-50 dark:ring-stone-950"
						></div>

						<Card variant="elevated" class="overflow-hidden">
							<div class="p-6 md:p-8">
								<!-- Header -->
								<div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
									<div>
										<h2 class="text-2xl font-bold text-blue-950 dark:text-blue-50 mb-2">
											<a
												href={exp.url}
												rel="noopener noreferrer"
												target="_blank"
												class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
											>
												{exp.company}
											</a>
										</h2>
										<h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300">
											{exp.position}
										</h3>
									</div>
									<div class="text-sm text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap">
										<time datetime={exp.start}>{formatDate(exp.start)}</time>
										-
										<time datetime={exp.end}>{formatDate(exp.end)}</time>
									</div>
								</div>

								<!-- Description -->
								<p class="text-blue-800 dark:text-blue-200 mb-4">
									{exp.description}
								</p>

								<!-- Highlights -->
								{#if exp.highlights.length > 0}
									<div class="mb-4">
										<h4 class="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
											Key Achievements:
										</h4>
										<ul class="space-y-1 text-sm text-blue-700 dark:text-blue-300">
											{#each exp.highlights as highlight}
												<li class="flex items-start">
													<span class="text-blue-500 mr-2">•</span>
													<span>{highlight}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/if}

								<!-- Skills -->
								{#if exp.skills.length > 0}
									<div class="flex flex-wrap gap-2">
										{#each exp.skills as skill}
											<Badge variant="default" size="sm">{skill}</Badge>
										{/each}
									</div>
								{/if}
							</div>
						</Card>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<p class="text-lg text-blue-800 dark:text-blue-200">
				Need to know more about my working experience? You can have a better overview on my
				<a
					aria-label="Daniel on linkedin"
					href="https://www.linkedin.com/in/daniel-salvado/"
					rel="noopener noreferrer"
					target="_blank"
					class="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
				>
					LinkedIn
				</a>
				or reach out through my social media profiles.
			</p>
		</div>
	</div>
</main>
