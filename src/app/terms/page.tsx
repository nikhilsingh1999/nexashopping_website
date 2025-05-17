import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"

const termsSections = [
	{
		title: "1. Introduction",
		content: `Welcome to AppName. These Terms and Conditions govern your use of our application and website. By accessing or using our services, you agree to be bound by these Terms.`,
	},
	{
		title: "2. Definitions",
		content: ` "App" refers to the AppName mobile application. "Service" refers to the services provided through our App and website. "User" refers to individuals who access or use our Service. "Partner" refers to individuals or entities participating in our partnership program.`,
	},
	{
		title: "3. Account Registration",
		content: `To use certain features of our Service, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.`,
	},
	{
		title: "4. User Responsibilities",
		content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.`,
	},
	{
		title: "5. Partnership Program",
		content: `Our partnership program allows eligible individuals and entities to sell products through our platform. Partners are subject to additional terms and conditions specific to the partnership program. Commission rates, payment terms, and other details of the partnership program are subject to change and will be communicated to Partners through official channels.`,
	},
	{
		title: "6. Intellectual Property",
		content: `All content, features, and functionality of our Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of AppName and are protected by copyright, trademark, and other intellectual property laws.`,
	},
	{
		title: "7. Limitation of Liability",
		content: `In no event shall AppName, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.`,
	},
	{
		title: "8. Changes to Terms",
		content: `We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last updated" date at the top of these Terms and/or by other means as determined by us.`,
	},
	{
		title: "9. Contact Us",
		content: `If you have any questions about these Terms, please contact us at:`,
		contact: {
			email: "support@appname.com",
			address: "123 App Street, Tech City, TC 12345",
		},
	},
]

export default function TermsPage() {
	return (
		<div className="flex min-h-screen flex-col">
      <Header />
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center justify-center">
	
					<div className="ml-4">
						<h1 className="text-lg font-semibold text-center">
							Terms & Conditions
						</h1>
					</div>
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

						{termsSections.map((section, index) => (
							<section key={index} className="space-y-4">
								<h3 className="text-xl font-semibold">{section.title}</h3>
								<p>{section.content}</p>
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
