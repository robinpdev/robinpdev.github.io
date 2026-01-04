<script lang="ts">
	import { GithubIcon, LinkedinIcon, TwitterIcon } from "@lucide/svelte";
</script>

<footer class="border-t border-border/40 bg-background py-12">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-center justify-between gap-8">
			<div class="text-center md:text-left">
				<p class="text-foreground/70">© 2024 Alex Chen. All rights reserved.</p>
				<p class="text-sm text-foreground/50">Graduating Computer Science Engineer</p>
			</div>

			<div class="flex gap-4">
				<a href="#" class="p-2 rounded-lg bg-card hover:bg-primary/10 transition-colors">
					<GithubIcon class="size-5" />
				</a>
				<a href="#" class="p-2 rounded-lg bg-card hover:bg-primary/10 transition-colors">
					<LinkedinIcon class="size-5" />
				</a>
				<a href="#" class="p-2 rounded-lg bg-card hover:bg-primary/10 transition-colors">
					<TwitterIcon class="size-5" />
				</a>
			</div>
		</div>
	</div>
</footer>
