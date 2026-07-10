import { ShieldCheck, Truck, Phone, CheckCircle2, MapPin, Wrench, Clock, Shield, CreditCard } from "lucide-react";
import FAQ from "@/components/FAQ";

export default function Home() {
  const faqs = [
    {
      question: "Apakah aman untuk motor Harley Davidson ceper?",
      answer: "Sangat aman. Kami menggunakan truk towing model flatbed hidrolik yang dapat diturunkan hingga rata dengan tanah, sehingga moge ceper tidak akan tersangkut."
    },
    {
      question: "Apakah menggunakan tali pengikat khusus?",
      answer: "Ya, kami menggunakan strap soft-tie khusus yang tebal dan anti-gores, dirancang khusus untuk melindungi cat dan bodi motor premium Anda."
    },
    {
      question: "Apakah layanan tersedia 24 jam?",
      answer: "Betul. Kami melayani panggilan darurat towing moge di area Semarang dan sekitarnya selama 24 jam penuh setiap hari."
    },
    {
      question: "Apakah melayani pengiriman antar kota untuk event touring?",
      answer: "Tentu. Kami melayani pengiriman moge rute antar kota dan provinsi untuk keperluan event touring atau jual-beli."
    }
  ];

  const portfolioTowing = [
    {
      id: 1,
      motor: "Ducati Panigale V4 & BMW S1000RR",
      lokasi: "Peleburan, Semarang",
      layanan: "Storing Premium Antar Kota",
      masalah: "Evakuasi motor sport ceper tanpa menyentuh fairing bawah.",
      solusi: "Menggunakan Hilux Rangga Hydraulic Flatbed. Sudut kemiringan 0 derajat saat menaikkan motor, diikat dengan 4 titik strap khusus tanpa menyentuh bodi.",
      imageAlt: "Towing Ducati Panigale dan BMW S1000RR aman di Semarang",
      imgUrl: "/images/portfolio/ducati-bmw.jpg"
    },
    {
      id: 2,
      motor: "Harley Davidson Ultra Glide",
      lokasi: "Tanjakan Gombel, Semarang",
      layanan: "Emergency Storing 24 Jam",
      masalah: "Motor mogok di area tanjakan curam dengan bobot kendaraan hampir 400kg.",
      solusi: "Evakuasi menggunakan hydraulic deck hidrolik untuk stabilitas penuh, mencegah motor rebah saat proses loading.",
      imageAlt: "Emergency storing Harley Davidson mogok di Gombel Semarang",
      imgUrl: "/images/portfolio/harley-orange.jpg"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-white/20">
      {/* Schema Markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Towing Moge Harley Davidson Semarang Malam Hari"
            className="w-full h-full object-cover object-center opacity-20 grayscale mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 text-neutral-400 text-[10px] sm:text-xs tracking-widest uppercase mb-8 font-light backdrop-blur-sm transition-opacity duration-1000">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white opacity-80"></span>
            </span>
            Siaga Darurat 24 Jam
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight text-white">
            Towing<br/>
            <span className="text-neutral-600 font-normal">Harley & Moge.</span>
          </h1>
          
          <p className="text-base md:text-lg text-neutral-400 mb-10 max-w-lg mx-auto font-light leading-relaxed px-2">
            Evakuasi dan pengiriman motor VIP di Semarang. Presisi, hidrolik flatbed, tanpa goresan.
          </p>
          
          <a
            href="https://wa.me/6285225234870?text=Halo,%20saya%20butuh%20towing%20moge%20sekarang."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-base transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <Phone className="w-4 h-4 transition-transform duration-700 group-hover:rotate-12" />
            Hubungi Sekarang
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US (Ultra Minimalist) */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8">
            <div className="group flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-neutral-600 mb-5 transition-colors duration-700 group-hover:text-white" />
              <h3 className="text-lg font-medium mb-3 text-white">Soft-Tie Anti Gores</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-light px-2">
                Strap khusus tanpa material logam yang bersentuhan dengan bodi motor.
              </p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <Truck className="w-8 h-8 text-neutral-600 mb-5 transition-colors duration-700 group-hover:text-white" />
              <h3 className="text-lg font-medium mb-3 text-white">Flatbed Hidrolik</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-light px-2">
                Lantai turun rata aspal. Menjamin moge ceper aman dan tidak gasruk.
              </p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 text-neutral-600 mb-5 transition-colors duration-700 group-hover:text-white" />
              <h3 className="text-lg font-medium mb-3 text-white">Jaminan Asuransi</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-light px-2">
                Perlindungan penuh selama perjalanan untuk ketenangan pikiran Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-16 text-center">
          <h2 className="text-[10px] md:text-xs font-light tracking-widest uppercase text-neutral-600 mb-3">Portofolio</h2>
          <p className="text-2xl md:text-4xl font-medium text-white tracking-tight">Kinerja di Lapangan</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="space-y-20 md:space-y-32">
            {portfolioTowing.map((item, idx) => (
              <div key={item.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-2xl shadow-black/50">
                  <img
                    src={item.imgUrl}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"></div>
                </div>
                <div className="w-full md:w-1/2 space-y-5">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-light flex flex-wrap gap-2">
                    <span>{item.layanan}</span>
                    <span>&bull;</span>
                    <span>{item.lokasi}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-white font-medium tracking-tight">{item.motor}</h3>
                  
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div>
                      <span className="block text-white/80 font-medium text-sm mb-1">Masalah:</span>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">{item.masalah}</p>
                    </div>
                    <div>
                      <span className="block text-white/80 font-medium text-sm mb-1">Solusi Eksekusi:</span>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">{item.solusi}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET SPECIFICATION & COVERAGE AREA (Merged for flow) */}
      <section className="py-24 md:py-32 relative md:mt-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            
            {/* Specs */}
            <div>
              <h2 className="text-xs font-light tracking-widest uppercase text-neutral-600 mb-6">Spesifikasi Armada</h2>
              <ul className="space-y-6">
                {[
                  "Sistem hidrolik pengereman ganda",
                  "Lantai plat bordes anti slip",
                  "Winch berkapasitas 4 Ton",
                  "Suspensi udara (Air Suspension)",
                  "Titik ikat khusus roda dua"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start md:items-center gap-4 group">
                    <CheckCircle2 className="w-4 h-4 text-neutral-700 transition-colors duration-700 group-hover:text-white shrink-0 mt-1 md:mt-0" />
                    <span className="text-neutral-400 text-sm font-light transition-colors duration-700 group-hover:text-white leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage */}
            <div>
              <h2 className="text-xs font-light tracking-widest uppercase text-neutral-600 mb-6">Jangkauan Layanan</h2>
              <div className="space-y-10">
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-4 h-4 text-neutral-600 transition-colors duration-700 group-hover:text-white" />
                    <h3 className="text-base font-medium text-white">Dalam Kota (Siaga 24 Jam)</h3>
                  </div>
                  <p className="text-neutral-500 text-sm font-light pl-7 leading-relaxed transition-colors duration-700 group-hover:text-neutral-400">
                    Semarang Barat, Timur, Banyumanik, Tembalang, Mijen, dan sekitarnya.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-4 h-4 text-neutral-600 transition-colors duration-700 group-hover:text-white" />
                    <h3 className="text-base font-medium text-white">Ekspedisi Luar Kota</h3>
                  </div>
                  <p className="text-neutral-500 text-sm font-light pl-7 leading-relaxed transition-colors duration-700 group-hover:text-neutral-400">
                    Semarang - Jakarta, Bandung, Surabaya, hingga ke rute Bali.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <h2 className="text-xs font-light tracking-widest uppercase text-neutral-600 mb-10 text-center">Tanya Jawab</h2>

          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-neutral-700 font-light text-xs">
        <p>© {new Date().getFullYear()} Storing Towing Semarang. Spesialis Moge.</p>
      </footer>
    </main>
  );
}
