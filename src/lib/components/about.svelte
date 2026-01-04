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
					<p class="text-lg text-foreground/80 leading-relaxed">I'm a graduating computer science engineer with a passion for creating impactful software solutions. Throughout my academic journey, I've developed a strong foundation in algorithms, system design, and modern development practices.</p>
					<p class="text-lg text-foreground/80 leading-relaxed">My experience spans full-stack web development, cloud infrastructure, and machine learning. I'm particularly interested in building scalable systems and mentoring junior developers. When I'm not coding, you'll find me contributing to open-source projects or exploring new technologies.</p>
					<div class="grid grid-cols-2 gap-4 pt-4">
						<Card class="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
							<CardContent class="pt-6">
								<div class="text-3xl font-bold text-primary">50+</div>
								<p class="text-sm text-foreground/70">Projects Completed</p>
							</CardContent>
						</Card>
						<Card class="bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
							<CardContent class="pt-6">
								<div class="text-3xl font-bold text-accent">4.0</div>
								<p class="text-sm text-foreground/70">GPA</p>
							</CardContent>
						</Card>
					</div>
				</div>

				<div class="relative">
					<div class="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
					<img src="https://static.svelte0.com/placeholder.svg?size=wide" alt="Profile" class="relative rounded-2xl shadow-lg-2xl w-full" />
				</div>
			</div>
		</div>
	</div>
</section>
