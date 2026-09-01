import { getIconClass } from "@cspl-cars24/theme-v2"
import Text from "../turbo/Text"
import '../../styles/footer.css'

const FooterImage = ({ fill: _fill, className = '', src, ...props }) => (
  <img
    {...props}
    src={src}
    className={className}
  />
)

const redirection = (url, target = '_self') => ({
  action: 'DEEP_LINK',
  data: { url, target },
})

const menuLink = (id, label, url) => ({
  id,
  label,
  redirection: redirection(url),
})

const footerDataIndia = {
  header: {
    logo: {
      media: {
        url: '/cars24logo.svg',
        type: 'image',
        alt: 'CARS24 Logo',
      },
      title: 'Better drives, better lives',
      description: 'Made with ❤️ in Gurugram',
      redirection: redirection('https://www.cars24.com'),
    },
    address: {
      title: 'Corporate Office',
      text: '6th Floor, SAS Tower-C, Ch Baktawar Singh Road, Medicity Sector 38, Shivaji Nagar, Gurgaon, 122001, Haryana',
    },
    certification: {
      title: 'RBI Registered NBFC',
      image: {
        id: 3001,
        url: 'https://c.animaapp.com/B5fQIXKF/img/logo-1@2x.png',
        caption: 'RBI',
        alternativeText: 'RBI Logo',
      },
    },
    socialLinks: [
      { key: 'Facebook', icon: 'facebook', redirection: redirection('https://www.facebook.com/cars24india/') },
      { key: 'X', icon: 'twitter', redirection: redirection('https://x.com/cars24india/') },
      { key: 'Instagram', icon: 'instagram', redirection: redirection('https://www.instagram.com/cars24india/') },
      { key: 'Youtube', icon: 'youtube', redirection: redirection('https://www.youtube.com/channel/UCV-CPspQhwTsaiftR4JvT0w') },
      { key: 'LinkedIn', icon: 'linkedin', redirection: redirection('https://www.linkedin.com/company/cars24/') },
    ],
    downloadLinks: [
      {
        media: {
          url: 'https://cdn.cars24.com/qa/cms/2025/01/28/af06855c-ff0e-4af6-8430-26358b691fe4appstore.png',
          type: 'image',
          alt: 'App Store',
        },
        redirection: redirection('https://apps.apple.com/in/app/cars24-sell-buy-used-cars/id1364492085'),
      },
      {
        media: {
          url: 'https://cdn.cars24.com/qa/cms/2025/01/28/792eefd8-bb3c-4401-a763-f21806591741playstore.png',
          type: 'image',
          alt: 'Play Store',
        },
        redirection: redirection('https://play.google.com/store/apps/details?id=com.cars24.seller'),
      },
    ],
  },
  geo: {
    label: 'We are global',
    items: [
      {
        id: 1,
        label: 'Australia',
        media: {
          url: 'https://cdn.cars24.com/qa/cms/2025/01/28/6b5b5a14-3e69-4fbb-9827-86ba7eb00521australia.png',
          type: 'image',
          alt: 'Australia',
        },
        redirection: redirection('https://www.cars24.com.au/'),
      },
      {
        id: 2,
        label: 'UAE',
        media: {
          url: 'https://cdn.cars24.com/qa/cms/2025/01/28/115ef785-4593-4773-90a1-60d8e0f1c6c8uae.png',
          type: 'image',
          alt: 'UAE',
        },
        redirection: redirection('https://www.cars24.ae/'),
      },
    ],
    copyrightNotice: `© ${new Date().getFullYear()} CARS24, All rights reserved`,
  },
  footerData: {
    items: [
      [
        {
          id: 'company-section',
          title: 'Company',
          links: [
            menuLink('about-us', 'About Us', 'https://www.cars24.com/about-us/'),
            menuLink('careers', 'Careers', 'https://www.cars24.com/careers/'),
            menuLink('press-kit', 'Press kit', 'https://www.cars24.com/press-kit/'),
            menuLink('blog', 'Blog', 'https://autonauts.cars24.com/'),
            menuLink('article', 'Article', 'https://www.cars24.com/article/'),
            menuLink('news', 'News', 'https://www.cars24.com/news/'),
            menuLink('privacy-policy', 'Privacy Policy', 'https://www.cars24.com/privacy-policy/'),
            menuLink('sustainability', 'Sustainability', 'https://www.cars24.com/sustainability/'),
            menuLink('testimonials', 'Testimonials', 'https://www.cars24.com/testimonials/'),
          ],
        },
      ],
      [
        {
          id: 'discover-section',
          title: 'Discover',
          links: [
            menuLink('buy-used-car', 'Buy used car', 'https://www.cars24.com/buy-used-cars/'),
            menuLink('sell-used-car', 'Sell used car', 'https://www.cars24.com/sell-used-cars/'),
            menuLink('used-car-valuation', 'Used car valuation', 'https://www.cars24.com/used-car-valuation/'),
            menuLink('motor-insurance', 'Motor insurance', 'https://insure24.com/'),
            menuLink('check-pay-challan', 'Check & pay challan', 'https://www.cars24.com/traffic-challan/'),
            menuLink('check-vehicle-details', 'Check vehicle details', 'https://www.cars24.com/rto-vehicle-registration-details/'),
            menuLink('explore-new-cars', 'Explore new cars', 'https://www.cars24.com/new-cars/'),
            menuLink('scrap-your-car', 'Scrap your car', 'https://www.cars24.com/scrap-cars/'),
          ],
        },
      ],
      [
        {
          id: 'help-support-section',
          title: 'Help & support',
          links: [
            menuLink('faqs', 'FAQs', 'https://www.cars24.com/faq/'),
            menuLink('security', 'Security', 'https://www.cars24.com/security/'),
            menuLink('contact-us', 'Contact us', 'https://www.cars24.com/contact/'),
            menuLink('become-partner', 'Become a partner', 'https://www.cars24.com/become-our-partner/'),
            menuLink('rc-transfer-status', 'RC transfer status', 'https://www.cars24.com/rc-transfer/'),
            menuLink('terms-conditions', 'Terms & conditions', 'https://www.cars24.com/terms-and-conditions/'),
          ],
        },
      ],
    ],
  },
  configuration: {
    theme: 'dark',
  },
}

