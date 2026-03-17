<script lang="ts">
	import RaceFlag from "./race-flag.svelte";
	import { Button } from "$lib/components/ui/button";
	import { IconBrandGithub, IconBrandDiscord, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-svelte";

	const socialLinks = [
		{ icon: IconBrandGithub, href: "#", label: "GitHub" },
		{ icon: IconBrandDiscord, href: "#", label: "Discord" },
		{ icon: IconBrandTwitter, href: "#", label: "Twitter" },
		{ icon: IconBrandYoutube, href: "#", label: "YouTube" },
	];

	const footerLinks = [
		{
			title: "Project",
			links: ["Documentation", "Hardware Files", "Firmware", "Desktop App"],
		},
		{
			title: "Community",
			links: ["Discord Server", "GitHub Discussions", "Contributing", "Code of Conduct"],
		},
		{
			title: "Resources",
			links: ["Getting Started", "API Reference", "Tutorials", "FAQ"],
		},
	];
</script>

<footer class="relative border-t border-border bg-card">
	<!-- Checkered top border -->
	<div class="flex h-2 w-full">
		{#each Array(40) as _, i}
			<div class={["flex-1", i % 2 === 0 ? "bg-foreground" : "bg-transparent"]}></div>
		{/each}
	</div>

	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
			<!-- Brand -->
			<div class="lg:col-span-2">
				<div class="mb-4 flex items-center gap-3">
					<RaceFlag class="h-10 w-12" />
					<span class="text-2xl font-black uppercase tracking-tight">
						<span class="text-primary">12Urenloop</span>
						<span class="text-secondary">Next Gen</span>
					</span>
				</div>
				<!-- <p class="mb-6 max-w-sm text-muted-foreground">Open-source UWB tracking and lap timing. Built by the community, for the community.</p> -->
				<div class="flex gap-2">
					<!-- {#each socialLinks as social}
						<Button variant="outline" size="icon" class="rounded-lg">
							<social.icon class="size-5" />
							<span class="sr-only">{social.label}</span>
						</Button>
					{/each} -->
				</div>
			</div>

			<!-- Links -->
			<!-- {#each footerLinks as section}
				<div>
					<h4 class="mb-4 font-black uppercase tracking-wide text-primary">{section.title}</h4>
					<ul class="flex flex-col gap-2">
						{#each section.links as link}
							<li>
								<a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">
									{link}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each} -->
		</div>

		<!-- Bottom -->
		<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
			<p class="text-sm text-muted-foreground">Made with ❤️ by Zeus WPI, developed by <a style="color: aqua;" href="/home">Robin Paret</a></p>
		</div>
	</div>
</footer>
