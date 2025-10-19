import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Story from "../assets/story.jpeg"

export const About = () => {
  const testimonials = [
    {
      description:
        "Oversees overall strategy and direction. Makes key decisions that impact the company's growth and success.",
      author: "Eddie Tekpenor",
      role: "Founder & CEO of AutoPadi",
    },
    {
      description: "Ensures the company runs smoothly and efficiently.",
      author: "Eugenia Ohenewa Amadi",
      role: "Administrator & Operations Manager",
    },
    {
      description:
        "Designs, develops, and maintains the server-side logic, database integration, and API connectivity for the platform",
      author: "George Accam Buertey",
      role: "Software Engineer(Backend)",
    },
    {
      description:
        "Creates user-centered designs that are intuitive and engaging. Develops visually appealing designs that align with the company's brand",
      author: "Michael Dei",
      role: "UI/UX Designer",
    },
    {
      description:
        "Develops and maintains the mobile applications, ensuring seamless user experience and integration with backend services.",
      author: "Joseph Eshun",
      role: "Software Engineer(Frontend)",
    },
    {
      description:
        "Develops and maintains the mobile applications, ensuring seamless user experience and integration with backend services.",
      author: "Godfred Boateng",
      role: "Software Engineer(Frontend)",
    },
    {
      description:
        "Provides expert advice and guidance to the team. Offers strategic guidance to help the company achieve its goals.",
      author: "Shadrach Dameteye",
      role: "Mentor & Advisor",
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
              About AutoPadi
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Making life easier for Mechanics & Drivers
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src={Story}
                  alt="Our Team"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Motive</h2>
                <p className="text-gray-600 mb-4">
                  At AutoPadi, we're passionate about keeping you moving.
                  Founded on the principles of reliability, convenience, and
                  trust, our platform connects drivers with top-rated mechanics
                  and emergency roadside services.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you need a routine tune-up, we're here to help. Our
                  mission is to provide fast, affordable, and professional
                  automotive solutions that give you peace of mind on the road.
                </p>
                <p className="text-gray-600">
                  With AutoPadi, you're not just getting a service - you're
                  getting a partner who cares about your safety and
                  satisfaction.
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
              {testimonials.map((item) => (
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center">
                    <p className="bg-blue-700 rounded-full text-center flex items-center justify-center text-white text-5xl size-30 overflow-hidden mx-auto mb-4">
                      {item.author.charAt(0).toUpperCase()}
                      {item.author.charAt(1).toUpperCase()}
                    </p>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.author}</h3>
                  <p className="text-blue-700 font-medium mb-3">
                    {item.role}
                  </p>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
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
                <h3 className="text-xl font-semibold mb-2">Convenience</h3>
                <p className="text-gray-600">
                  Easier to get your car service at your convenience.
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
