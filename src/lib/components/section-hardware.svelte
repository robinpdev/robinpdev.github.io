<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import SprayText from "./spray-text.svelte";
	import CheckeredPattern from "./checkered-pattern.svelte";
	import { CpuIcon, RadioIcon, BatteryIcon, WifiIcon, ExternalLinkIcon, ShoppingCartIcon } from "@lucide/svelte";

	const hardwareParts = [
		{
			name: "DWM3000 UWB Module",
			description: "Decawave UWB transceiver module for precise ranging",
			price: "$25",
			specs: ["6.5 GHz / 8 GHz bands", "±10cm accuracy", "Up to 290m range"],
			category: "Core",
		},
		{
			name: "ESP32-S3 MCU",
			description: "Powerful microcontroller with WiFi and Bluetooth",
			price: "$8",
			specs: ["Dual-core 240MHz", "512KB SRAM", "WiFi + BLE 5.0"],
			category: "Core",
		},
		{
			name: "Custom PCB",
			description: "Open-source anchor/tag PCB design files included",
			price: "$15",
			specs: ["4-layer design", "USB-C power", "Compact form factor"],
			category: "Core",
		},
		{
			name: "3D Printed Enclosure",
			description: "Weather-resistant housing for outdoor use",
			price: "$5",
			specs: ["IP54 rated", "STL files included", "Multiple colors"],
			category: "Optional",
		},
		{
			name: "LiPo Battery Pack",
			description: "Rechargeable battery for portable operation",
			price: "$12",
			specs: ["3.7V 2000mAh", "8+ hours runtime", "USB-C charging"],
			category: "Optional",
		},
		{
			name: "Mounting Hardware",
			description: "Tripod mounts and track-side brackets",
			price: "$10",
			specs: ["Aluminum construction", "Quick-release", "Universal fit"],
			category: "Optional",
		},
	];

	const totalCore = hardwareParts.filter((p) => p.category === "Core").reduce((acc, p) => acc + parseInt(p.price.replace("$", "")), 0);
</script>

<section id="hardware" class="relative py-24">
	<CheckeredPattern class="opacity-3" />

	<div class="relative mx-auto max-w-7xl px-4">
		<div class="mb-16">
			<span class="mb-2 inline-block rounded bg-secondary/20 px-3 py-1 text-sm font-bold uppercase tracking-wider text-secondary">Build Your Own</span>
			<h2 class="text-4xl font-black uppercase tracking-tight md:text-6xl">
				<SprayText text="Hardware" class="text-foreground" />
			</h2>
			<p class="mt-4 max-w-2xl text-lg text-muted-foreground">Everything you need to build a complete tracking system. All parts are off-the-shelf or open-source.</p>
		</div>

		<!-- Cost summary -->
		<Card class="mb-12 border-2 border-primary bg-gradient-to-r from-primary/10 via-card to-secondary/10">
			<CardContent class="flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
				<div class="flex items-center gap-4">
					<div class="flex size-16 items-center justify-center rounded-xl bg-primary/20">
						<ShoppingCartIcon class="size-8 text-primary" />
					</div>
					<div>
						<h3 class="text-xl font-black uppercase">Complete System Cost</h3>
						<p class="text-muted-foreground">4 anchors + 1 tag (minimum setup)</p>
					</div>
				</div>
				<div class="text-center md:text-right">
					<div class="text-4xl font-black text-primary">${totalCore * 5}</div>
					<div class="text-sm text-muted-foreground">Core components only</div>
				</div>
			</CardContent>
		</Card>

		<!-- Parts grid -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each hardwareParts as part}
				<Card class="group border-2 border-border transition-all duration-300 hover:border-secondary hover:shadow-lg-lg">
					<CardHeader class="pb-2">
						<div class="flex items-start justify-between">
							<Badge variant={part.category === "Core" ? "default" : "secondary"} class="font-bold">
								{part.category}
							</Badge>
							<span class="text-2xl font-black text-primary">{part.price}</span>
						</div>
						<CardTitle class="text-lg font-black uppercase tracking-tight">{part.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="mb-4 text-sm text-muted-foreground">{part.description}</p>
						<ul class="space-y-1">
							{#each part.specs as spec}
								<li class="flex items-center gap-2 text-xs text-muted-foreground">
									<span class="size-1 rounded-full bg-secondary"></span>
									{spec}
								</li>
							{/each}
						</ul>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- CTA -->
		<div class="mt-12 text-center">
			<Button size="lg" class="gap-2 font-bold uppercase">
				<ExternalLinkIcon class="size-5" />
				View Full BOM & Docs
			</Button>
		</div>
	</div>
</section>
