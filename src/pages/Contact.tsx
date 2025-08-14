import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';

export const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to our team today.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you need emergency roadside assistance, want to
                  schedule maintenance, or need a professional driver, our team
                  is ready to help. Fill out the form and we'll get back to you
                  promptly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-700 text-white p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                      <p className="text-gray-500 text-sm">
                        24/7 Emergency Line
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-700 text-white p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">autopadi@gmail.com</p>
                      <p className="text-gray-500 text-sm">
                        Typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-700 text-white p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <p className="text-gray-600">Airport</p>
                      <p className="text-gray-600">ALX Building</p>
                      <p className="text-gray-500 text-sm">
                        By appointment only
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-700 text-white p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 9:00 AM - 4:00 PM
                      </p>
                      <p className="text-gray-600">
                        Sunday: Emergency services only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-6">
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256018042!2d-73.9878446845938!3d40.7484404793279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Business Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};