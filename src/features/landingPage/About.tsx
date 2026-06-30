// src/features/landingPage/components/About.tsx
export default function About() {
  return (
    <section id="About" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <div className="bg-gray-50 rounded-lg p-8 text-left space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Byte254 is Kenya's premier tech retailer, committed to providing genuine 
            products at affordable prices. We connect Kenyans with the latest technology 
            while ensuring quality and customer satisfaction.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make premium technology accessible to every Kenyan 
            through reliable products, fast delivery, and excellent customer service.
          </p>
        </div>
      </div>
    </section>
  );
}