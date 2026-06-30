
import HeroSection from "@/features/landingPage/components/HeroSection"
import About from "@/features/landingPage/About"
import ContactUs from "@/features/landingPage/components/ContactUs"
import Footer from "@/features/landingPage/components/Footer"
import WhyUs from "@/features/landingPage/components/WhyUs"
import Product from "@/app/Product/page"
 


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Product />
      <WhyUs />
      <ContactUs />
      <About />
      <Footer />
    </main>
  )
}