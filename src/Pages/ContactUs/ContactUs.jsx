import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { getDatabase, ref, set } from "firebase/database";
import { useRef } from "react";
import { useEffect, useState } from "react";
import envelopeLogo from "../../img/envelopeLogo.png";
import phoneLogo from "../../img/phoneLogo.png";

const ContactUs = ({ totalPaddingToGive }) => {
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    const loadDB = async () => {
      const db = await (
        await import("../../firebase/firebase.js")
      ).loadFirebase();
      setDatabase(db);
    };
    loadDB();
  }, []);

  const form = useRef(null);
  function handleSubmit(e) {
    const dataToSend = {};
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const [key, value] of formData.entries()) {
      dataToSend[`${key}`] = value;
    }
    if (
      dataToSend.name == "" ||
      dataToSend.phoneNumber == "" ||
      dataToSend.email == ""
    ) {
      toast.error("Fields Can't Be Empty");
    } else {
      const db = getDatabase();
      const useRef = ref(db, "users/" + new Date().getTime());
      set(useRef, dataToSend)
        .then(() => {
          toast.success("Your Response is Recorded");
          form.current.reset();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
          console.log(err);
        });
    }
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Vardaan Farms | Fresh Dairy Products Delivered to Your Doorstep in
          Gurugram, India
        </title>
        <meta
          name="description"
          content="Experience fresh and pure dairy products delivered straight to your doorstep with Vardaan Farms. Our healthy and nutritious milk and dairy products ensure your family stays strong every day. Contact us at (+91) 8816000082."
        />
        <meta
          name="keywords"
          content="Vardaan Farms, Fresh Dairy Products, Milk Delivery Gurugram, Healthy Milk India, Nutritious Dairy Products, Farm-Fresh Milk, Milk Preservation, High Production Dairy, Eco-Friendly Farming, Reliable Pasteurization"
        />
        <meta name="author" content="Vardaan Farms" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Vardaan Farms | Fresh Dairy Products Delivered to Your Doorstep in Gurugram, India"
        />
        <meta
          property="og:description"
          content="Experience fresh and pure dairy products delivered straight to your doorstep with Vardaan Farms. Our healthy and nutritious milk and dairy products ensure your family stays strong every day."
        />
        <meta
          property="og:image"
          content="https://www.vardaanfarms.com/images/your-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.vardaanfarms.com/contactUs"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vardaan Farms | Fresh Dairy Products Delivered to Your Doorstep in Gurugram, India"
        />
        <meta
          name="twitter:description"
          content="Experience fresh and pure dairy products delivered straight to your doorstep with Vardaan Farms. Healthy and nutritious dairy products for your family's well-being."
        />
        <meta
          name="twitter:image"
          content="https://www.vardaanfarms.com/images/your-image.jpg"
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>

      <section
        className="bg-neutral-700 w-full min-h-screen"
        style={{
          paddingTop: `${totalPaddingToGive}px`,
          minHeight: `calc(100vh - ${totalPaddingToGive}px`,
        }}
      >
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 flex justify-center gap-12 flex-col lg:flex-row pt-4 vs:pt-8">
          <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
            <span
              className="text-xl font-bold text-green-600"
              style={{ filter: "drop-shadow:(2px 2px 5px rgb(255,255,255))" }}
            >
              Contact Us
            </span>

            <h1 className="text-4xl font-bold">GET IN TOUCH</h1>

            <p>
              We’d love to hear from you! Whether you have a question about our
              products, need assistance, or just want to share your feedback,
              we're here to help. Reach out to us through any of the channels
              below, and we'll get back to you as soon as possible.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 border-b-2 pb-6">
              <div className="flex gap-2 items-center p-2">
                <img
                  src={envelopeLogo}
                  alt="Envelope"
                  className="bg-white rounded-md p-2"
                  loading="lazy"
                />
                <div>
                  <h1 className="font-bold">Email</h1>
                  <p>hello@vardaanfarms.com</p>
                </div>
              </div>

              <div className="flex gap-2 items-center p-2">
                <img
                  src={phoneLogo}
                  alt="Phone Logo"
                  className="bg-white rounded-md p-2"
                  loading="lazy"
                />
                <div>
                  <h1 className="font-bold">Phone</h1>
                  <p>(+91 ) 8816000082</p>
                </div>
              </div>

              <div className="flex gap-2 items-center bg-white text-black py-2 rounded-lg px-2 shadow-sm shadow-white border border-neutral-700 md:col-span-2">
                <img
                  src="https://img.icons8.com/?size=100&id=PZTTDl8ML4vy&format=png&color=000000"
                  alt="Location Logo"
                  style={{ width: "30px", height: "30px" }}
                  loading="lazy"
                />
                <div>
                  <h1 className="font-bold">Location</h1>
                  <p>Office No-19 StarTower Sec-30 Gurugram India</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-start">
              <div className="flex gap-4">
                <i className="fa-brands fa-facebook text-2xl hover:scale-90 transition cursor-pointer hover:opacity-90"></i>
                <i className="fa-brands fa-instagram text-2xl hover:scale-90 transition cursor-pointer hover:opacity-90"></i>
                <i className="fa-brands fa-linkedin text-2xl hover:scale-90 transition cursor-pointer hover:opacity-90"></i>
                <i className="fa-brands fa-youtube text-2xl hover:scale-90 transition cursor-pointer hover:opacity-90"></i>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 bg-white w-full text-black px-3 sm:px-8 py-4 sm:py-12 rounded-lg flex flex-col gap-4 sm:gap-8 shadow-lg shadow-black mb-8 lg:mt-6"
            ref={form}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-green-600">
              Leave A Message
            </h1>
            <p className="text-neutral-500">
              Have a question, feedback, or just want to say hi? Drop us a
              message, and we'll get back to you as soon as we can. We're here
              to help and listen to what you have to say.
            </p>

            <div className="grid gap-6 w-full">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none p-4 border-2 rounded-2xl w-full"
                  name="name"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="outline-none p-4 border-2 rounded-2xl w-full"
                  name="phoneNumber"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="outline-none p-4 border-2 rounded-2xl w-full"
                  name="email"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="outline-none p-4 border-2 rounded-2xl w-full"
                  name="subject"
                />
              </div>
              <textarea
                name="text"
                className="border-2 rounded-2xl p-4 h-[200px] resize-none outline-none"
                placeholder="Your Request"
              ></textarea>
              <button
                className="py-4 bg-green-600 rounded-xl text-white font-bold hover:scale-90 transition"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="border-t-2 border-dashed"></div>
      </section>
    </>
  );
};

export default ContactUs;
