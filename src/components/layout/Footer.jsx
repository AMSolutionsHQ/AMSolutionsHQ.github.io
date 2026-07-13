import { company, navigation } from "@/data/company";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#080d1a] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">


          {/* Brand */}
          <div>

            <h3 className="text-3xl font-bold">
              {company.name}
            </h3>

            <p className="mt-4 text-slate-400 leading-relaxed">
              {company.description}
            </p>

          </div>



          {/* Navigation */}
          <div>

            <h4 className="text-lg font-semibold">
              Navigation
            </h4>


            <ul className="mt-5 space-y-3">

              {navigation.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="
                      text-slate-400
                      hover:text-white
                      transition
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>



          {/* Connect */}
          <div>

            <h4 className="text-lg font-semibold">
              Connect
            </h4>


            <div className="mt-5 space-y-4">

              <p className="text-slate-400">
                {company.email}
              </p>


              <div className="flex gap-5">

                <a
                  href={company.social.github}
                  className="
                    text-slate-400
                    hover:text-white
                    transition
                  "
                >
                  <FaGithub size={24}/>
                </a>


                <a
                  href={company.social.linkedin}
                  className="
                    text-slate-400
                    hover:text-white
                    transition
                  "
                >
                  <FaLinkedin size={24}/>
                </a>

              </div>

            </div>

          </div>


        </div>

      </div>


      {/* Bottom */}
      <div
        className="
          border-t
          border-white/10
          py-6
          text-center
          text-slate-500
          text-sm
        "
      >

        © {new Date().getFullYear()} {company.name}. All rights reserved.

      </div>


    </footer>
  );
}

export default Footer;