import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ykbz6xp",
        "template_6y83te5",
        form.current,
        "iHgB6qAhRM65NgRLn"
      )
      .then((result) => {
        if (result.text === "OK") {
          setMessageSent(true);
          form.current.reset();
        } else {
          setMessageSent(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setMessageSent(false);
      });
  };

  return (
    <div id="contact" className=" pt-24 flex justify-center items-center my-4">
      <div className="p-4 rounded-md w-[725px]">
        <h2 className="text-white text-4xl font-semibold mb-4 text-center">
          Contact Me
        </h2>
        <form onSubmit={sendEmail} ref={form} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              autoComplete="on"
              className="w-full bg-gray-900 border text-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              className="w-full border bg-gray-900 text-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="w-full border bg-gray-900 text-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 focus:outline-none"
          >
            Submit
          </button>
          {isMessageSent && (
          <div
            id="toast-success"
            className="flex items-center w-full p-4 my-[10px] text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">
              Message Sent successfully.
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
              onClick={() => setMessageSent(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
