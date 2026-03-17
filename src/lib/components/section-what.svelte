<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import CheckeredPattern from "./checkered-pattern.svelte";
	import SprayText from "./spray-text.svelte";
	import { RadioIcon, MapPinIcon, TimerIcon, WifiIcon } from "@lucide/svelte";

	const features = [
		{
			icon: RadioIcon,
			title: "UWB Technology",
			description: "Ultra-Wideband radio for centimeter-level positioning accuracy.",
		},
		{
			icon: MapPinIcon,
			title: "Real-time Tracking",
			description: "Track multiple vehicles simultaneously with sub-10cm precision.",
		},
		{
			icon: TimerIcon,
			title: "Lap Timing",
			description: "Automatic lap detection and timing with millisecond resolution.",
		},
		{
			icon: WifiIcon,
			title: "Wireless Setup",
			description: "No cables across the track. Deploy anchors and go racing.",
		},
	];
</script>

<section id="what" class="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-24">
	<CheckeredPattern class="opacity-3" />

	<div class="relative mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<span class="mb-2 inline-block rounded bg-secondary/20 px-3 py-1 text-sm font-bold uppercase tracking-wider text-secondary">The Solution</span>
			<h2 class="text-4xl font-black uppercase tracking-tight md:text-6xl">
				<SprayText text="What?" class="text-foreground" />
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">An open-source UWB-based tracking system that brings professional-grade timing to everyone.</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each features as feature, i}
				<div class="group relative">
					<!-- Connector line -->
					{#if i < features.length - 1}
						<div class="absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-gradient-to-r from-primary to-transparent lg:block"></div>
					{/if}

					<div class="relative overflow-hidden rounded-xl border-2 border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-lg-xl hover:shadow-lg-secondary/20">
						<!-- Top accent bar -->
						<div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary"></div>

						<div class="mb-4 flex size-16 items-center justify-center rounded-xl bg-secondary/20">
							<feature.icon class="size-8 text-secondary" />
						</div>

						<Badge variant="outline" class="mb-3 font-mono text-xs">0{i + 1}</Badge>

						<h3 class="mb-2 text-lg font-black uppercase tracking-tight">{feature.title}</h3>
						<p class="text-sm text-muted-foreground">{feature.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
