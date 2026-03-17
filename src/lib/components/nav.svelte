<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import RaceFlag from "./race-flag.svelte";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import { fly } from "svelte/transition";

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ label: "Why?", href: "#why" },
		{ label: "What?", href: "#what" },
		{ label: "Advantages", href: "#advantages" },
		{ label: "Roadmap", href: "#roadmap" },
		{ label: "Hardware", href: "#hardware" },
	];

	const scrollTo = (href: string) => {
		mobileMenuOpen = false;
		const el = document.querySelector(href);
		el?.scrollIntoView({ behavior: "smooth" });
	};
</script>

<nav class="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
		<a href="#" class="flex items-center gap-3">
			<RaceFlag class="h-8 w-10" />
			<span class="text-xl font-black uppercase tracking-tight text-primary">
				12Urenloop
				<span class="text-secondary">Next Gen</span>
			</span>
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-1 md:flex">
			<!-- {#each navLinks as link}
				<Button variant="ghost" size="sm" class="font-bold uppercase tracking-wide" onclick={() => scrollTo(link.href)}>
					{link.label}
				</Button>
			{/each} -->
			<!-- <Button size="sm" class="ml-4 font-bold uppercase">Get Started</Button> -->
		</div>

		<!-- Mobile menu button -->
		<Button variant="ghost" size="icon" class="md:hidden" onclick={() => (mobileMenuOpen = !mobileMenuOpen)}>
			{#if mobileMenuOpen}
				<XIcon />
			{:else}
				<MenuIcon />
			{/if}
		</Button>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-border bg-background md:hidden" transition:fly={{ y: -10, duration: 200 }}>
			<div class="flex flex-col gap-2 p-4">
				<!-- {#each navLinks as link}
					<Button variant="ghost" class="justify-start font-bold uppercase" onclick={() => scrollTo(link.href)}>
						{link.label}
					</Button>
				{/each} -->
				<!-- <Button class="mt-2 font-bold uppercase">Get Started</Button> -->
			</div>
		</div>
	{/if}
</nav>
