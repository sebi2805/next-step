import React from "react";

const ContactPage = () => {
  return (
    <section className="p-6 bg-[#c7f2ee] text-navy-blue min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          We would love to hear from you! Please reach out with any questions or
          comments.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            ></textarea>
          </div>
          <div>
            <a
              href={`mailto:your-email@example.com?subject=${encodeURIComponent(
                "Contact Form Submission"
              )}&body=${encodeURIComponent("Name: \nEmail: \nMessage: \n")}`}
              className="bg-navy-blue text-white px-4 py-2 rounded-md shadow hover:bg-dark-teal transition"
            >
              Send Message
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
