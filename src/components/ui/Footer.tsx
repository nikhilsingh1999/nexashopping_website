import Link from "next/link"
import Image from "next/image"


export default function Footer() {  
    return (
<footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="App Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold">Nexashopping</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted platform for all your needs. Download our app today and experience the difference.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-2">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">App</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#categories" className="text-muted-foreground transition-colors hover:text-foreground">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="#download" className="text-muted-foreground transition-colors hover:text-foreground">
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Partnership</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#partnership" className="text-muted-foreground transition-colors hover:text-foreground">
                      Sell With Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                      Commission Rates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexashopping. All rights reserved.
          </div>
        </div>
      </footer>
    );
    }