"use client"

export function Footer () {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and tagline */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-orange-500">Industrium</h1>
          <p className="text-gray-400">since 1980</p>
          <p className="text-gray-500 text-sm">
            2022 Industrium. All rights reserved by Artureanec
          </p>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-white">New York</h3>
          <p className="text-gray-400">
            523 Sylvan Ave, 5th Floor <br />
            Mountain View, CA 94041 USA
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-white">Phone</h3>
          <p className="text-gray-400">+1 234 789 8948</p>
          <p className="text-gray-400">+1 987 654 3210</p>
          <h3 className="font-semibold text-lg text-white">Email</h3>
          <p className="text-gray-400">support@industrum.com</p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-white">Main Menu</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Home</li>
            <li>Careers</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};


