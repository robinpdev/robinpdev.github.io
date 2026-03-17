<script lang="ts">
	let { text, class: className = "" }: { text: string; class?: string } = $props();
</script>

<span class={["relative inline-block font-black uppercase tracking-tighter", className]}>
	<span class="absolute -left-1 -top-1 text-primary/30 blur-sm">{text}</span>
	<span class="absolute left-0.5 top-0.5 text-secondary/50">{text}</span>
	<span class="relative">{text}</span>
</span>
