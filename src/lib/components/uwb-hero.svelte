<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import CheckeredPattern from "./checkered-pattern.svelte";
	import RaceFlag from "./race-flag.svelte";
	import SprayText from "./spray-text.svelte";
	import { GithubIcon, PlayIcon, ZapIcon } from "@lucide/svelte";
	import { IconBrandGithub } from "@tabler/icons-svelte";
</script>

<section class="relative min-h-screen overflow-hidden pt-16">
	<!-- Background elements -->
	<CheckeredPattern class="opacity-5" />

	<!-- Diagonal stripe -->
	<div class="absolute -right-20 top-20 h-96 w-[800px] rotate-12 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></div>
	<div class="absolute -left-20 bottom-20 h-64 w-[600px] -rotate-12 bg-gradient-to-l from-secondary/20 via-secondary/10 to-transparent"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-20">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-4">
			<!-- Left content -->
			<div class="flex flex-col justify-center">
				<!-- Logo and title -->
				<div class="mb-8 flex items-center gap-4">
					<RaceFlag variant="waving" class="h-20 w-24" />
					<img src="/lapocalypse_logo.png" alt="LapocaLypse3000 logo" style="bottom: -400px;">
				</div>

				<p class="mb-4 text-lg font-bold uppercase tracking-wide text-primary">Open Source UWB Tracking & Lap Timing</p>

				<p class="mb-8 max-w-lg text-lg text-muted-foreground">
					Nieuw telsysteem gebaseerd op UWB technologie onder ontwikkeling voor toekomstige edities van 12Urenloop (2027+).
					Preciese realtime timing / tracking / snelheidsmeting...
				</p>

				<!-- CTA buttons -->
				<div class="flex flex-wrap gap-4">
					<a href="https://github.com/12urenloop/Lapocalypse3000">
						<Button size="lg" class="gap-2 font-bold uppercase">
							<IconBrandGithub class="size-5" />
							View on GitHub
						</Button>
					</a>

					<!-- <Button size="lg" variant="outline" class="gap-2 font-bold uppercase">
						<ZapIcon class="size-5" />
						Quick Start
					</Button> -->
				</div>

				<!-- Stats -->
				<div class="mt-12 flex gap-8">
					<div class="border-l-4 border-primary pl-4">
						<div class="text-3xl font-black text-primary">±1m</div>
						<div class="text-sm font-bold uppercase text-muted-foreground">Accuracy</div>
					</div>
					<div class="border-l-4 border-secondary pl-4">
						<div class="text-3xl font-black text-secondary">20Hz</div>
						<div class="text-sm font-bold uppercase text-muted-foreground">Update Rate</div>
					</div>
					<div class="border-l-4 border-primary pl-4">
						<div class="text-3xl font-black text-primary">100%</div>
						<div class="text-sm font-bold uppercase text-muted-foreground">Open Source</div>
					</div>
				</div>
			</div>

			<!-- Right content - Video -->
			<div class="flex items-center justify-center">
				<div class="relative w-full max-w-3x1">
					<!-- Video container with street-art frame -->
					<div class="relative overflow-hidden rounded-lg border-4 border-primary bg-muted">
						<!-- Checkered corners -->
						<div class="absolute -left-2 -top-2 size-12 rotate-12">
							<RaceFlag class="h-full w-full opacity-50" />
						</div>
						<div class="absolute -bottom-2 -right-2 size-12 -rotate-12">
							<RaceFlag class="h-full w-full opacity-50" />
						</div>

						<!-- Video placeholder -->
						<div class="relative aspect-video bg-gradient-to-br from-muted to-background">
							<video class="h-full w-full object-cover" loop muted autoplay playsinline poster="">
								<source src="https://mattermost.zeus.gent/files/a3uyukxq7fr3xgh8smr41m8c8y/public?h=9EqalStLvKMUJPbeFxvve5GTdjRCBi3U7PJmxrKU3Yg" type="video/mp4" />
							</video>

							<!-- Placeholder overlay -->
							<div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
								<!-- <div class="flex size-20 items-center justify-center rounded-full border-4 border-primary bg-primary/20 transition-transform hover:scale-110">
									<PlayIcon class="size-10 text-primary" />
								</div> -->
								<!-- <span class="font-bold uppercase tracking-wide text-muted-foreground">Demo Video</span> -->
							</div>
						</div>
					</div>

					<!-- Spray paint drips decoration -->
					<!-- <div class="absolute -bottom-4 left-1/4 h-16 w-2 rounded-b-full bg-primary/60"></div>
					<div class="absolute -bottom-8 left-1/3 h-20 w-1.5 rounded-b-full bg-secondary/60"></div>
					<div class="absolute -bottom-6 right-1/4 h-14 w-2 rounded-b-full bg-primary/40"></div> -->
				</div>
			</div>
		</div>
	</div>
</section>
