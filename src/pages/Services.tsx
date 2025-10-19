import { MdOutlineEmergencyShare } from "react-icons/md"; 
import { GiMechanicGarage } from "react-icons/gi"; 
import { MdWorkspacePremium } from "react-icons/md"; 
import { TbPackages } from "react-icons/tb"; 
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";
import AppStore from "../assets/app-store.svg";
import PlayStore from "../assets/play-store.svg";

export const Services = () => {
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
    {
      title: "Premium Mechanics",
      description: "Convenient access to trusted mechanics.",
      icon: <MdWorkspacePremium className="size-8" />,
    },
    {
      title: "Personal Mechanics",
      description:
        "Connect with your personal Mechanic for Simplified Auto services.",
      icon: <GiMechanicGarage className="size-8" />,
    },
    {
      title: "Emergency Support",
      description:
        "Peace of mind with emergency support & easy payment options.",
      icon: <MdOutlineEmergencyShare className="size-8" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="bg-blue-700 text-white py-20 px-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Connects drivers with trusted mechanics and provides access to
            emergency help-right from your phone.
          </p>
        </div>
        <section className="py-16 bg-gray-50">
          {/* mechanic service */}
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mechanics & other Service Providers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>

          {/* driver service */}
          <div className="container mx-auto px-4 pt-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Vehicle Owners & Drivers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(3, 6).map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our emergency mechanics are available 24/7 to get you back on the
              road quickly and safely on AutoPadi.
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
