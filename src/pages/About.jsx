import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ProAutoCare
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your trusted partner for automotive services and professional
              driving solutions.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Our Team"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, ProAutoCare began as a small auto repair shop
                  with a commitment to honest service and customer satisfaction.
                  Over the years, we've expanded our services to meet the
                  growing needs of our community.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a one-mechanic operation has grown into a
                  full-service automotive solution provider, offering everything
                  from routine maintenance to emergency roadside assistance and
                  professional driving services.
                </p>
                <p className="text-gray-600">
                  Our mission remains the same: to provide reliable,
                  professional service you can trust at fair prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-gray-200 rounded-full h-32 w-32 mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="John Smith"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">John Smith</h3>
                <p className="text-blue-700 font-medium mb-3">
                  Founder & Lead Mechanic
                </p>
                <p className="text-gray-600">
                  With over 20 years of experience, John ensures every repair
                  meets our high standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-gray-200 rounded-full h-32 w-32 mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Maria Garcia"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Maria Garcia</h3>
                <p className="text-blue-700 font-medium mb-3">
                  Service Manager
                </p>
                <p className="text-gray-600">
                  Maria coordinates all our services and ensures every customer
                  receives exceptional care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-gray-200 rounded-full h-32 w-32 mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="David Johnson"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">David Johnson</h3>
                <p className="text-blue-700 font-medium mb-3">
                  Head of Driving Services
                </p>
                <p className="text-gray-600">
                  David oversees our professional driving team, ensuring safety
                  and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-700 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
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
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We stand behind our work with industry-leading warranties and
                  guarantees.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-700 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Count on us to be there when you need us, with 24/7 emergency
                  services.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-700 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees or surprises - just honest assessments and fair
                  pricing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
