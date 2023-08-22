import { okaytoLogo } from "../../assets/images"
import { footerLinks } from "../../constants"

const Footer = () => {
  return (
    <footer className='bg-secondary-100 mt-auto'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-start gap-10 flex-wrap max-lg:flex-col'>
          <div className='flex flex-col items-start'>
            <a href='/'>
              <img src={okaytoLogo} alt='logo' width={150} height={46} className='m-0' />
            </a>
            <p className='mt-6 text-base leading-7 font-montserrat text-secondary-500 font-semibold [ sm:max-w-sm ]'>
              Specializes in providing high-quality, stylish products for your wardrobe.
            </p>
            <div className='flex items-center gap-5 mt-8'>
              {/* {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))} */}
            </div>
          </div>

          <div className='flex flex-1 gap-20 flex-wrap w-full [ lg:gap-10 ]'>
            {footerLinks.map((section) => (
              <div className='flex-1' key={section.title}>
                <h4 className='font-montserrat text-2xl leading-normal text-secondary-700  font-semibold uppercase mb-6'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='text-base leading-7 font-montserrat text-secondary-500 font-semibold'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className='h-[2px] rounded-xl my-8 bg-secondary-900/30 border-0' />

        <div className='text-white-300 max-sm:flex-col max-sm:items-center'>
          <p className='text-base leading-normal font-montserrat text-secondary-500 font-semibold text-center'>
            Copyright &copy; 2023 Okayto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
