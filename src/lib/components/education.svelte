<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { CheckIcon } from "@lucide/svelte";

	const education = [
		{
			degree: "Bachelor of Science in Computer Science",
			school: "State University",
			period: "2020 - 2024",
			highlights: ["GPA: 4.0/4.0", "Dean's List all semesters", "Relevant Coursework: Algorithms, Database Systems, Operating Systems, Machine Learning"],
		},
	];

	const certifications = ["AWS Certified Solutions Architect - Associate", "Google Cloud Professional Data Engineer", "Kubernetes Application Developer (CKAD)"];
</script>

<section id="education" class="py-20 sm:py-32 bg-background">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-12">
			<div class="flex flex-col gap-4">
				<h2 class="text-4xl sm:text-5xl font-bold">Education & Certifications</h2>
				<div class="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
			</div>

			<div class="grid md:grid-cols-2 gap-8">
				<div class="space-y-6">
					<h3 class="text-2xl font-bold">Education</h3>
					{#each education as edu}
						<Card class="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
							<CardHeader>
								<CardTitle>{edu.degree}</CardTitle>
								<CardDescription>{edu.school}</CardDescription>
								<p class="text-sm text-foreground/70 pt-2">{edu.period}</p>
							</CardHeader>
							<CardContent>
								<ul class="flex flex-col gap-2">
									{#each edu.highlights as highlight}
										<li class="flex items-start gap-3">
											<CheckIcon class="size-5 text-primary shrink-0 mt-0.5" />
											<span class="text-foreground/80">{highlight}</span>
										</li>
									{/each}
								</ul>
							</CardContent>
						</Card>
					{/each}
				</div>

				<div class="space-y-6">
					<h3 class="text-2xl font-bold">Certifications</h3>
					<div class="space-y-3">
						{#each certifications as cert}
							<Card class="bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20 hover:shadow-lg-lg transition-all duration-300">
								<CardContent class="pt-6 flex items-center gap-3">
									<div class="p-2 rounded-lg bg-accent/20">
										<CheckIcon class="size-5 text-accent" />
									</div>
									<span class="font-medium">{cert}</span>
								</CardContent>
							</Card>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
