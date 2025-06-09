import Link from "next/link"
import Header from "@/components/Header"

const termsSections = [
	{
		title: "1. Introduction",
		content: `Welcome to Nexashopping. These Terms and Conditions govern your use of our application and website. By accessing or using our services, you agree to be bound by these Terms.`,
	},
	{
		title: "2. Definitions",
		content: ` "App" refers to the Nexashopping mobile application. "Service" refers to the services provided through our App and website. "User" refers to individuals who access or use our Service. "Partner" refers to individuals or entities participating in our partnership program.`,
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
		content: `All content, features, and functionality of our Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Nexashopping and are protected by copyright, trademark, and other intellectual property laws.`,
	},
	{
		title: "7. Limitation of Liability",
		content: `In no event shall Nexashopping, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.`,
	},
	{
		title: "8. Changes to Terms",
		content: `We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last updated" date at the top of these Terms and/or by other means as determined by us.`,
	},
	{
		title: "9. Refund policy",
		content: `At Nexashopping, we are committed to ensuring that you have a delightful shopping experience every time you make a purchase from our website. We take great care in packaging and shipping our products to ensure they reach you in perfect condition. However, we understand that sometimes things don't go as planned. To give you peace of mind, we offer a straightforward and secure return and refund process in case you are not completely satisfied with your purchase.
`,
	},
	{
		title:"9.1 ELIGIBILITY FOR REFUNDS OR REPLACEMENTS",
		content:`Incorrect Product Received: If you receive a product that is different from what you ordered, we sincerely apologise for the inconvenience. To resolve this issue promptly, please email us a clear photo of the item you received and your order number. Once we verify the discrepancy, we will arrange for a hassle-free pickup of the incorrect item and send you the correct product at no additional cost. Please note that we cannot accept returns or provide refunds if the product has been used, as we are unable to resell it to other customers.
Damaged Product Upon Delivery: We carefully pack every order to ensure it reaches you in perfect condition. However, if your product arrives damaged, we deeply regret the inconvenience. In such cases, please email us a photo of the damaged item, along with an unboxing video and your order number. Once we receive and verify the details, we will immediately arrange for a replacement product to be sent to you at no extra charge.
Incomplete Order: If you ordered multiple items and did not receive everything in a single shipment, it's possible that your order was split into multiple deliveries. However, if any items are missing from your final delivery, please contact us via email with your order number. We will quickly investigate the issue and ship the missing items to you on the same day. 
 `
	},

	{
		title:"9.2 IMPORTANT NOTES",
		content:`Timely Reporting: To ensure a smooth return or replacement process, please report any issues within 2 days of receiving your order. Replacement will be delivered withing 4 to 5 days.
Non-Returnable Items: For hygiene and safety reasons, no products are eligible for returns unless they are incorrect or damaged. `
	},
	{
		title:"9.3 REFUND PROCESS",
		content:`Refunds for Incorrect or Damaged Products: Once we receive the returned product and verify its condition, we will be credited your refund to the original payment method within 5-7 business days.
Refunds for Missing Items: In case of missing items, if a replacement cannot be provided, we will issue a refund for the value of the missing item(s). `
	},
	{
		title:"9.4 SHIPPING POLICY",
		content:`We currently ship to select cities only. Orders are processed within 1–3 business days and typically delivered within 5–7 business days. Shipping is free on orders above ₹500. You’ll receive tracking details once your order is dispatched. For serviceable areas or delivery concerns, please contact our support team`
	},
	
	{
		title: "10. Contact Us",
		content: `If you have any questions about these Terms, please contact us at:`,
		contact: {
			email: "support Nexashopping.com",
			address: "KHARGAPUR,TIKAMGARH, MADHYA PRADESH, 472001",
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
						© {new Date().getFullYear()} Nexashopping. All rights reserved.
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
