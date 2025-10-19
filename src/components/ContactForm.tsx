import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log("Form submitted:", formData);
  //   alert("Thank you for your message! We will contact you soon.");
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });
  // };

  return (
    <form
      className="space-y-4"
      action="https://formsubmit.co/info@autopadi.org"
      method="POST"
    >
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        ></textarea>
      </div>

      <button
        type="submit"
        className="cursor-pointer bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-[#1e40af] transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
};
