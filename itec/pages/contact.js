import Footer from "./footer";
export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row justify-center items-center p-8 ">
        <div className="flex-1 p-10 bg-white shadow-lg rounded-xl">
          <h1 className="text-4xl font-bold text-start text-gray-800 mb-6">Contact Us</h1>
          <form className="space-y-10">
            <div>
              <label htmlFor="name" className="block text-lg text-gray-700">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"/>
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-gray-700">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"/>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg text-black">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your message"></textarea>
            </div>

            <button type="submit" className="w-full bg-black font-serif text-l text-white py-3 rounded-lg hover:bg-gray-900 transition text-start p-5 duration-300 cursor-pointer">Send Message</button>
          </form>
        </div>

        <div className="flex-1 mt-8 lg:mt-0 lg:ml-16">
          <div className="w-full h-full">
            <iframe className="rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5567.7584825998465!2d21.221366420208582!3d45.753566833838114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d7f8fb01877%3A0x4392d1545ab77eba!2sCetate%2C%20Timi%C8%99oara!5e0!3m2!1sen!2sro!4v1743896999697!5m2!1sen!2sro"
              width="100%" 
              height="650" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
