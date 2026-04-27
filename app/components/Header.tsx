"use client";

import { useEffect, useState } from "react";

const topLinks = [
  { label: "Product Customization", href: "/pages/product-engraving" },
  { label: "Gift Store", href: "/pages/gift-store" },
  { label: "Express Delivery", href: "/pages/express-delivery" },
  { label: "Corporate Orders", href: "/pages/corporate-orders" },
  { label: "Track Orders", href: "https://ronin.pk/pages/track-your-order" },
  { label: "Contact Us", href: "https://ronin.pk/pages/contact-us" },
];

type DropItem = { label: string; href: string; image: string };
type Submenu = { label: string; href: string; items: DropItem[] };
type MenuItem = {
  label: string;
  href: string;
  sale?: boolean;
  submenus?: Submenu[];
};

const CDN = "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/";

const menuItems: MenuItem[] = [
  {
    label: "Software Based Headphones",
    href: "/collections/headphones",
    sale: true,
  },
  {
    label: "Audio & Buds",
    href: "/pages/audio-buds",
    submenus: [
      {
        label: "Earbuds",
        href: "/collections/wireless-earbuds",
        items: [
          { label: "ANC Earbuds", href: "https://ronin.pk/collections/tws-earbuds-active-noise-cancellation", image: `${CDN}ANC_23a13470-d04a-4a17-bca6-449c42aca095.webp?v=1767256724` },
          { label: "ENC Earbuds", href: "https://ronin.pk/collections/environmental-noise-cancellation", image: `${CDN}R-7010.png?v=1736356194` },
          { label: "Best Earbuds for Calling", href: "https://ronin.pk/collections/best-for-calling", image: `${CDN}CALLING.webp?v=1767256725` },
          { label: "Gaming Earbuds", href: "https://ronin.pk/collections/gaming-buds", image: `${CDN}GAMING_3d2a22a2-96e4-46be-8f3a-99b43c219f89.webp?v=1767256725` },
          { label: "Fitness & Sports Earbuds", href: "https://ronin.pk/collections/fitness-and-sports", image: `${CDN}R-7020.png?v=1736356194` },
        ],
      },
      {
        label: "Handsfree",
        href: "/collections/handsfree",
        items: [
          { label: "iPhone Handsfree", href: "https://ronin.pk/collections/iphone-handsfree", image: `${CDN}ios-handsfree.png?v=1738000210` },
          { label: "Type C Handsfree", href: "https://ronin.pk/collections/type-c-handsfree", image: `${CDN}type-c-handsfree.png?v=1738000210` },
          { label: "Gaming Handsfree", href: "https://ronin.pk/collections/gaming-handsfree", image: `${CDN}R-007.png?v=1736359931` },
          { label: "3.5mm Audio Jack Handsfree", href: "https://ronin.pk/collections/aux-handsfree", image: `${CDN}R-09.png?v=1736360534` },
        ],
      },
      {
        label: "Neckbands",
        href: "/collections/neckband",
        items: [
          { label: "Neckbands", href: "https://ronin.pk/collections/neckbands", image: `${CDN}R-970.png?v=1736360908` },
        ],
      },
      {
        label: "Speakers",
        href: "/collections/speakers",
        items: [
          { label: "Speakers", href: "/collections/speakers", image: `${CDN}2_3ac12aae-b698-4310-8855-72e9c21f1590.webp?v=1745081650` },
        ],
      },
      {
        label: "Headphone",
        href: "/collections/headphones",
        items: [
          { label: "Wired Headphone", href: "https://ronin.pk/collections/wired-headphone", image: `${CDN}Headphone_49ae0cd6-db8d-419e-ba93-c4bb784dc7ce.png?v=1739789964` },
          { label: "Bluetooth Headphone", href: "https://ronin.pk/collections/bluetooth-headphone", image: `${CDN}R-1500.png?v=1736361647` },
        ],
      },
    ],
  },
  {
    label: "Smart Watches",
    href: "https://ronin.pk/pages/smartwatch-collection-page",
    submenus: [
      {
        label: "Men",
        href: "/collections/smart-watches",
        items: [
          { label: "Amoled + AOD Smart Watches", href: "https://ronin.pk/collections/amoled-and-aod-smart-watches", image: `${CDN}9_e39ec434-2c01-4b0e-8852-3fdfa13644d2.png?v=1736330105` },
          { label: "Round Dial Smart Watches", href: "https://ronin.pk/collections/round-dial-smartwatches", image: `${CDN}10.png?v=1736330105` },
          { label: "Square Dial Smart Watches", href: "https://ronin.pk/collections/square-dial-smartwatches", image: `${CDN}1_a7143f50-17a2-4971-a3ff-37f4b7efe7f8.png?v=1736330105` },
          { label: "Leather Strap Smart Watches", href: "https://ronin.pk/collections/leather-strap-smartwatches", image: `${CDN}5_e161cacb-6ebf-4019-8e07-2ca1df78f92a.png?v=1736330105` },
          { label: "Metallic Strap Smart Watches", href: "https://ronin.pk/collections/metallic-strap-smartwatches", image: `${CDN}3_8687e2d9-b906-4b9f-9153-b4443492957f.png?v=1736330105` },
          { label: "Silicon Strap Smart Watches", href: "https://ronin.pk/collections/silicon-strap-smartwatches", image: `${CDN}6_2798563b-9d97-4d94-87a5-f2fef96f467b.png?v=1736330105` },
          { label: "Luxury Smart Watches", href: "https://ronin.pk/collections/luxury-smart-watches", image: `${CDN}11.png?v=1736330105` },
        ],
      },
      {
        label: "Women",
        href: "/collections/smart-watches",
        items: [
          { label: "Luxury Smart Watches", href: "https://ronin.pk/collections/luxury-smart-watches-women", image: `${CDN}11.png?v=1736330105` },
          { label: "Amoled and AOD Smart Watches", href: "https://ronin.pk/collections/amoled-and-aod-smart-watches-women", image: `${CDN}9_e39ec434-2c01-4b0e-8852-3fdfa13644d2.png?v=1736330105` },
          { label: "Round Dial Smart Watches", href: "https://ronin.pk/collections/round-dial-smartwatches-women", image: `${CDN}10.png?v=1736330105` },
          { label: "Square Dial Smart Watches", href: "https://ronin.pk/collections/square-dial-smartwatches-women", image: `${CDN}1_a7143f50-17a2-4971-a3ff-37f4b7efe7f8.png?v=1736330105` },
          { label: "Leather Strap Smart Watches", href: "https://ronin.pk/collections/leather-strap-smartwatches-women", image: `${CDN}5_e161cacb-6ebf-4019-8e07-2ca1df78f92a.png?v=1736330105` },
          { label: "Metallic Strap Smart Watches", href: "https://ronin.pk/collections/metallic-strap-smartwatches-women", image: `${CDN}3_8687e2d9-b906-4b9f-9153-b4443492957f.png?v=1736330105` },
          { label: "Silicon Strap Smart Watches", href: "https://ronin.pk/collections/silicon-strap-smartwatches-women", image: `${CDN}6_2798563b-9d97-4d94-87a5-f2fef96f467b.png?v=1736330105` },
        ],
      },
    ],
  },
  {
    label: "Charging Devices",
    href: "/pages/charging-devices",
    submenus: [
      {
        label: "Cables",
        href: "/collections/cables",
        items: [
          { label: "iPhone", href: "/collections/cables-iphone/", image: `${CDN}1_29442909-4002-49d2-bd4f-1b5bf100b7dc.png?v=1736346595` },
          { label: "Type - C", href: "/collections/cables-type-c", image: `${CDN}Cable.png?v=1739778911&width=120` },
          { label: "Micro USB", href: "/collections/cables-micro-usb", image: `${CDN}340_Mega_Men.png?v=1738084775` },
        ],
      },
      {
        label: "Power Bank",
        href: "/collections/powerbanks",
        items: [
          { label: "10000Mah", href: "/collections/10000mah", image: `${CDN}1_1614484e-cf11-411b-ac48-2ae7b7eb6146.png?v=1736346256` },
          { label: "20000Mah", href: "/collections/20000mah", image: `${CDN}83x101.png?v=1739358173` },
        ],
      },
      {
        label: "Mobile Chargers",
        href: "/collections/charger",
        items: [
          { label: "iPhone Chargers", href: "/collections/iphone-chargers", image: `${CDN}iphone_b708a253-5889-4a78-868b-1c48cae8db32.png?v=1737981700` },
          { label: "Android Chargers", href: "/collections/android-chargers", image: `${CDN}charger_68d117c3-0db1-4f96-bcfc-4ebf7e468390.png?v=1737979991` },
          { label: "Type C Chargers", href: "/collections/type-c-chargers", image: `${CDN}type-c_f0b88e9d-63ed-4d98-804c-31ed502ab6e1.png?v=1737981701` },
          { label: "Car Chargers", href: "/collections/car-chargers", image: `${CDN}1_12b732a2-13d2-4d4f-a145-3f20638f9308.png?v=1736349936` },
        ],
      },
    ],
  },
  {
    label: "Accessories",
    href: "/pages/accessories",
    submenus: [
      {
        label: "Cables",
        href: "/collections/cables",
        items: [
          { label: "iPhone", href: "/collections/cables-iphone/", image: `${CDN}1_29442909-4002-49d2-bd4f-1b5bf100b7dc.png?v=1736346595` },
          { label: "Type - C", href: "/collections/cables-type-c", image: `${CDN}Cable.png?v=1739778911&width=120` },
          { label: "Micro USB", href: "/collections/cables-micro-usb", image: `${CDN}340_Mega_Men.png?v=1738084775` },
        ],
      },
      {
        label: "Smart Watch Charging Cables",
        href: "/collections/smart-watch-charging-cables",
        items: [
          { label: "R-01 to R-08", href: "/products/charging-cable-r-01-r-02-r-03-r-04-r-06-r-07-r-08/", image: `${CDN}charging_cable.png?v=1737751150` },
          { label: "R-010", href: "/products/r-010-charging-cable", image: `${CDN}charging_cable.png?v=1737751150` },
          { label: "R-09", href: "/products/r-09-charging-cable", image: `${CDN}charging_cable.png?v=1737751150` },
          { label: "R-011", href: "/products/r-011-charging-cable", image: `${CDN}charging_cable.png?v=1737751150` },
          { label: "R-012", href: "/products/r-012-charging-cable", image: `${CDN}charging_cable.png?v=1737751150` },
        ],
      },
      {
        label: "Live Tracker",
        href: "/collections/live-tracker-1",
        items: [
          { label: "R-101 Smart Tracker", href: "/collections/live-tracker-1", image: `${CDN}Accessories_95d50337-b1ac-4374-9cfb-8223e7a1a16f.png?v=1737386230` },
        ],
      },
      {
        label: "Smart Watch Straps",
        href: "/collections/smart-watch-straps",
        items: [
          { label: "Silicon Straps", href: "/collections/silicon-straps", image: `${CDN}R-01-04_silicon.png?v=1736362258` },
          { label: "Leather Straps", href: "/collections/leather-straps", image: `${CDN}R-10-Ultra.png?v=1736362258` },
          { label: "Metallic Straps", href: "/collections/metallic-straps", image: `${CDN}R-011-luxe.png?v=1736362259` },
        ],
      },
    ],
  },
  {
    label: "Shop All",
    href: "/pages/all-products",
  },
];