export default function Footer() {
  const { header, footerData, geo } = footerDataIndia
  const columns = footerData.items.flat()

  return (
    <footer className="bg-slate-900 text-primary-inverse">
      <div className="mx-auto max-w-7xl px-24 py-48 md:px-32 md:py-64">
        <div className="grid gap-48 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-64">
          <section aria-label="Cars24" className="min-w-0">
            <a href={header.logo.redirection.data.url} aria-label="Cars24 home" className="inline-flex">
              <FooterImage
                src={header.logo.media.url}
                alt={header.logo.media.alt}
                className="h-24 w-auto brightness-0 invert"
              />
            </a>

            <Text
              text={header.logo.title}
              as="p"
              typography="heading-h1-bold"
              className="mt-16 max-w-200 text-primary-inverse"
            />
            <Text
              text={header.logo.description}
              as="p"
              typography="label-1-semibold"
              className="mt-8 text-primary-inverse"
            />

            <div className="mt-40">
              <Text
                text={header.address.title}
                as="h2"
                typography="label-2-semibold"
                className="text-secondary-on-color"
              />
              <Text
                text={header.address.text}
                as="p"
                typography="label-2-regular"
                className="mt-12 w-328 max-w-full text-primary-inverse"
              />
            </div>

            <div className="mt-32 flex items-center gap-8">
              <FooterImage
                src={header.certification.image.url}
                alt={header.certification.image.alternativeText}
                className="h-24 w-24 object-contain"
              />
              <Text
                text={header.certification.title}
                as="p"
                typography="label-2-semibold"
                className="text-primary-inverse"
              />
            </div>

            <nav aria-label="Cars24 social profiles" className="mt-48 flex items-center gap-24">
              {header.socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.redirection.data.url}
                  aria-label={social.key}
                  className="inline-flex text-primary-inverse transition-opacity hover:opacity-70"
                >
                  <i className={[getIconClass(social.icon, "xl"), "text-primary-inverse"].join(" ")} aria-hidden />
                </a>
              ))}
            </nav>

            <div className="mt-32 flex flex-wrap items-center gap-16">
              {header.downloadLinks.map((download) => (
                <a key={download.media.alt} href={download.redirection.data.url} className="inline-flex">
                  <FooterImage
                    src={download.media.url}
                    alt={download.media.alt}
                    className="h-40 w-auto"
                  />
                </a>
              ))}
            </div>
          </section>

          {columns.map((column) => (
            <nav key={column.id} aria-label={column.title} className="min-w-0">
              <Text
                text={column.title}
                as="h2"
                typography="label-2-semibold"
                className="text-secondary-on-color"
              />
              <div className="mt-16 flex flex-col gap-16">
                {column.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.redirection.data.url}
                    className="w-fit text-label-2-regular text-primary-inverse transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          ))}
        </div>

        <div className="mt-48 border-t border-secondary-inverse pt-20">
          <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
            <Text
              text={geo.copyrightNotice}
              as="p"
              typography="label-3-regular"
              className="text-secondary-on-color"
            />
            <div className="flex flex-wrap items-center gap-12">
              <Text
                text={geo.label}
                as="span"
                typography="label-2-semibold"
                className="text-primary-inverse"
              />
              {geo.items.map((region, index) => (
                <div key={region.id} className="flex items-center gap-8">
                  {index > 0 && <span aria-hidden className="text-secondary-on-color">•</span>}
                  <a href={region.redirection.data.url} className="inline-flex items-center gap-8">
                    <FooterImage
                      src={region.media.url}
                      alt={region.media.alt}
                      className="h-16 w-16 object-contain"
                    />
                    <Text
                      text={region.label}
                      as="span"
                      typography="label-2-regular"
                      className="text-primary-inverse"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
