import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Contact Me
        </h2>

        {/* Personal Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            About Me
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Hi, I'm Purav! I am passionate about technology and always excited to build meaningful projects. Feel free to connect with me through the contact details below.
          </p>
          
          <div className="flex justify-center gap-8 mb-6">
            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Mobile:</h4>
              <p className="text-gray-600">9548653251</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">GitHub:</h4>
              <a href="https://github.com/puravking/" target="_blank" className="text-blue-500 hover:underline">
                github.com/puravking
              </a>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">LinkedIn:</h4>
              <a href="https://www.linkedin.com/in/purav-5641b7254/" target="_blank" className="text-blue-500 hover:underline">
                linkedin.com/in/purav-5641b7254
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button 
            onClick={() => window.location.href = "tel:+9548653251"} 
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
            Call Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
