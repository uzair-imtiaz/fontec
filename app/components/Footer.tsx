const footerColumns = [
  {
    title: "SHOP",
    links: [
      { label: "All Products", href: "https://ronin.pk/pages/all-products" },
      { label: "Earbuds", href: "https://ronin.pk/collections/wireless-earbuds" },
      { label: "Handsfree", href: "https://ronin.pk/collections/handsfree" },
      { label: "Headphones", href: "https://ronin.pk/collections/headphones" },
      { label: "Power Bank", href: "https://ronin.pk/collections/powerbanks" },
      { label: "Charger", href: "https://ronin.pk/collections/charger" },
      { label: "Smart Watch", href: "https://ronin.pk/collections/smart-watches" },
      { label: "Data cable", href: "https://ronin.pk/collections/cables" },
      { label: "Corporate Orders", href: "https://ronin.pk/pages/corporate-orders" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "https://ronin.pk/pages/about-us" },
      { label: "Careers", href: "https://ronin.pk/pages/careers" },
      { label: "Offical Brand Outlet", href: "https://ronin.pk/pages/brand-outlet" },
      { label: "Customer Care Center", href: "https://ronin.pk/pages/customer-care-center" },
      { label: "Blogs", href: "https://ronin.pk/blogs/posts" },
      { label: "Privacy Policy", href: "https://ronin.pk/pages/privacy-policy" },
      { label: "Terms and Condition", href: "https://ronin.pk/pages/terms-conditions" },
      { label: "Contact us", href: "/pages/contact-us" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Register a Complaint", href: "/pages/customer-complaint" },
      { label: "Track Your Order", href: "/pages/track-your-order" },
      { label: "Modes of Payment", href: "/pages/modes-of-payments" },
      { label: "Warranty Policy", href: "/pages/warranty-guidelines" },
      { label: "Exchange and Refund Policy", href: "/pages/return-exchange-policy" },
      { label: "Shipping Policy", href: "https://ronin.pk/pages/shipping-return-policy" },
      { label: "Express Delivery", href: "https://ronin.pk/pages/express-delivery" },
    ],
  },
];

const paymentIcons = [
  { alt: "Visa", src: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Payment_partner_logo-04.png?width=45" },
  { alt: "Mastercard", src: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Payment_partner_logo-03.png?width=45" },
  { alt: "Union Pay", src: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Payment_partner_logo-02.png?width=45" },
  { alt: "PayPak", src: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Payment_partner_logo-01.png?width=45" },
  { alt: "Raast", src: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Payment_partner_logo-05.png?width=45" },
  { alt: "Mastercard", src: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Payment_partner_logo-07.png?width=45" },
  { alt: "JazzCash", src: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Payment_partner_logo-08.png?width=45" },
  { alt: "Upaisa", src: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Payment_partner_logo-06.png?width=45" },
];

export function Footer() {
  return (
    <footer className="bg-[#f1f1f1] pt-6 text-white">
      <div className="mx-auto max-w-[1440px] px-3 md:px-4">
        <div className="rounded-[18px] bg-[#13245c] px-8 py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1fr_300px]">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h5 className="mb-3 text-[15px] font-semibold">{col.title}</h5>
                <ul className="grid grid-cols-1 gap-y-2 text-[14px] text-white/85 xl:grid-cols-2 xl:gap-x-8">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a className="hover:text-white" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="border-white/45 lg:border-l lg:pl-9">
              <a href="https://ronin.pk/">
                <img
                  alt="Ronin"
                  className="mb-4 h-8 w-auto"
                  src="https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Whte.png?v=1738679755&width=150"
                />
              </a>
              <ul className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/90">
                <li>
                  <a href="https://www.facebook.com/share/15CnjCe4Vx/" target="_blank">
                    f
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ronin_0fficial?igsh=cjQyc25iOWdobWRk" target="_blank">
                    o
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@Ronin_officiaI" target="_blank">
                    ▶
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/ronin-official/" target="_blank">
                    in
                  </a>
                </li>
                <li>
                  <a href="https://x.com/roninforpak?s=11" target="_blank">
                    x
                  </a>
                </li>
              </ul>
              <div className="mb-5 space-y-1 text-[14px]">
                <h6 className="text-white/85">We&apos;re here to help.</h6>
                <a className="block font-semibold text-white" href="tel:021111176646">
                  Call Us: 021 111 176 646
                </a>
                <a className="block font-semibold text-white" href="mailto:Support@ronin.pk">
                  Email Us: Support@ronin.pk
                </a>
              </div>
              <h5 className="mb-2 text-[16px] font-semibold">Get exclusive offer and updates</h5>
              <form action="/contact#contact_form" className="flex gap-2">
                <input
                  className="w-full rounded-xl border border-white/60 bg-transparent px-5 py-2.5 text-[16px] outline-none placeholder:text-white/80"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="rounded-xl bg-white px-5 py-2.5 text-[14px] font-semibold text-black" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4">
          <span className="text-xs text-black/70">© 2026 Ronin - All Rights Reserved</span>
          <ul className="flex flex-wrap items-center gap-1.5" role="list">
            {paymentIcons.map((icon) => (
              <li key={`${icon.alt}-${icon.src}`}>
                <img alt={icon.alt} className="h-7 w-auto object-contain" src={icon.src} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a
        aria-label="WhatsApp"
        className="fixed bottom-3 right-3 z-30"
        href="https://wa.me/9221111176646"
        target="_blank"
      >
        <img
          alt="WhatsApp"
          className="h-12 w-12"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        />
      </a>
    </footer>
  );
}
