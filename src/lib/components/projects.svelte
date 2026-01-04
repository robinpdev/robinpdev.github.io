<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { ExternalLinkIcon, GithubIcon } from "@lucide/svelte";

	const projects = [
		{
			title: "AI Task Manager",
			description: "Intelligent task management system with AI-powered prioritization and scheduling",
			tags: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
			image: "https://static.svelte0.com/placeholder.svg?size=wide",
			github: "#",
			live: "#",
		},
		{
			title: "Cloud Analytics Platform",
			description: "Real-time data analytics dashboard for processing and visualizing large datasets",
			tags: ["Next.js", "AWS", "D3.js", "TypeScript"],
			image: "https://static.svelte0.com/placeholder.svg?size=wide",
			github: "#",
			live: "#",
		},
		{
			title: "Distributed Cache System",
			description: "High-performance distributed caching solution with consistent hashing and replication",
			tags: ["Go", "Redis", "Docker", "gRPC"],
			image: "https://static.svelte0.com/placeholder.svg?size=wide",
			github: "#",
			live: "#",
		},
		{
			title: "Mobile Fitness App",
			description: "Cross-platform fitness tracking app with workout plans and social features",
			tags: ["React Native", "Firebase", "Expo", "JavaScript"],
			image: "https://static.svelte0.com/placeholder.svg?size=wide",
			github: "#",
			live: "#",
		},
	];
</script>

<section id="projects" class="py-20 sm:py-32 bg-background">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-12">
			<div class="flex flex-col gap-4">
				<h2 class="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
				<div class="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				{#each projects as project}
					<Card class="overflow-hidden hover:shadow-lg-xl transition-all duration-300 group">
						<div class="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-accent/10">
							<img src={project.image} alt={project.title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
						</div>
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent class="flex flex-col gap-4">
							<div class="flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span class="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
										{tag}
									</span>
								{/each}
							</div>
							<div class="flex gap-2">
								<Button size="sm" variant="outline" class="flex-1 gap-2">
									<GithubIcon class="size-4" />
									Code
								</Button>
								<Button size="sm" class="flex-1 gap-2">
									<ExternalLinkIcon class="size-4" />
									Live
								</Button>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
