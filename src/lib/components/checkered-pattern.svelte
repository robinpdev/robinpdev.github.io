<script lang="ts">
	let { class: className = "" }: { class?: string } = $props();
</script>

<div class={["pointer-events-none absolute inset-0 overflow-hidden opacity-10", className]}>
	<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<pattern id="checkered" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
				<rect x="0" y="0" width="20" height="20" fill="currentColor" />
				<rect x="20" y="20" width="20" height="20" fill="currentColor" />
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#checkered)" />
	</svg>
</div>
