import HeroSection from "@/features/landingPage/components/HeroSection"
import About from "@/features/landingPage/components/About"
import ContactUs from "@/features/landingPage/components/ContactUs"
import Footer from "@/features/landingPage/components/Footer"
import WhyUs from "@/features/landingPage/components/WhyUs"
import Product from "@/features/landingPage/components/Product"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <WhyUs />
      <Product />
      <ContactUs />
      <Footer />
    </main>
  )
}