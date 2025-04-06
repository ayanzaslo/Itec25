import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-black text-white py-10 mt-16 dark:bg-white dark:text-black">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Links Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                <Link href="/clothing" className="font-serif text-white  dark:text-black hover:text-gray-400 text-xl hover:scale-110">Clothing</Link>

                </li>
                <li>
                <Link href="/jewellery" className="font-serif text-white  dark:text-black hover:text-gray-400 text-xl hover:scale-110">Jewellery</Link>
                </li>
                <li>
                <Link href="/music" className="font-serif text-white hover:text-gray-400 text-xl hover:scale-110  dark:text-black">Music</Link>
                </li>
                <li>
                <Link href="/contact" className="font-serif text-white  hover:text-gray-400 text-xl hover:scale-110   dark:text-black">Contact</Link>
                </li>
              </ul>
            </div>
  
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex justify-center md:justify-start flex-col gap-y-3">

                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white   font-serif text-2xl">Instagram</Link>             
              
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-serif text-2xl">Facebook</Link>             

                <Link href="https://www.YouTube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-serif text-2xl">YouTube</Link>             

              </div>
            </div>
  
            {/* Contact Info Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-3">
                Email: <a href="mailto:support@example.com" className="hover:text-white">support@example.com</a>
              </p>
              <p className="text-gray-400">Phone: +0757 212 118</p>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2025 Your Site Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  