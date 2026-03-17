<script lang="ts">
	let { class: className = "", variant = "default" }: { class?: string; variant?: "default" | "waving" } = $props();
</script>

{#if variant === "waving"}
	<div class={["relative", className]}>
		<svg viewBox="0 0 120 80" class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="checker-wave" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
					<rect x="0" y="0" width="10" height="10" fill="white" />
					<rect x="10" y="0" width="10" height="10" fill="black" />
					<rect x="0" y="10" width="10" height="10" fill="black" />
					<rect x="10" y="10" width="10" height="10" fill="white" />
				</pattern>
			</defs>
			<path d="M10 10 Q30 5 50 15 Q70 25 90 15 Q110 5 110 10 L110 60 Q90 70 70 60 Q50 50 30 60 Q10 70 10 60 Z" fill="url(#checker-wave)" stroke="currentColor" stroke-width="2" class="text-primary" />
			<rect x="5" y="8" width="6" height="72" rx="3" fill="currentColor" class="text-muted-foreground" />
		</svg>
	</div>
{:else}
	<div class={["relative", className]}>
		<svg viewBox="0 0 80 60" class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="checker-flat" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
					<rect x="0" y="0" width="8" height="8" fill="white" />
					<rect x="8" y="0" width="8" height="8" fill="black" />
					<rect x="0" y="8" width="8" height="8" fill="black" />
					<rect x="8" y="8" width="8" height="8" fill="white" />
				</pattern>
			</defs>
			<rect x="12" y="5" width="60" height="40" fill="url(#checker-flat)" rx="2" />
			<rect x="5" y="3" width="5" height="54" rx="2" fill="currentColor" class="text-muted-foreground" />
		</svg>
	</div>
{/if}
