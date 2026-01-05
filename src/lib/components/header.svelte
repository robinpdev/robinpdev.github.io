<script lang="ts">
	import { useApp } from "$lib/hooks/app.svelte.js";
	import { Button } from "$lib/components/ui/button";
	import { MoonIcon, SunIcon } from "@lucide/svelte";

	const app = useApp();

	const navLinks = [
		{ label: "About", href: "#about" },
		// { label: "Skills", href: "#skills" },
		// { label: "Projects", href: "#projects" },
		// { label: "Experience", href: "#experience" },
		{ label: "Contact", href: "#contact" },
	];
</script>

<header class="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<a href="#" class="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Robin Paret</a>

			<nav class="hidden md:flex items-center gap-8">
				{#each navLinks as link}
					<a href={link.href} class="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
						{link.label}
					</a>
				{/each}
			</nav>

			<Button size="icon" variant="outline" class="rounded-lg" onclick={() => app.darkModeToggle()}>
				{#if app.isDarkMode}
					<SunIcon class="size-4" />
				{:else}
					<MoonIcon class="size-4" />
				{/if}
			</Button>
		</div>
	</div>
</header>
