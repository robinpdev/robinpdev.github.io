<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import SprayText from "./spray-text.svelte";
	import { BanIcon, DollarSignIcon, LockIcon, ZapOffIcon } from "@lucide/svelte";

	const problems = [
		{
			icon: DollarSignIcon,
			title: "Expensive Systems",
			description: "Commercial lap timing systems cost thousands. That's gatekeeping, not racing.",
		},
		{
			icon: LockIcon,
			title: "Closed Source",
			description: "Proprietary black boxes you can't modify, fix, or understand. Your data, their rules.",
		},
		{
			icon: ZapOffIcon,
			title: "Poor Accuracy",
			description: "IR beams and magnetic strips? That's last century tech with meter-level precision.",
		},
		{
			icon: BanIcon,
			title: "Limited Access",
			description: "Track-specific systems that don't travel. Your timing shouldn't be location-locked.",
		},
	];
</script>

<section id="why" class="relative py-24">
	<!-- Diagonal accent -->
	<div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-primary via-secondary to-primary"></div>

	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16">
			<span class="mb-2 inline-block rounded bg-primary/20 px-3 py-1 text-sm font-bold uppercase tracking-wider text-primary">The Problem</span>
			<h2 class="text-4xl font-black uppercase tracking-tight md:text-6xl">
				<SprayText text="Why?" class="text-foreground" />
			</h2>
			<p class="mt-4 max-w-2xl text-lg text-muted-foreground">Because the racing community deserves better than overpriced, locked-down timing systems.</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each problems as problem, i}
				<Card class="group relative overflow-hidden border-2 border-border bg-card/50 transition-all duration-300 hover:border-primary hover:shadow-lg-lg hover:shadow-lg-primary/20">
					<!-- Number tag -->
					<div class="absolute -right-4 -top-4 flex size-16 rotate-12 items-center justify-center bg-primary font-black text-2xl text-primary-foreground">
						{String(i + 1).padStart(2, "0")}
					</div>

					<CardContent class="p-6">
						<div class="mb-4 flex size-14 items-center justify-center rounded-lg bg-destructive/20">
							<problem.icon class="size-7 text-destructive" />
						</div>
						<h3 class="mb-2 text-xl font-black uppercase tracking-tight">{problem.title}</h3>
						<p class="text-muted-foreground">{problem.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
