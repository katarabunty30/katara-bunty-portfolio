import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_bunty",
        "template_5yj99to",
        form.current,
        "w1h7owTsGpjzYsxGr"
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        form.current.reset();

        setTimeout(() => {
          setStatus("");
        }, 5000);
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-8 bg-[#050816] overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center"
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-4 mb-16 text-lg">
          Let's work together on your next Excel or Google Sheets project.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "katarabunty30@gmail.com",
              },
              {
                icon: <FaPhone />,
                title: "Phone",
                value: "+91 9316396738",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                value: "Nadiad, Gujarat, India",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-400 transition"
              >

                <div className="text-cyan-400 text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.value}
                  </p>
                </div>

              </motion.div>

            ))}

          </motion.div>

          {/* RIGHT */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-xl"
          >

            <div className="space-y-6">

              <input
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
                className="w-full bg-[#0B1120] border border-gray-700 focus:border-cyan-400 rounded-xl p-4 outline-none transition"
              />

              <input
                type="email"
                name="from_email"
                required
                placeholder="Your Email"
                className="w-full bg-[#0B1120] border border-gray-700 focus:border-cyan-400 rounded-xl p-4 outline-none transition"
              />

              <textarea
                rows="6"
                name="message"
                required
                placeholder="Write your message..."
                className="w-full bg-[#0B1120] border border-gray-700 focus:border-cyan-400 rounded-xl p-4 outline-none transition resize-none"
              />

              <button
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 font-bold flex justify-center items-center gap-3 transition disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-500/10 border border-green-500 rounded-xl p-4 text-green-400 text-center"
                >
                  ✅ Message sent successfully!
                  <br />
                  I'll reply as soon as possible.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-red-500/10 border border-red-500 rounded-xl p-4 text-red-400 text-center"
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;