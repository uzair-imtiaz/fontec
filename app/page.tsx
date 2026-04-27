import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Home() {
  const heroSlides = [
    "https://ronin.pk/cdn/shop/files/Vector_Desktop.avif?v=1777113309&width=2000",
    "https://ronin.pk/cdn/shop/files/Evolve_Desktop.avif?v=1776701602&width=2000",
    "https://ronin.pk/cdn/shop/files/Headphone_Series_c8735a16-2527-4252-ad9d-8bf1c012524f.avif?v=1773303016&width=2000",
  ];
  const newArrivals = [
    {
      title: "Vector Earbuds",
      subtitle: "Active Noise Cancellation | Quad Mic ENC",
      price: "Rs.6,675",
      compareAt: "Rs.8,175",
      image:
        "https://ronin.pk/cdn/shop/files/B1_c013970b-f860-4ffe-b160-0f52348a8aac.webp?v=1777099619&width=400",
    },
    {
      title: "Evolve Earbuds",
      subtitle: "Dual ear fit | Customize half & full in-ear",
      price: "Rs.4,995",
      compareAt: "Rs.6,495",
      image:
        "https://ronin.pk/cdn/shop/files/Evolve_Earbuds_62127995-2469-484c-89bb-2c837b80cee5.webp?v=1776927678&width=400",
    },
    {
      title: "Vesper Ai",
      subtitle: "164+ Language Translator | ANC & ENC",
      price: "Rs.7,595",
      compareAt: "Rs.9,095",
      image:
        "https://ronin.pk/cdn/shop/files/W1_3ac6f6eb-63d5-497a-8518-f468cd2f45d1.webp?v=1776178125&width=400",
    },
    {
      title: "Warrior Earbuds",
      subtitle: "Environmental Noise Cancellation | Gaming Buds",
      price: "Rs.5,795",
      compareAt: "Rs.7,395",
      image:
        "https://ronin.pk/cdn/shop/files/W1_ec9b2248-46de-4229-bb7c-8742af40a0c7.webp?v=1776075345&width=400",
    },
  ];
  const uspItems = [
    {
      icon: "https://ronin.pk/cdn/shop/files/anim-icons-free-delivery2-unscreen.gif?crop=center&height=110&v=1748356409&width=110",
      title: "Free Shipping Nationwide",
    },
    {
      icon: "https://ronin.pk/cdn/shop/files/anim-icons-satisfied-customer-unscreen.gif?crop=center&height=110&v=1748353645&width=110",
      title: "70M+ Satisfied Customer",
    },
    {
      icon: "https://ronin.pk/cdn/shop/files/anim-icons-warrenty-unscreen.gif?crop=center&height=110&v=1748353671&width=110",
      title: "365 Days Warranty",
    },
    {
      icon: "https://ronin.pk/cdn/shop/files/anim-icons-certified-unscreen.gif?crop=center&height=110&v=1748353480&width=110",
      title: "Certified Products",
    },
  ];
  const ambassadors = [
    {
      name: "Hamza Sohail",
      tag: "#actor",
      video:
        "//ronin.pk/cdn/shop/videos/c/vp/ab6c841bdfaa47daba3840696934dbe3/ab6c841bdfaa47daba3840696934dbe3.HD-1080p-7.2Mbps-49547717.mp4?v=0",
      avatar:
        "https://ronin.pk/cdn/shop/files/avatar-hamza-sohail.jpg?crop=center&height=60&v=1750166144&width=60",
    },
    {
      name: "Hasan Raheem",
      tag: "#singer",
      video:
        "//ronin.pk/cdn/shop/videos/c/vp/4607c4544f9748ff86b6070166117767/4607c4544f9748ff86b6070166117767.HD-1080p-7.2Mbps-49547720.mp4?v=0",
      avatar:
        "https://ronin.pk/cdn/shop/files/avatar-hasan-raheem.jpg?crop=center&height=60&v=1750229722&width=60",
    },
    {
      name: "Asim Azhar",
      tag: "#singer",
      video:
        "//ronin.pk/cdn/shop/videos/c/vp/e35186a019a24801bd687df6f573b33d/e35186a019a24801bd687df6f573b33d.HD-1080p-7.2Mbps-49547716.mp4?v=0",
      avatar:
        "https://ronin.pk/cdn/shop/files/avatar-asim.jpg?crop=center&height=60&v=1750165933&width=60",
    },
  ];
  const blogs = [
    {
      title:
        "Ronin Unveils 5 Software Based Earbuds: One Vision, Five Distinct Experiences",
      desc: "Ronin has never believed in doing what everyone else does.",
      image: "https://ronin.pk/cdn/shop/articles/5th_Article.webp?v=1773827769&width=450",
    },
    {
      title:
        "Pakistan’s First Software-Based Earbuds Have Arrived – And They're Redefining Sound",
      desc: "Something big just dropped in the world of audio.",
      image: "https://ronin.pk/cdn/shop/articles/1st_Article.webp?v=1773474407&width=450",
    },
    {
      title:
        "Iqra Aziz, Hamza Sohail & Kinza Hashmi Join Ronin as Official Brand Ambassadors",
      desc: "In every era, there are names that define the mindset.",
      image:
        "https://ronin.pk/cdn/shop/articles/Iqra-Aziz_-Hamza-Sohail-_-Kinza-Hashmi-Join-Ronin-as-Official-Brand-Ambassadors_jpg.jpg?v=1773825810&width=450",
    },
  ];
  const logoStrip = [
    "https://ronin.pk/cdn/shop/files/medium.svg?height=35&v=1738526160",
    "https://ronin.pk/cdn/shop/files/img4.png?height=35&v=1738519202",
    "https://ronin.pk/cdn/shop/files/logo_32ebebac-6ec9-4039-9b88-df0c0cbc1853.png?height=35&v=1761636652",
    "https://ronin.pk/cdn/shop/files/pro_pak.webp?height=35&v=1761636976",
  ];
  return (
    <div className="bg-white text-[#121212]">
      <Header />
      <main>
        <section className="mx-auto max-w-[2000px]">
          <div className="ronin-scroll flex snap-x snap-mandatory overflow-x-auto">
            {heroSlides.map((src) => (
              <img key={src} alt="Ronin banner" className="h-auto min-w-full snap-start object-cover" src={src} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold uppercase leading-none tracking-tight md:text-5xl">
              New <span className="text-[#244d87]">Arrivals</span>
            </h2>
            <a className="text-lg font-bold hover:underline" href="/collections/new-arrivals">View All</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((item) => (
              <article key={item.title} className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                <img alt={item.title} className="aspect-square w-full rounded-lg object-cover" src={item.image} />
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 min-h-10 text-sm text-black/70">{item.subtitle}</p>
                <p className="mt-2 text-sm">
                  <span className="mr-2 text-black/45 line-through">{item.compareAt}</span>
                  <span className="font-bold">{item.price}</span>
                </p>
                <a className="mt-3 inline-block rounded-full bg-black px-5 py-2 text-sm font-semibold text-white" href="/">
                  Buy Now
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-8">
          <div className="grid grid-cols-4 gap-x-4 gap-y-6 max-w-[900px] mx-auto">
            {uspItems.map((usp) => (
              <div
                key={usp.title}
                className="flex flex-col items-center justify-center text-center"
              >
                <img alt={usp.title} className="h-20 w-20 object-contain" src={usp.icon} />
                <h4 className="mt-2 text-sm font-bold">{usp.title}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-8">
          <h2 className="mb-5 text-3xl font-extrabold uppercase leading-none tracking-tight md:text-5xl">
            Meet <span className="text-[#244d87]">Generation Ronin</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {ambassadors.map((ambassador) => (
              <article key={ambassador.name} className="relative overflow-hidden rounded-2xl bg-black text-white">
                <video autoPlay loop muted playsInline className="h-[420px] w-full object-cover" src={ambassador.video} />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent p-4">
                  <div className="flex items-center gap-3">
                    <img alt={ambassador.name} className="h-10 w-10 rounded-full" src={ambassador.avatar} />
                    <div>
                      <h3 className="font-bold">{ambassador.name}</h3>
                      <p className="text-sm text-white/85">{ambassador.tag}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold uppercase leading-none tracking-tight md:text-5xl">
              Latest <span className="text-[#244d87]">News</span>
            </h2>
            <a className="text-lg font-bold hover:underline" href="https://ronin.pk/blogs/lastest-news">View All</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {blogs.map((blog) => (
              <article key={blog.title} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <img alt={blog.title} className="h-52 w-full object-cover" src={blog.image} />
                <div className="p-4">
                  <h3 className="line-clamp-2 font-bold">{blog.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-black/70">{blog.desc}</p>
                  <a className="mt-3 inline-block text-sm font-bold text-[#244d87]" href="/">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-10">
          <h2 className="mb-6 text-center text-3xl font-extrabold uppercase leading-none tracking-tight md:text-5xl">
            Featured <span className="text-[#244d87]">Globally</span>
          </h2>
          <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-4">
            {logoStrip.map((logo) => (
              <img key={logo} alt="Featured publication" className="mx-auto h-8 w-auto object-contain" src={logo} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
