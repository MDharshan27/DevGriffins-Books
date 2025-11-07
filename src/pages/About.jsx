import React from "react";
import aboutImg from "../assets/land.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-black text-white font-[Poppins] flex flex-col items-center justify-center">
      {/* About Section */}
      <section className="pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Heading */}
            <div className="md:w-6/12 flex flex-col justify-start">
              <h1 className="text-5xl font-semibold text-emerald-500 mb-4">
                Our Story
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Discover a world of knowledge and imagination with{" "}
                <span className="text-emerald-400 font-semibold">
                  DevGriffins Book Explorer
                </span>
                . We simplify book discovery with curated tools, a clean and
                intuitive interface, and reliable data from the Open Library API.
                Our mission is to make exploring books effortless — whether
                you’re a casual reader or a lifelong learner. From timeless
                classics to hidden gems, DevGriffins Book Explorer helps you find
                stories that inspire, educate, and stay with you.
              </p>

              {/* Small description */}
              <div className="mt-6 flex gap-4 items-center">
                <div className="inline-block text-sm bg-emerald-600/15 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-600/20">
                  Curated Collections
                </div>
                <div className="inline-block text-sm bg-white/5 text-gray-300 px-3 py-1 rounded-lg border border-white/6">
                  Open Library powered
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-6/12 flex justify-end">
              <div className="w-full md:w-[650px] lg:w-[700px]">
                <img
                  src={aboutImg}
                  alt="DevGriffins Books"
                  className="w-full h-[350px] md:h-[380px] lg:h-[360px] rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 flex flex-wrap justify-center gap-40">
            <div className="text-center">
              <h2 className="text-6xl font-semibold text-emerald-400">50M+</h2>
              <p className="text-gray-400 mt-2">Books explored by readers</p>
            </div>
            <div className="text-center">
              <h2 className="text-6xl font-semibold text-emerald-400">98%</h2>
              <p className="text-gray-400 mt-2">User satisfaction rate</p>
            </div>
            <div className="text-center">
              <h2 className="text-6xl font-semibold text-emerald-400">15+</h2>
              <p className="text-gray-400 mt-2">Trusted literary partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mt-16 px-8 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4 text-emerald-400">
            Our Vision
          </h3>
          <p className="text-gray-300">
            At DevGriffins, we believe in empowering readers and learners around
            the world. Our Book Explorer brings you closer to millions of
            titles—seamlessly, beautifully, and intelligently.
          </p>
        </div>
      </section>

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

export default About;
