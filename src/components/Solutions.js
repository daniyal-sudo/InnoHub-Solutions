import React, { useState, useEffect } from "react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Build scalable and efficient software tailored to your business needs.",
    icon: "fas fa-laptop-code",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Harness the power of AI to automate processes and gain valuable insights.",
    icon: "fas fa-brain",
  },
  {
    title: "Cloud Integration",
    description:
      "Seamlessly integrate your systems with cloud platforms for better scalability and security.",
    icon: "fas fa-cloud",
  },
  {
    title: "IoT Solutions",
    description:
      "Enable smart devices and improve automation with Internet of Things solutions.",
    icon: "fas fa-sitemap",
  },
];

const Solutions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector("#solutions");
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-16 bg-white text-black">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl font-bold mb-8">Our Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transform ${
                visible ? "translate-x-0 opacity-100" : window.innerWidth <=425 ? 'translate-x-0 opacity-100': "translate-x-10 opacity-0"
              } transition-all duration-700 ease-in-out p-6 border rounded-lg boxShadow bg-white hover:bg-yellow-500 hover:scale-105
              `}
            >
              {/* Icon */}
              <div className="mb-4 text-4xl text-black group-hover:text-white transition-colors duration-300">
                <i className={service.icon}></i>
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-lg mb-6 text-black group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
              {/* Button */}
              <button className="px-6 py-2 bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
