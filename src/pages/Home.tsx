import { TbPackages } from "react-icons/tb"; 
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";
import { Testimonial } from "../components/Testimonial";

export const Home = () => {
  const services = [
    {
      title: "Grow Business",
      description:
        "Grow your business and expand customer base through increased visibility.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Digital Tools",
      description:
        "Get access to digital tools for your services and payment processing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Subscription Plans",
      description:
        "You can easily offer Subscription plans to your customers to ensure steady income.",
      icon: (
        <TbPackages className="size-8" />
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        "Saved me when my battery died at 2 AM. Fast response and professional service!",
      author: "Uncle Fii",
    },
    {
      quote:
        "Their regular maintenance plan has kept my car running like new for years.",
      author: "Michael Boadu",
    },
    {
      quote:
        "Used their mechanic service for a corporate event. Punctual and professional.",
      author: "David Tekpernor",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simplifying Auto Care Anytime, Anywhere
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              AutoPadi is a mobile platform that Connects drivers with trusted
              mechanics and provides access to emergency help-right from your
              phone.
            </p>
            <div className="space-x-4">
              <a
                href="/services"
                className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="bg-[#1e40af] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mechanics & other Service Providers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/services"
                className="text-blue-700 font-medium hover:underline"
              >
                View All Services →
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#1e40af] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to schedule an appointment or request emergency
              assistance.
            </p>
            <a
              href="/contact"
              className="bg-white text-[#1e40af] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
