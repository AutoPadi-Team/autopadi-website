import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";

export const Services = () => {
  const allServices = [
    {
      title: "Emergency Roadside Assistance",
      description:
        "24/7 help when you need it most. Our team will come to your location to assist with:",
      details: [
        "Jump starts for dead batteries",
        "Flat tire changes",
        "Lockout services (keys locked in vehicle)",
        "Fuel delivery when you run out",
        "Minor mechanical adjustments",
      ],
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
      title: "Preventive Maintenance",
      description:
        "Keep your vehicle running smoothly with our comprehensive maintenance services:",
      details: [
        "Oil changes and fluid checks",
        "Tire rotations and balancing",
        "Brake inspections and service",
        "Battery testing and replacement",
        "Filter replacements",
      ],
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
      title: "Diagnostic Services",
      description:
        "Advanced diagnostics to identify and resolve vehicle issues:",
      details: [
        "Engine light diagnostics",
        "Computer system scans",
        "Electrical system testing",
        "Performance issues diagnosis",
        "Emissions testing",
      ],
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
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      title: "Professional Driving Services",
      description: "Need a driver? We provide professional drivers for:",
      details: [
        "Corporate events and meetings",
        "Airport transfers",
        "Special occasions (weddings, proms)",
        "Designated driver service",
        "Long-distance trips",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      ),
    },
    {
      title: "Vehicle Inspections",
      description: "Comprehensive inspections for peace of mind:",
      details: [
        "Pre-purchase inspections",
        "Annual safety inspections",
        "Used vehicle evaluations",
        "Fleet vehicle inspections",
        "Custom inspection packages",
      ],
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Fleet Services",
      description: "Specialized services for businesses with vehicle fleets:",
      details: [
        "Scheduled maintenance programs",
        "On-site fleet servicing",
        "Driver training programs",
        "Fuel management solutions",
        "Custom service agreements",
      ],
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
            d="M8 16l-1.447-.724a1 1 0 01-.553-.894V6.236a1 1 0 011.447-.894L8 8l5.553-2.764a1 1 0 011.447.894v8.144a1 1 0 01-.553.894L13 16l-5.553 2.764a1 1 0 01-1.447-.894V16z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="bg-blue-700 text-white py-20 px-10">
            <h1 className="text-4xl font-bold text-center mb-4">
              Our Services
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12">
              Comprehensive automotive solutions tailored to your needs. Quality
              service you can trust.
            </p>
        </div>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-700 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
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
              Our emergency roadside assistance is available 24/7 to get you
              back on the road quickly and safely.
            </p>
            <a
              href="tel:+1234567890"
              className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Call Now: (123) 456-7890
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
