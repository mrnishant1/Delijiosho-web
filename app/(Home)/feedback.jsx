import { useState } from "react";
import send from "./send.js";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState(""); // State to hold feedback value

  const handleSend = () => {
    if (feedback.trim()) {
      send(feedback); // Call the send function with the feedback value
      setFeedback(""); // Clear the textarea after sending
    } else {
      alert("Please write some feedback before sending.");
    }
  };

  return (
    <div>
      <p>We value your feedback! Share your thoughts about our products and services below:</p>
      <textarea
        name="Feedback"
        id="feedback"
        placeholder="Write your feedback here..."
        value={feedback} // Bind textarea value to state
        onChange={(e) => setFeedback(e.target.value)} // Update state on input
        className="w-[90%] h-[100px] p-2 rounded-md shadow-inner text-black outline-none"
      ></textarea>
      <button
        onClick={handleSend}
        className="bg-[#ffaa4f] text-white px-4 py-2 rounded-md mt-2 hover:bg-[#e6993f]"
      >
        Send
      </button>
    </div>
  );
}
