import Link from "next/link";

const Footer = () => {
return (
    <footer className="bg-gray-900 text-white py-6 w-full mt-auto">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-400">
                If you have any questions or need further assistance, please feel free to reach out to us.
        </p>

        <form method="post" action="#" className="mt-4">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 rounded bg-gray-800 border border-gray-700 text-white w-full md:w-1/3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 rounded bg-gray-800 border border-gray-700 text-white w-full md:w-1/3"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="mt-4 p-2 rounded bg-gray-800 border border-gray-700 text-white w-full"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-4 mt-6">
          <Link href="#"><i className="fab fa-twitter text-gray-400 hover:text-white"></i></Link>
          <Link href="#"><i className="fab fa-facebook-f text-gray-400 hover:text-white"></i></Link>
          <Link href="#"><i className="fab fa-instagram text-gray-400 hover:text-white"></i></Link>
          <Link href="#"><i className="fab fa-github text-gray-400 hover:text-white"></i></Link>
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          &copy; Untitled. All rights reserved. Design by{" "}
          <Link href="http://html5up.net" className="text-blue-400 hover:underline">
            HTML5 UP
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
