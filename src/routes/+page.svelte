<script lang="ts">
	import { Toaster } from "svelte-sonner";
	import { setApp } from "$lib/hooks/app.svelte.js";
	import Header from "$lib/components/header.svelte";
	import Hero from "$lib/components/hero.svelte";
	import About from "$lib/components/about.svelte";
	import Skills from "$lib/components/skills.svelte";
	import Projects from "$lib/components/projects.svelte";
	import Experience from "$lib/components/experience.svelte";
	import Education from "$lib/components/education.svelte";
	import Contact from "$lib/components/contact.svelte";
	import Footer from "$lib/components/footer.svelte";

	const app = setApp({ isDarkMode: false });
	const isDarkMode = $derived(app.isDarkMode);
</script>

<Toaster position="bottom-right" theme={isDarkMode ? "dark" : "light"} richColors />

<div class={["bg-background text-foreground transition-colors duration-300", isDarkMode && "dark"]}>
	<Header />
	<Hero />
	<About />
	<Skills />
	<Projects />
	<Experience />
	<Education />
	<Contact />
	<Footer />
</div>
