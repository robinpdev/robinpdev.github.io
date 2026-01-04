<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";

	const experiences = [
		{
			title: "Software Engineering Intern",
			company: "Tech Corp",
			period: "Jun 2023 - Aug 2023",
			description: "Developed and optimized backend services handling 1M+ daily requests. Implemented caching strategies reducing latency by 40%.",
			skills: ["Python", "AWS", "PostgreSQL", "Docker"],
		},
		{
			title: "Full Stack Developer Intern",
			company: "StartUp Labs",
			period: "Jan 2023 - May 2023",
			description: "Built responsive web applications and RESTful APIs. Collaborated with design team to implement pixel-perfect UI components.",
			skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
		},
		{
			title: "Teaching Assistant",
			company: "University",
			period: "Sep 2022 - Dec 2022",
			description: "Mentored 30+ students in Data Structures and Algorithms. Developed practice problems and conducted weekly office hours.",
			skills: ["Java", "Algorithms", "Mentoring", "Problem Solving"],
		},
	];
</script>

<section id="experience" class="py-20 sm:py-32 bg-gradient-to-b from-background to-accent/5">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-12">
			<div class="flex flex-col gap-4">
				<h2 class="text-4xl sm:text-5xl font-bold">Experience</h2>
				<div class="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
			</div>

			<div class="space-y-6">
				{#each experiences as exp, index}
					<Card class="border-l-4 border-l-primary hover:shadow-lg-lg transition-all duration-300">
						<CardHeader>
							<div class="flex items-start justify-between">
								<div>
									<CardTitle>{exp.title}</CardTitle>
									<CardDescription>{exp.company}</CardDescription>
								</div>
								<span class="text-sm font-medium text-primary">{exp.period}</span>
							</div>
						</CardHeader>
						<CardContent class="flex flex-col gap-4">
							<p class="text-foreground/80">{exp.description}</p>
							<div class="flex flex-wrap gap-2">
								{#each exp.skills as skill}
									<span class="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
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
