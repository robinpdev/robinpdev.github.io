<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import SprayText from "./spray-text.svelte";
	import RaceFlag from "./race-flag.svelte";
	import { CheckCircleIcon, CircleIcon, CircleDotIcon } from "@lucide/svelte";

	const roadmapItems = [
		{
			quarter: "Q1 2024",
			title: "Foundation",
			status: "completed",
			items: ["Core UWB positioning algorithm", "Basic anchor hardware design", "Initial firmware release", "GitHub repository setup"],
		},
		{
			quarter: "Q2 2024",
			title: "Alpha Release",
			status: "completed",
			items: ["Multi-anchor support", "Desktop timing application", "Hardware v0.5 release", "Community beta testing"],
		},
		{
			quarter: "Q3 2024",
			title: "Beta Launch",
			status: "current",
			items: ["Hardware v1.0 finalization", "Mobile app development", "Cloud sync features", "Documentation overhaul"],
		},
		{
			quarter: "Q4 2024",
			title: "Public Release",
			status: "upcoming",
			items: ["Official v1.0 release", "Competition certification", "Partner track integrations", "Commercial kit availability"],
		},
		{
			quarter: "2025",
			title: "Expansion",
			status: "upcoming",
			items: ["V2 hardware development", "AI-powered analytics", "Multi-sport adaptation", "Global community events"],
		},
	];

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "completed":
				return CheckCircleIcon;
			case "current":
				return CircleDotIcon;
			default:
				return CircleIcon;
		}
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "completed":
				return "text-chart-4 border-chart-4";
			case "current":
				return "text-primary border-primary";
			default:
				return "text-muted-foreground border-muted";
		}
	};
</script>

<section id="roadmap" class="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24">
	<!-- Decorative elements -->
	<div class="absolute left-4 top-1/4 opacity-10">
		<RaceFlag variant="waving" class="h-40 w-48" />
	</div>
	<div class="absolute bottom-1/4 right-4 opacity-10">
		<RaceFlag variant="waving" class="h-40 w-48 -scale-x-100" />
	</div>

	<div class="relative mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<span class="mb-2 inline-block rounded bg-primary/20 px-3 py-1 text-sm font-bold uppercase tracking-wider text-primary">The Journey</span>
			<h2 class="text-4xl font-black uppercase tracking-tight md:text-6xl">
				<SprayText text="Roadmap" class="text-foreground" />
			</h2>
		</div>

		<!-- Timeline -->
		<div class="relative">
			<!-- Center line -->
			<div class="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-chart-4 via-primary to-muted md:left-1/2 md:-translate-x-1/2"></div>

			<div class="space-y-12">
				{#each roadmapItems as item, i}
					{@const StatusIcon = getStatusIcon(item.status)}
					<div class={["relative flex flex-col md:flex-row", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"]}>
						<!-- Timeline dot -->
						<div class="absolute left-4 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-4 bg-background md:left-1/2 {getStatusColor(item.status)}">
							<StatusIcon class="size-4" />
						</div>

						<!-- Content -->
						<div class={["ml-12 w-full md:ml-0 md:w-1/2", i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"]}>
							<div class={["rounded-xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-lg", item.status === "current" && "border-primary shadow-lg shadow-primary/20"]}>
								<div class={["mb-4 flex items-center gap-3", i % 2 === 0 ? "md:flex-row-reverse" : ""]}>
									<Badge variant={item.status === "current" ? "default" : "outline"} class="font-mono">
										{item.quarter}
									</Badge>
									<h3 class="text-xl font-black uppercase tracking-tight">{item.title}</h3>
								</div>
								<ul class={["space-y-2 text-sm text-muted-foreground", i % 2 === 0 ? "md:text-right" : ""]}>
									{#each item.items as listItem}
										<li class={["flex items-center gap-2", i % 2 === 0 ? "md:flex-row-reverse" : ""]}>
											<span class="size-1.5 shrink-0 rounded-full bg-primary"></span>
											{listItem}
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
