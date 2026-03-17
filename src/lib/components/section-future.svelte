<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import SprayText from "./spray-text.svelte";
	import { RocketIcon, BrainIcon, SmartphoneIcon, CloudIcon, UsersIcon, TrophyIcon } from "@lucide/svelte";

	const plans = [
		{
			icon: SmartphoneIcon,
			title: "Mobile App",
			description: "Native iOS and Android apps for real-time tracking and race management.",
			status: "In Development",
		},
		{
			icon: CloudIcon,
			title: "Cloud Dashboard",
			description: "Web-based analytics, historical data, and team management features.",
			status: "Planned",
		},
		{
			icon: BrainIcon,
			title: "AI Race Analysis",
			description: "Machine learning for racing line optimization and performance insights.",
			status: "Research",
		},
		{
			icon: UsersIcon,
			title: "Multi-Vehicle Racing",
			description: "Support for 20+ simultaneous vehicles with collision detection.",
			status: "In Development",
		},
		{
			icon: TrophyIcon,
			title: "Competition Mode",
			description: "Tournament brackets, leaderboards, and official timing certification.",
			status: "Planned",
		},
		{
			icon: RocketIcon,
			title: "V2 Hardware",
			description: "Next-gen anchors with extended range and improved accuracy.",
			status: "Research",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "In Development":
				return "bg-chart-4/20 text-chart-4 border-chart-4/50";
			case "Planned":
				return "bg-secondary/20 text-secondary border-secondary/50";
			case "Research":
				return "bg-chart-3/20 text-chart-3 border-chart-3/50";
			default:
				return "bg-muted text-muted-foreground";
		}
	};
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background py-24">
	<!-- Grid pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="h-full w-full" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 40px 40px;"></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<span class="mb-2 inline-block rounded bg-secondary/20 px-3 py-1 text-sm font-bold uppercase tracking-wider text-secondary">What's Next</span>
			<h2 class="text-4xl font-black uppercase tracking-tight md:text-6xl">
				<SprayText text="Future Plans" class="text-foreground" />
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">We're just getting started. Here's what's coming down the track.</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each plans as plan}
				<Card class="group border-2 border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-secondary hover:shadow-lg-lg">
					<CardContent class="p-6">
						<div class="mb-4 flex items-start justify-between">
							<div class="flex size-12 items-center justify-center rounded-lg bg-secondary/20">
								<plan.icon class="size-6 text-secondary" />
							</div>
							<Badge variant="outline" class={["text-xs font-bold", getStatusColor(plan.status)]}>
								{plan.status}
							</Badge>
						</div>
						<h3 class="mb-2 text-lg font-black uppercase tracking-tight">{plan.title}</h3>
						<p class="text-sm text-muted-foreground">{plan.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
