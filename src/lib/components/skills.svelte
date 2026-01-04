<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { CodeIcon, DatabaseIcon, CloudIcon, BrainIcon } from "@lucide/svelte";

	const skillCategories = [
		{
			title: "Languages",
			icon: CodeIcon,
			skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
			color: "from-primary/20 to-primary/5",
		},
		{
			title: "Frontend",
			icon: CodeIcon,
			skills: ["React", "Svelte", "Vue.js", "Tailwind CSS", "Next.js", "HTML/CSS"],
			color: "from-accent/20 to-accent/5",
		},
		{
			title: "Backend & Cloud",
			icon: CloudIcon,
			skills: ["Node.js", "Django", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
			color: "from-secondary/20 to-secondary/5",
		},
		{
			title: "Tools & Practices",
			icon: DatabaseIcon,
			skills: ["Git", "CI/CD", "REST APIs", "GraphQL", "Testing", "Agile"],
			color: "from-primary/20 to-accent/5",
		},
	];
</script>

<section id="skills" class="py-20 sm:py-32 bg-gradient-to-b from-background to-primary/5">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-12">
			<div class="flex flex-col gap-4">
				<h2 class="text-4xl sm:text-5xl font-bold">Skills & Expertise</h2>
				<div class="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				{#each skillCategories as category}
					<Card class={`bg-gradient-to-br ${category.color} border-primary/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}>
						<CardHeader>
							<div class="flex items-center gap-3">
								<div class="p-2 rounded-lg bg-primary/20">
									<svelte:component this={category.icon} class="size-5 text-primary" />
								</div>
								<CardTitle>{category.title}</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<div class="flex flex-wrap gap-2">
								{#each category.skills as skill}
									<span class="px-3 py-1 rounded-full bg-background/50 text-sm font-medium border border-primary/20">
										{skill}
									</span>
								{/each}
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
