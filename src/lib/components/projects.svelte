<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle,
	} from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { ExternalLinkIcon, GithubIcon } from "@lucide/svelte";

	const projects = [
		{
			title: "12Urenloop",
			description:
				"Developing a Next Gen runner tracking / timing / lap counting system using UWB technology",
			tags: ["Embedded", "C++", "Rust", "Sponsored"],
			image: "/lapocalypse_logo.png",
			github: "https://github.com/12urenloop/Lapocalypse3000",
			live: "/12ulnextgen",
		},
	];
</script>

<section id="projects" class="py-20 sm:py-32 bg-background">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-12">
			<div class="flex flex-col gap-4">
				<h2 class="text-4xl sm:text-5xl font-bold">
					Featured Projects
				</h2>
				<div
					class="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"
				></div>
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				{#each projects as project}
					<Card
						class="overflow-hidden hover:shadow-lg-xl transition-all duration-300 group"
						style="padding-top: 0;"
					>
						<div
							class="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-accent/10"
						>
							<img
								src={project.image}
								alt={project.title}
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
							/>
						</div>
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription
								>{project.description}</CardDescription
							>
						</CardHeader>
						<CardContent class="flex flex-col gap-4">
							<div class="flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span
										class="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary"
									>
										{tag}
									</span>
								{/each}
							</div>
							<div class="flex gap-2">
								<a href={project.github}>
									<Button
										size="sm"
										variant="outline"
										class="flex-1 gap-2"
									>
										<GithubIcon class="size-4" />
										Code
									</Button>
								</a>
								<a href={project.live}>
									<Button size="sm" class="flex-1 gap-2">
										<ExternalLinkIcon class="size-4" />
										Project site
									</Button>
								</a>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
