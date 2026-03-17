<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Progress } from "$lib/components/ui/progress";
	import SprayText from "./spray-text.svelte";
	import CheckeredPattern from "./checkered-pattern.svelte";

	const progressItems = [
		{ label: "Hardware Design", progress: 85, color: "bg-primary" },
		{ label: "Firmware Development", progress: 70, color: "bg-secondary" },
		{ label: "Desktop Software", progress: 60, color: "bg-chart-3" },
		{ label: "Documentation", progress: 45, color: "bg-chart-4" },
		{ label: "Mobile App", progress: 25, color: "bg-chart-5" },
	];

	const stats = [
		{ value: "2.5K+", label: "GitHub Stars" },
		{ value: "150+", label: "Contributors" },
		{ value: "50+", label: "Tracks Tested" },
		{ value: "12", label: "Countries" },
	];
</script>

<section class="relative py-24">
	<CheckeredPattern class="opacity-3" />

	<div class="relative mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<span class="mb-2 inline-block rounded bg-primary/20 px-3 py-1 text-sm font-bold uppercase tracking-wider text-primary">Current Status</span>
			<h2 class="text-4xl font-black uppercase tracking-tight md:text-6xl">
				<SprayText text="Progress" class="text-foreground" />
			</h2>
		</div>

		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Progress bars -->
			<Card class="border-2 border-border">
				<CardHeader>
					<CardTitle class="font-black uppercase tracking-tight">Development Status</CardTitle>
				</CardHeader>
				<CardContent class="space-y-6">
					{#each progressItems as item}
						<div>
							<div class="mb-2 flex items-center justify-between">
								<span class="font-bold">{item.label}</span>
								<span class="font-mono text-sm text-muted-foreground">{item.progress}%</span>
							</div>
							<div class="relative h-3 overflow-hidden rounded-full bg-muted">
								<div class={["h-full rounded-full transition-all duration-500", item.color]} style="width: {item.progress}%"></div>
							</div>
						</div>
					{/each}
				</CardContent>
			</Card>

			<!-- Stats grid -->
			<div class="grid grid-cols-2 gap-4">
				{#each stats as stat, i}
					<Card class="group border-2 border-border transition-all duration-300 hover:border-primary hover:shadow-lg-lg hover:shadow-lg-primary/20">
						<CardContent class="flex flex-col items-center justify-center p-6 text-center">
							<span class="mb-2 text-4xl font-black text-primary md:text-5xl">{stat.value}</span>
							<span class="text-sm font-bold uppercase tracking-wide text-muted-foreground">{stat.label}</span>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
