import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-black text-white font-[Poppins] flex flex-col items-center justify-center">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center text-emerald-400 pt-32 mb-8">
        DevGriffins Contact
      </h1>

      {/* Contact Section */}
      <div className="max-w-7xl w-full bg-gray-900/50 backdrop-blur-md shadow-2xl rounded-3xl p-10 mb-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Info */}
        <div className="flex-1 space-y-6">
          <p className="uppercase text-sm tracking-widest text-emerald-400">
            We're here to help you
          </p>
          <h2 className="text-4xl font-semibold leading-snug">
            Discuss Your <br />
            <span className="text-emerald-400">Book Explorer Experience</span>
          </h2>
          <p className="text-gray-300 text-sm">
            Have questions about our Book Explorer project, suggestions for new
            features, or issues using our app? We’d love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3">
                <i className="bx bx-envelope text-emerald-400 text-xl"></i>
              </div>
              <p className="text-gray-300">
                <span className="text-white font-medium">E-mail:</span>
                <br />
                support@devgriffins.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3">
                <i className="bx bx-phone text-emerald-400 text-xl"></i>
              </div>
              <p className="text-gray-300">
                <span className="text-white font-medium">Phone number:</span>
                <br />
                +94 71 728 5063
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full">
          <form className="bg-gray-800 rounded-2xl p-8 shadow-lg space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              rows="4"
              placeholder="Tell us your feedback or message"
              className="w-full bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-all duration-300 w-full font-medium"
            >
              <i className="bx bx-send text-xl"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-950 py-8 text-center border-t border-gray-800 mt-auto">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-emerald-400 font-medium">DevGriffins Books</span>.{" "}
          All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
