import React, { useEffect, useState, useRef } from "react";

const Insights = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set state to true when the section is in view
          observer.disconnect(); // Stop observing after it comes into view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (observer) observer.disconnect(); // Cleanup observer
    };
  }, []);

  // Fetching data from the API when the section comes into view
  useEffect(() => {
    if (isInView) {
      const fetchArticles = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await response.json();
          setArticles(data.slice(0, 3)); // Get only the latest 3 posts
          setTimeout(() => {
            setLoading(false);
          }, 2000); 
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };

      fetchArticles();
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} id="insights" className="text-black  bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Latest Insights</h2>

        {/* Skeleton Loader */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg bg-white animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-6"></div>
                <div className="h-8 bg-gray-200 rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className={`group p-6 border rounded-lg shadow-lg bg-white transform transition-all duration-500 ease-in-out hover:shadow-xl hover:bg-yellow-500 hover:scale-105
                  h-full flex flex-col items-center justify-between boxShadow`}
              >
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-white transition-colors duration-300">
                  {article.title}
                </h3>
                {/* Description */}
                <p className="text-lg mb-6 text-black group-hover:text-white transition-colors duration-300">
                  {article.body.slice(0, 150)}...
                </p>
                {/* Link */}
                <button className="px-6 py-2 bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <a
                  href={`https://jsonplaceholder.typicode.com/posts/${article.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
               
                >
                  Read More
                </a>
              </button>
               
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Insights;
