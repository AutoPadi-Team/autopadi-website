import { RiMedalLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPackages } from "react-icons/tb";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";
import { Testimonial } from "../components/Testimonial";
import AppStore from "../assets/app-store.svg";
import PlayStore from "../assets/play-store.svg";
import Intro from "../assets/intro.png";
import Driver from "../assets/driver.png";
import Mechanic from "../assets/mechanic.png";
import { useState } from "react";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(0);

  const handleToggle = (action: number) => {
    setIsOpen(action);
  };

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
      icon: <TbPackages className="size-8" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Saved me when my battery died at 2 AM. Fast response and professional service!",
      author: "Uncle Fii",
      role: "",
    },
    {
      quote:
        "Their regular maintenance plan has kept my car running like new for years.",
      author: "Michael Boadu",
      role: "",
    },
    {
      quote:
        "Used their mechanic service for a corporate event. Punctual and professional.",
      author: "David Tekpernor",
      role: "",
    },
  ];

  const frequentlyQuestions = [
    {
      question: "Is there a cost to join AutoPadi?",
      answer:
        "Mechanics can join for free; freemium and subscription plans are available for vehicle owners.",
    },
    {
      question: "How are mechanics verified?",
      answer:
        "We conduct thorough background checks and require certifications.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, subscriptions can be canceled or modified at any time.",
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

        {/* Wait list */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-14">
              <div className="text-center md:text-left my-20 md:w-2/4 w-fit">
                <h2 className="text-3xl font-bold mb-4">
                  Join the AutoPadi Community Today!
                </h2>
                <p className="text-2xl mb-4">
                  Experience the AutoPadi difference and discover a new way to
                  get your vehicle serviced. With our platform, you can:
                </p>
                <ul className="text-slate-600">
                  <li className="mb-2 flex items-start">
                    <RiMedalLine className="text-blue-700 mr-6 mt-1" />
                    <span>Book services through our mobile app</span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <RiMedalLine className="text-blue-700 mr-6 mt-1" />
                    <span>Track the status of your service in real-time</span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <RiMedalLine className="text-blue-700 mr-6 mt-1" />
                    <span>Subscribe to maintenance plan at any time</span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <RiMedalLine className="text-blue-700 mr-6 mt-1" />
                    <span>Connect to your personal mechanic</span>
                  </li>
                </ul>
                <a href="">
                  <button className="py-2 px-4 mt-4 text-white rounded-lg bg-blue-700 hover:bg-blue-800 cursor-pointer">
                    Join Our Waitlist
                  </button>
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
                <img
                  src={Intro}
                  alt=""
                  className="w-fit h-auto object-cover "
                />
              </div>
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

        {/* AutoPadi UI */}
        <section className="py-16 bg-gray-50">
          <div className="flex justify-center">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src={Driver} alt="driver" />
                <img src={Mechanic} alt="mechanic" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="py-16">
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
        </section> */}

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="flex justify-center">
              <div className="items-center">
                {frequentlyQuestions.map((item, index) => (
                  <div
                    onClick={() => handleToggle(index)}
                    className="w-[100%] bg-slate-100 my-10 py-2 px-4 rounded-2xl shadow shadow-blue-100 hover:shadow-md hover:shadow-blue-100 hover:border hover:border-blue-600 cursor-pointer"
                  >
                    <div className="flex space-x-20 justify-between font-semibold text-2xl">
                      {item.question}
                      <AiOutlinePlus className="size-6 ml-10 md:ml-80 mt-1" />
                    </div>
                    {isOpen === index && (
                      <p
                        className={`mx-1 my-2 transition-all duration-300 ease-in-out ${
                          isOpen === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-full"
                        }`}
                      >
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
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
              Download our AutoPadi and enjoy the best service and maintenance
              plans from our mechanics today and also connect with your personal
              mechanic.
            </p>

            <p className="text-xl mb-8 max-w-2xl mx-auto font-semibold">
              Coming soon on....
            </p>

            <div className="flex justify-center">
              <div className="flex space-x-3 -mt-16">
                <img
                  src={PlayStore}
                  alt="play store"
                  className="size-36 p-0 cursor-pointer"
                />
                <img
                  src={AppStore}
                  alt="play store"
                  className="size-36 p-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