function SearchIcon() {
  return (
    <svg fill="none" className="w-[18px] h-[18px]" viewBox="0 0 18 19">
      <path fill="currentColor" fillRule="evenodd" d="M11.03 11.68A5.784 5.784 0 1 1 2.85 3.5a5.784 5.784 0 0 1 8.18 8.18m.26 1.12a6.78 6.78 0 1 1 .72-.7l5.4 5.4a.5.5 0 1 1-.71.7z" clipRule="evenodd" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px]" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px]" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeSubcat, setActiveSubcat] = useState<Record<string, string>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function getActiveSubcat(menuLabel: string, submenus: Submenu[]) {
    return activeSubcat[menuLabel] ?? submenus[0]?.label;
  }

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      {/* Top bar – transparent dark-gradient overlay */}
      <div
        className="relative z-30 py-[15px] px-[100px] text-right"
        style={{ background: "linear-gradient(0deg, transparent, rgba(0,0,0,0.6))" }}
      >
        <ul className="flex justify-end items-center gap-5">
          {topLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white font-semibold text-xs opacity-90 hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating main header */}
      <div
        className={`fixed left-0 right-0 z-20 mx-auto rounded-[15px] bg-white transition-all duration-300 ease-out ${
          isScrolled
            ? "top-[8px] w-[calc(100%-24px)] px-[80px] py-[4px]"
            : "top-[50px] w-[calc(100%-60px)] px-[70px] py-[7px]"
        }`}
        style={{
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.06), 0 1px 1px -0.5px rgba(0,0,0,0.06), 0 3px 3px -1.5px rgba(0,0,0,0.06), 0 6px 6px -3px rgba(0,0,0,0.06), 0 12px 12px -6px rgba(0,0,0,0.06)",
        }}
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* Header row */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 w-[200px]">
            <a href="/" className="desktoponly">
              <img
                src="https://ronin.pk/cdn/shop/files/ronin-logo_alt.png?v=1748266703&width=150"
                alt="Ronin Logo"
                height={27}
                width={150}
              />
            </a>
          </div>

          {/* Desktop nav + icons */}
          <ul className="flex items-center justify-end flex-1 gap-6 text-sm font-semibold">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setOpenMenu(item.label);
                  if (item.submenus?.[0] && !activeSubcat[item.label]) {
                    setActiveSubcat((prev) => ({
                      ...prev,
                      [item.label]: item.submenus![0].label,
                    }));
                  }
                }}
              >
                <a
                  href={item.href}
                  className={`whitespace-nowrap ${item.sale ? "text-[15px]" : ""} text-[#111010] hover:opacity-70 transition-opacity`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Search */}
            <li>
              <a href="/search" aria-label="Search" className="text-[#111010] hover:opacity-70 transition-opacity flex items-center">
                <SearchIcon />
              </a>
            </li>

            {/* Account */}
            <li>
              <a
                href="https://ronin.pk/customer_authentication/redirect?locale=en&region_country=PK"
                aria-label="Account"
                className="text-[#111010] hover:opacity-70 transition-opacity flex items-center"
              >
                <UserIcon />
              </a>
            </li>

            {/* Cart */}
            <li>
              <a href="/cart" aria-label="Cart" className="text-[#111010] hover:opacity-70 transition-opacity flex items-center">
                <CartIcon />
              </a>
            </li>
          </ul>
        </div>

        {/* Mega dropdowns */}
        {menuItems.map(
          (item) =>
            item.submenus && (
              <div
                key={item.label}
                className={`absolute right-0 z-30 w-[93%] rounded-[28px] pt-[70px] px-[30px] pb-[30px] transition-all duration-300 ${
                  openMenu === item.label
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                style={{
                  top: 0,
                  height: "420px",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div className="flex h-full gap-0">
                  {/* Left: subcategory list */}
                  <div className="w-[33%] flex-shrink-0 relative pr-6 border-r-2 border-white overflow-y-auto">
                    <ul>
                      {item.submenus.map((sub) => {
                        const isActive = getActiveSubcat(item.label, item.submenus!) === sub.label;
                        return (
                          <li
                            key={sub.label}
                            className="mb-5 last:mb-0"
                            onMouseEnter={() =>
                              setActiveSubcat((prev) => ({
                                ...prev,
                                [item.label]: sub.label,
                              }))
                            }
                          >
                            <a
                              href={sub.href}
                              className={`font-semibold text-[18px] leading-10 tracking-[-0.04em] transition-colors ${
                                isActive ? "text-[#283f85]" : "text-[#111010]"
                              }`}
                              style={{ fontFamily: "Inter, var(--font-assistant), sans-serif" }}
                            >
                              {sub.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right: product image grid */}
                  <div className="flex-1 pl-8 overflow-y-auto">
                    {item.submenus.map((sub) => {
                      const isActive = getActiveSubcat(item.label, item.submenus!) === sub.label;
                      return (
                        <ul
                          key={sub.label}
                          className={`flex flex-wrap items-end gap-[7px] pt-[10px] ${isActive ? "" : "hidden"}`}
                        >
                          {sub.items.map((dropItem) => (
                            <li
                              key={dropItem.label}
                              className="inline-block mx-[10px] mb-[35px] mt-[10px]"
                              style={{ width: "16%" }}
                            >
                              <a
                                href={dropItem.href}
                                className="relative flex flex-col w-full pt-[70px] rounded-[21px] transition hover:shadow-lg"
                                style={{
                                  background: "rgba(255,255,255,0.5)",
                                  boxShadow: "4px 4px 9px rgba(0,0,0,0.2)",
                                  borderRadius: "21px",
                                }}
                              >
                                <img
                                  src={dropItem.image}
                                  alt={dropItem.label}
                                  className="absolute left-1/2 -translate-x-1/2 block"
                                  style={{ top: "-59px", maxWidth: "80%" }}
                                />
                                <h6
                                  className="text-center text-black min-h-[40px] flex items-center justify-center px-2"
                                  style={{
                                    fontFamily: "Inter, var(--font-assistant), sans-serif",
                                    fontWeight: 600,
                                    fontSize: "13px",
                                    lineHeight: "20px",
                                    letterSpacing: "-0.04em",
                                  }}
                                >
                                  {dropItem.label}
                                </h6>
                              </a>
                            </li>
                          ))}
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </header>
  );
}
