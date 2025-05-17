import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight, CheckCircle, Download, Rocket, Shield, TrendingUp, ShieldCheck, Handshake, Monitor,
  Shirt,
  Sparkles,
  Car,
  Wrench,
  House,
  Lightbulb,
  LightbulbIcon,
  Cog,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"


export default function Home() {
  return (
    <div className="flex min-h-screen  flex-col">

      <Header />


      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 lg:pl-18 md:py-24 lg:py-32 sm:bg-gradient-to-l from-zinc-500 via-stone-600 to-zinc-900  bg-gradient-to-t from-zinc-500 via-stone-600 to-zinc-900">
          <div className="container px-4">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Text Content */}
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl ">
                  Discover Our Powerful Application
                </h1>
                <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-lg text-white/80">
                  Streamline your experience with our innovative app. Access all our products and services from
                  anywhere, anytime.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" asChild radius="lg">
                    <Link href="#download">
                      Download Now <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#partnership">
                      Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <div className="relative w-[250px] h-[400px] sm:w-[300px] sm:h-[450px] md:w-[350px] md:h-[500px] animate-float">
                  <Image
                    src="/mockup.png"
                    alt="App Screenshot"
                    fill
                    className="object-contain drop-shadow-xl/75"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Download Section with QR Code */}
        <section id="download" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download Our App</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Scan the QR code or click the download buttons to get our app on your device.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-card border  rounded-lg shadow-sm">
                    <Image
                      src="/qr.png"
                      alt="QR Code to download app"
                      width={265}
                      height={265}
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button className="w-full sm:w-auto border-0 rounded-xl " asChild>
                    <Link href="#">
                      <Image
                        src="/appstore.svg"
                        alt="App Store"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      App Store
                    </Link>
                  </Button>
                  <Button className="w-full sm:w-auto" asChild>
                    <Link href="#">
                      <Image
                        src="/googleplay.svg"
                        alt="Google Play"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Google Play
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">App Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover what makes our application stand out from the rest.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                {[
                  {
                    title: "User-Friendly Interface",
                    description: "Intuitive design that makes navigation simple and efficient.",
                    icon: <Handshake className="h-12 w-12 text-primary" />, // Example icon for UI
                  },
                  {
                    title: "Fast Performance",
                    description: "Optimized for speed to provide a seamless experience.",
                    icon: <Rocket className="h-12 w-12 text-primary" />, // Example icon for performance
                  },
                  {
                    title: "Secure Transactions",
                    description: "Advanced security measures to protect your data and transactions.",
                    icon: <ShieldCheck className="h-12 w-12 text-primary" />, // Example icon for security
                  },
                  {
                    title: "24/7 Support",
                    description: "Our team is always available to assist you with any issues.",
                    icon: <CheckCircle className="h-12 w-12 text-primary" />, // Example icon for support
                  },
                ].map((feature, index) => (
                  <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="p-6">
                      <div className="mb-3 flex items-center justify-center">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <CardDescription className="text-sm">{feature.description}</CardDescription>
                    </CardContent>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section id="categories" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Product Categories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore our diverse range of product categories available on our app.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Electronics",
                    description: "Explore our selection of premium products in this category.",
                    icon: <Lightbulb className="w-16 h-16 text-primary" />,
                  },
                  {
                    title: "Fashion",
                    description: "Discover unique items that cater to your specific needs.",
                    icon: <Shirt className="w-16 h-16 text-primary" />,
                  },
                  {
                    title: "Cosmetics",
                    description: "Find the perfect products that combine quality and affordability.",
                    icon: <Sparkles className="w-16 h-16 text-primary" />,
                  },
                  {
                    title: "Automotive",
                    description: "Browse through our exclusive collection of Automotive items.",
                    icon: <Cog className="w-16 h-16 text-primary" />,
                  },
                  {
                    title: "Home & Living",
                    description: "Check out our specialized products designed for maximum satisfaction.",
                    icon: <House className="w-16 h-16 text-primary" />,
                  },
                  {
                    title: "Car Essentials",
                    description: "Explore our newest additions to stay ahead of the curve.",
                    icon: <Car className="w-16 h-16 text-primary" />,
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="flex items-center justify-center h-48 bg-transparent">
                      {category.icon}
                    </div>
                    <div className="bg-background p-6">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="mt-2 text-muted-foreground">{category.description}</p>
                      <Button variant="link" className="mt-4 p-0" asChild>
                        <Link href="#">
                          Explore More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Program Section */}
        <section id="partnership" className="w-full py-12 px-18 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Partnership Program
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sell With Us</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our partnership program and benefit from high commissions, secure transactions, and a wide
                  customer base.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>High commission rates that reward your efforts</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    <span>Advanced security measures to protect transactions</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    <span>Access to a growing customer base</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Dedicated support for partners</span>
                  </li>
                </ul>
                <Button size="lg" asChild>
                  <Link href="#">Become a Partner</Link>
                </Button>
              </div>
              <div className="relative overflow-hidden rounded-lg border  p-2">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/Business deal-amico.svg"
                    alt="Partnership illustration"
                    width={600}
                    height={600}
                    className=" object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Section */}
      <Footer />
    </div>
  )
}
