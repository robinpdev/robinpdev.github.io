<script lang="ts">
	import { setApp } from "$lib/hooks/app.svelte.js";
	import Nav from "$lib/components/nav.svelte";
	import Hero from "$lib/components/uwb-hero.svelte";
	import SectionWhy from "$lib/components/section-why.svelte";
	import SectionWhat from "$lib/components/section-what.svelte";
	import SectionAdvantages from "$lib/components/section-advantages.svelte";
	import SectionFuture from "$lib/components/section-future.svelte";
	import SectionProgress from "$lib/components/section-progress.svelte";
	import SectionRoadmap from "$lib/components/section-roadmap.svelte";
	import SectionHardware from "$lib/components/section-hardware.svelte";
	import Footer from "$lib/components/footer.svelte";

	// Initialize app state
	const app = setApp({ isDarkMode: true });
</script>

<div class="min-h-screen bg-background text-foreground">
	<Nav />
	<main>
		<Hero />
		<SectionWhy />
		<SectionWhat />
		<SectionAdvantages />
		<SectionFuture />
		<SectionProgress />
		<SectionRoadmap />
		<SectionHardware />
	</main>
	<Footer />
</div>
