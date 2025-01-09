const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* About Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Food Market</h3>
            <p className="text-gray-400">Your trusted source for fresh and quality food.</p>
          </div>

          {/* Contact Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul>
              <li>Email: <a href="mailto:info@foodmarket.com" className="text-gray-300 hover:underline">info@foodmarket.com</a></li>
              <li>Phone: <a href="tel:+123456789" className="text-gray-300 hover:underline">+123 456 789</a></li>
              <li>Address: 123 Market St, Tashkent</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Food Market. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
