<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
</script>

<section id="about" class="py-20 sm:py-32 bg-background">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-12">
			<div class="flex flex-col gap-4">
				<h2 class="text-4xl sm:text-5xl font-bold">About Me</h2>
				<div class="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
			</div>

			<div class="grid md:grid-cols-2 gap-8 items-center">
				<div class="space-y-6">
					<p class="text-lg text-foreground/80 leading-relaxed">
					Motivated by learning how things work and being hands-on. I'm the PR rep of <a style="color: orange;" href=https://zeus.ugent.be target="_blank">Zeus WPI</a>, UGent's computer science student organization, where I also contribute to open-source projects.
					</p>
					<p class="text-lg text-foreground/80 leading-relaxed">
					 I'm experienced across web, embedded, native application development, and
					algorithms / data structures, with a strong interest in low-level, systems-oriented problem
					solving. Motivated to apply a broad technical foundation to build reliable, efficient software
					while continuing to grow as an engineer.
					</p>
					<div class="grid grid-cols-2 gap-4 pt-4">
						<Card class="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
							<CardContent class="pt-6">
								<div class="text-3xl font-bold text-primary">5+</div>
								<p class="text-sm text-foreground/70">Summers experience in jobs/internship</p>
							</CardContent>
						</Card>
						<Card class="bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
							<CardContent class="pt-6">
								<div class="text-3xl font-bold text-accent">6</div>
								<p class="text-sm text-foreground/70">Organizations contributed to</p>
							</CardContent>
						</Card>
					</div>
				</div>

				<div class="relative">
					<div class="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
					<img src="/linkedinfoto.jpeg" alt="Profile" class="relative rounded-2xl shadow-lg-2xl w-1/2 mx-auto" />
				</div>
			</div>
		</div>
	</div>
</section>
