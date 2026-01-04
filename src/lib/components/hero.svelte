<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "@lucide/svelte";
	import Herobg from "$lib/components/panes/herobg.svelte";
</script>

<section class="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 py-20 sm:py-32">
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute -top-40 -right-40 size-80 rounded-full bg-primary/10 blur-3xl"></div>
		<div class="absolute -bottom-40 -left-40 size-80 rounded-full bg-accent/10 blur-3xl"></div>
		<Herobg />
	</div>

	<div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="text-center space-y-8">
			<div class="flex flex-col gap-4">
				<h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
					<span class="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Computer Science Engineer</span>
				</h1>
				<p class="text-xl sm:text-2xl text-foreground/70 max-w-2xl mx-auto">Passionate about building elegant solutions to complex problems. Graduating 2024 with expertise in full-stack development and cloud architecture.</p>
			</div>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button size="lg" class="gap-2">
					View My Work
					<ArrowRightIcon class="size-4" />
				</Button>
				<Button size="lg" variant="outline">Download Resume</Button>
			</div>

			<div class="flex gap-4 justify-center pt-4">
				<a href="#" class="p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors">
					<GithubIcon class="size-5" />
				</a>
				<a href="#" class="p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors">
					<LinkedinIcon class="size-5" />
				</a>
				<a href="#" class="p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors">
					<MailIcon class="size-5" />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.backgroundforeground{
	display: grid;
	}

	.foreground, .background{
	grid-column: 1;
	grid-row: 1;
	}

	.foreground span{
	color: #fff;
	background: #000cf6;
	}

	.background{
	background: rgba(255, 0, 0, 0.4);
	height: 100%;
	}
</style>
