import { company } from "@/data/company";
import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#0B1120] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div>

            <span className="text-blue-400 font-medium">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Let's build something great together
            </h2>

            <p className="mt-6 text-slate-400 text-lg">
              Have a project idea? Contact NovaTech and
              let's discuss how we can turn your idea into
              a powerful digital solution.
            </p>


            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-400"/>
                <span>{company.email}</span>
              </div>


              <div className="flex items-center gap-4">
                <Phone className="text-blue-400"/>
                <span>{company.phone}</span>
              </div>


              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400"/>
                <span>{company.location}</span>
              </div>

            </div>

          </div>


          {/* Right */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-8
            "
          >

            <form
              action={`mailto:${company.email}`}
              method="post"
              encType="text/plain"
              className="space-y-5"
            >

              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                className="
                  w-full
                  rounded-lg
                  bg-white/10
                  border
                  border-white/10
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-400
                "
              />


              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                className="
                  w-full
                  rounded-lg
                  bg-white/10
                  border
                  border-white/10
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-400
                "
              />


              <textarea
                name="Message"
                placeholder="Your Message"
                rows="5"
                className="
                  w-full
                  rounded-lg
                  bg-white/10
                  border
                  border-white/10
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-400
                "
              />


              <button
                type="submit"
                className="
                  w-full
                  rounded-lg
                  bg-blue-600
                  py-3
                  font-medium
                  hover:bg-blue-700
                  transition
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;