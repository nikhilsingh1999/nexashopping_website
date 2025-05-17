import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"

const sections = [
	{
		title: "1. Introduction",
		content: `At AppName, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and website.`,
	},
	{
		title: "2. Information We Collect",
		content: `We may collect several types of information from and about users of our Service, including:`,
		list: [
			"Personal identifiers such as name, email address, phone number, and postal address.",
			"Account credentials such as username and password.",
			"Transaction information such as purchase history and payment details.",
			"Device information such as IP address, browser type, and operating system.",
			"Usage data such as pages visited, time spent on the Service, and features used.",
		],
	},
	{
		title: "3. How We Use Your Information",
		content: `We may use the information we collect for various purposes, including:`,
		list: [
			"Providing, maintaining, and improving our Service.",
			"Processing transactions and sending related information.",
			"Communicating with you about products, services, offers, and promotions.",
			"Responding to your inquiries and providing customer support.",
			"Monitoring and analyzing usage patterns and trends.",
			"Protecting the security and integrity of our Service.",
		],
	},
	{
		title: "4. Information Sharing",
		content: `We may share your information with:`,
		list: [
			"Service providers who perform services on our behalf.",
			"Partners participating in our partnership program, as necessary to facilitate transactions.",
			"Law enforcement or other governmental authorities in response to a legal request.",
			"Other parties in connection with a merger, acquisition, or sale of all or a portion of our assets.",
		],
	},
	{
		title: "5. Data Security",
		content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
	},
	{
		title: "6. Your Rights",
		content: `Depending on your location, you may have certain rights regarding your personal data, including:`,
		list: [
			"The right to access and receive a copy of your personal data.",
			"The right to request correction of inaccurate personal data.",
			"The right to request deletion of your personal data.",
			"The right to object to processing of your personal data.",
			"The right to restrict processing of your personal data.",
			"The right to data portability.",
		],
	},
	{
		title: "7. Children's Privacy",
		content: `Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.`,
	},
	{
		title: "8. Changes to This Privacy Policy",
		content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.`,
	},
	{
		title: "9. Contact Us",
		content: `If you have any questions about this Privacy Policy, please contact us at:`,
		contact: {
			email: "privacy@appname.com",
			address: "123 App Street, Tech City, TC 12345",
		},
	},
]

export default function PrivacyPolicyPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center justify-center">
					<h1 className="text-xl font-semibold text-center">Privacy Policy</h1>
				</div>
			</header>
			<main className="flex-1">
				<div className="container max-w-3xl py-12 mx-auto text-center">
					<div className="space-y-8">
						<div>
							<p className="text-sm text-muted-foreground">
								Last updated: {new Date().toLocaleDateString()}
							</p>
						</div>

						{sections.map((section, index) => (
							<section key={index} className="space-y-4">
								<h3 className="text-xl font-semibold">{section.title}</h3>
								<p>{section.content}</p>
								{section.list && (
									<ul className="list-disc pl-6 space-y-2 inline-block text-left">
										{section.list.map((item, idx) => (
											<li key={idx}>{item}</li>
										))}
									</ul>
								)}
								{section.contact && (
									<p>
										Email: {section.contact.email}
										<br />
										Address: {section.contact.address}
									</p>
								)}
							</section>
						))}
					</div>
				</div>
			</main>
			<footer className="border-t py-6 px-4">
				<div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
					<p className="text-center text-sm text-muted-foreground md:text-left">
						© {new Date().getFullYear()} AppName. All rights reserved.
					</p>
					<div className="flex gap-4">
						<Link
							href="/"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Home
						</Link>
						<Link
							href="/terms"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Terms
						</Link>
						<Link
							href="/privacy-policy"
							className="text-sm font-medium"
						>
							Privacy
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}
