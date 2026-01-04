<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "@lucide/svelte";
	import { toast } from "svelte-sonner";

	let formData = $state({
		name: "",
		email: "",
		message: "",
	});

	let isSubmitting = $state(false);

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		isSubmitting = true;

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			toast.success("Message sent successfully! I'll get back to you soon.");
			formData = { name: "", email: "", message: "" };
		} catch (error) {
			toast.error("Failed to send message. Please try again.");
		} finally {
			isSubmitting = false;
		}
	};

	const contactInfo = [
		{
			icon: MailIcon,
			label: "Email",
			value: "alex@example.com",
			href: "mailto:alex@example.com",
		},
		{
			icon: PhoneIcon,
			label: "Phone",
			value: "+1 (555) 123-4567",
			href: "tel:+15551234567",
		},
		{
			icon: MapPinIcon,
			label: "Location",
			value: "San Francisco, CA",
			href: "#",
		},
	];
</script>

<section id="contact" class="py-20 sm:py-32 bg-gradient-to-b from-background to-primary/5">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-12">
			<div class="flex flex-col gap-4">
				<h2 class="text-4xl sm:text-5xl font-bold">Get In Touch</h2>
				<div class="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
			</div>

			<div class="grid md:grid-cols-3 gap-6 mb-12">
				{#each contactInfo as info}
					<a href={info.href} class="group">
						<Card class="h-full hover:shadow-lg-lg hover:scale-[1.02] transition-all duration-300">
							<CardContent class="pt-6">
								<div class="flex flex-col items-center text-center flex flex-col gap-4">
									<div class="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
										<svelte:component this={info.icon} class="size-6 text-primary" />
									</div>
									<div>
										<p class="text-sm text-foreground/70">{info.label}</p>
										<p class="font-semibold">{info.value}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</a>
				{/each}
			</div>

			<Card class="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
				<CardHeader>
					<CardTitle>Send me a message</CardTitle>
					<CardDescription>I'll respond as soon as possible</CardDescription>
				</CardHeader>
				<CardContent>
					<form onsubmit={handleSubmit} class="flex flex-col gap-4">
						<div class="grid md:grid-cols-2 gap-4">
							<Input type="text" placeholder="Your name" bind:value={formData.name} disabled={isSubmitting} required />
							<Input type="email" placeholder="Your email" bind:value={formData.email} disabled={isSubmitting} required />
						</div>
						<Textarea placeholder="Your message" bind:value={formData.message} disabled={isSubmitting} rows={5} required />
						<Button type="submit" size="lg" disabled={isSubmitting} class="w-full gap-2">
							{#if isSubmitting}
								<span class="animate-spin">⏳</span>
							{:else}
								<SendIcon class="size-4" />
							{/if}
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
