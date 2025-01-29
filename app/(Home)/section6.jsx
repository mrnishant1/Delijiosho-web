import { useState } from "react";
import send from "./send.js";
import Link from "next/link";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState(""); // State to hold feedback value

  const handleSend = () => {
    if (feedback.trim()) {
      send(feedback); // Calling the send function with the feedback value
      alert("Thanks for you feedback, we will work on it. ")
      setFeedback(""); // Clear the textarea after sending
    } else {
      alert("Please write some feedback before sending.");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 w-full text-lg justify-between font-serif text-gray-300 items-start px-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {/* Quick Links */}
      <div className="max-w-full lg:max-w-[100%] flex flex-col gap-4 pl-2 lg:pl-5">
        <h1 className="text-xl text-[#ffaa4f] font-bold uppercase">Quick Links</h1>
        <Link href="/" className="hover:underline hover:text-[#ffaa4f]">Home</Link>
        <Link href="/combo" className="hover:underline hover:text-[#ffaa4f]">Combo Offers</Link>
        <Link href="/hygiene" className="hover:underline hover:text-[#ffaa4f]">Our Hygiene Standards</Link>
        <Link href="/contact" className="hover:underline hover:text-[#ffaa4f]">Contact Us</Link>
        <Link href="/privacy" className="hover:underline hover:text-[#ffaa4f]">Privacy Policy</Link>
      </div>

      {/* About Us */}
      <div className="max-w-full lg:max-w-[100%] pr-5 text-justify">
        <h1 className="text-xl text-[#ffaa4f] font-bold uppercase">About Us</h1>
        <p>
          At <strong>Delijiosho Foods</strong>, we are committed to delivering the finest quality
          macaroni, pasta, and vermicelli to your table. With a focus on health and taste,
          we prioritize natural ingredients, modern manufacturing processes, and strict hygiene
          standards. From nutritious options to indulgent treats, our products are crafted to 
          satisfy every palate while maintaining top-tier quality.
        </p>
      </div>

      {/* Newsletter & Feedback */}
      <div className="max-w-full lg:max-w-[100%] flex flex-col gap-6 pl-2 lg:pl-5">
        {/* Business Contact */}
        <div>
          <h1 className="text-xl text-[#ffaa4f] font-bold uppercase">Contact Us</h1>
          <p>
            Business Email: <a href="mailto:jogeshchahar@gmail.com" className="text-[#ffaa4f] underline">jogeshchahar@gmail.com</a> <br />
            Dev Email: <a href="mailto:nishantkumaragra@gmail.com" className="text-[#ffaa4f] underline">nishantkumaragra@gmail.com</a>
          </p>
        </div>
        {/* Feedback Section */}
        <div >
          <p>We value your feedback! Share your thoughts about our products and services below:</p>
          <textarea
            name="Feedback"
            id="feedback"
            placeholder="Write your feedback here..."
            value={feedback} // Bind textarea value to state
            onChange={(e) => setFeedback(e.target.value)} // Update state on input
            className="w-full h-[100px] p-2 rounded-md shadow-inner text-black outline-none"
          ></textarea>
          <button
            onClick={handleSend}
            className="bg-[#ffaa4f] text-white px-4 py-2 rounded-md mt-2 hover:bg-[#e6993f]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

