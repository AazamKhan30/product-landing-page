import {footerLogo} from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <img src={footerLogo} alt="Footer Logo" width={150} height={46} />
          <p className="text-base mt-6 leading-normal font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-coral-red group  transition-all duration-300"
                key={icon.alt}
              >
                <a href="#"  >
                <img src={icon.src} alt={icon.alt} width={24} height={24} className="group-hover:invert"/>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 items-start justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 text-base leading-normal font-montserrat hover:text-slate-gray transition-all duration-300"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className=" font-montserrat flex flex-1 justify-start items-center gap-2">
        <img src="/src/assets/icons/copyright-sign.svg" alt="copyright sign" width="20" height="20" class="rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <div className=" font-montserrat">
          <a href="#" className="hover:text-slate-gray transition-all duration-300">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer