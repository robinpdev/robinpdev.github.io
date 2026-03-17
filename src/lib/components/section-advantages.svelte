<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import SprayText from "./spray-text.svelte";
	import RaceFlag from "./race-flag.svelte";
	import { CheckIcon, CodeIcon, UsersIcon, WrenchIcon, DollarSignIcon, GlobeIcon } from "@lucide/svelte";

	const advantages = [
		{
			icon: DollarSignIcon,
			title: "Fraction of the Cost",
			description: "Build a complete system for under $200. No subscriptions, no hidden fees.",
			highlight: "<$200",
		},
		{
			icon: CodeIcon,
			title: "Fully Open Source",
			description: "Hardware designs, firmware, and software. Fork it, mod it, make it yours.",
			highlight: "100%",
		},
		{
			icon: WrenchIcon,
			title: "DIY Friendly",
			description: "Standard components, clear documentation. If you can solder, you can build it.",
			highlight: "Easy",
		},
		{
			icon: UsersIcon,
			title: "Community Driven",
			description: "Built by racers who understand what you need. Contribute and shape the future.",
			highlight: "Open",
		},
		{
			icon: CheckIcon,
			title: "Pro-Level Accuracy",
			description: "±10cm positioning rivals systems costing 10x more. No compromises.",
			highlight: "±10cm",
		},
		{
			icon: GlobeIcon,
			title: "Portable Setup",
			description: "Take it anywhere. Works on any track, any surface, any configuration.",
			highlight: "Mobile",
		},
	];
</script>

<section id="advantages" class="relative py-24">
	<!-- Decorative flags -->
	<div class="absolute right-8 top-8 opacity-20">
		<RaceFlag variant="waving" class="h-32 w-40" />
	</div>

	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16">
			<span class="mb-2 inline-block rounded bg-primary/20 px-3 py-1 text-sm font-bold uppercase tracking-wider text-primary">Why Choose Us</span>
			<h2 class="text-4xl font-black uppercase tracking-tight md:text-6xl">
				<SprayText text="Advantages" class="text-foreground" />
			</h2>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each advantages as advantage}
				<Card class="group relative overflow-hidden border-2 border-border bg-gradient-to-br from-card to-card/50 transition-all duration-300 hover:border-primary">
					<!-- Highlight badge -->
					<div class="absolute right-4 top-4 rounded bg-primary px-2 py-1 text-sm font-black text-primary-foreground">
						{advantage.highlight}
					</div>

					<CardContent class="p-6 pt-12">
						<div class="mb-4 flex size-12 items-center justify-center rounded-lg border-2 border-primary/50 bg-primary/10 transition-colors group-hover:bg-primary/20">
							<advantage.icon class="size-6 text-primary" />
						</div>
						<h3 class="mb-2 text-lg font-black uppercase tracking-tight">{advantage.title}</h3>
						<p class="text-sm text-muted-foreground">{advantage.description}</p>
					</CardContent>

					<!-- Bottom accent -->
					<div class="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
				</Card>
			{/each}
		</div>
	</div>
</section>
