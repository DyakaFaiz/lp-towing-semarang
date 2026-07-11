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
      motor: "BMW R 1250 GS Adventure",
      lokasi: "Tol Bawen - Semarang",
      layanan: "Emergency Storing 24 Jam",
      masalah: "Kendala kelistrikan saat touring jauh, motor mati total di bahu jalan tol.",
      solusi: "Evakuasi cepat menggunakan winch elektrik 4 Ton ke atas flatbed. Pengikatan 4 titik strap khusus di area crash bar depan dan sub-frame belakang.",
      imageAlt: "Evakuasi BMW GS di Tol Semarang",
      imgUrl: "/images/portfolio/bmw-gs.png"
    },
    {
      id: 2,
      motor: "Yamaha TMAX DX",
      lokasi: "Tanjakan Gombel, Semarang",
      layanan: "Storing Dalam Kota",
      masalah: "V-Belt putus saat melibas tanjakan ekstrem, motor tertahan di sudut curam.",
      solusi: "Penarikan presisi dengan winch hidrolik. Stabilitas roda depan dijaga ketat agar bodi matic besar ini tidak terbentur saat naik ke truk.",
      imageAlt: "Towing Yamaha TMAX mogok di Semarang",
      imgUrl: "/images/portfolio/yamaha-tmax.png"
    },
    {
      id: 3,
      motor: "Konvoi Moge Sport",
      lokasi: "Bandungan - Semarang",
      layanan: "Backup Touring Luar Kota",
      masalah: "Truk siaga untuk backup peserta touring jarak jauh melintasi jalur pegunungan.",
      solusi: "Armada kami standby 24 jam dengan kelengkapan tool kit darurat dan pengikat heavy-duty yang siap mengakomodir moge tipe apapun secara instan.",
      imageAlt: "Backup armada towing touring moge",
      imgUrl: "/images/portfolio/kembar-3.png"
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
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="/images/bg-hero.png"
            alt="Towing Moge Harley Davidson Semarang Malam Hari"
            className="w-full h-full object-cover object-center opacity-20 grayscale mix-blend-luminosity scale-100 md:scale-150"
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
            Premium Armada Hydraulic Hilux Rangga Diesel A/T. Evakuasi dan pengiriman motor VIP di Semarang.<br className="hidden md:block"/> Official Storing Car <a href="https://instagram.com/bog.harleydavidson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-300 transition-colors">@bog.harleydavidson</a>.
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

      {/* WHY CHOOSE US (Seamless Floating) */}
      <section className="relative z-20 -mt-20 md:-mt-32 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group flex flex-col items-center text-center p-8 md:p-10 rounded-t-[2.5rem] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent border-t border-white/[0.05] transition-all duration-700 hover:-translate-y-4 hover:from-white/[0.05]">
              <div className="p-4 rounded-full bg-white/[0.03] mb-8 transition-transform duration-700 group-hover:scale-110 group-hover:bg-white/[0.08]">
                <Shield className="w-8 h-8 text-neutral-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-light mb-4 text-white tracking-tight">Soft-Tie Anti Gores</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">
                Strap khusus tanpa material logam yang bersentuhan dengan bodi motor.
              </p>
            </div>
            <div className="group flex flex-col items-center text-center p-8 md:p-10 rounded-t-[2.5rem] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent border-t border-white/[0.05] transition-all duration-700 hover:-translate-y-4 hover:from-white/[0.05]">
              <div className="p-4 rounded-full bg-white/[0.03] mb-8 transition-transform duration-700 group-hover:scale-110 group-hover:bg-white/[0.08]">
                <Truck className="w-8 h-8 text-neutral-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-light mb-4 text-white tracking-tight">Flatbed Hidrolik</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">
                Lantai turun rata aspal. Menjamin moge ceper aman dan tidak gasruk.
              </p>
            </div>
            <div className="group flex flex-col items-center text-center p-8 md:p-10 rounded-t-[2.5rem] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent border-t border-white/[0.05] transition-all duration-700 hover:-translate-y-4 hover:from-white/[0.05]">
              <div className="p-4 rounded-full bg-white/[0.03] mb-8 transition-transform duration-700 group-hover:scale-110 group-hover:bg-white/[0.08]">
                <ShieldCheck className="w-8 h-8 text-neutral-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-light mb-4 text-white tracking-tight">Jaminan Asuransi</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">
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
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-center">
                
                {/* Image Container */}
                <div className={`w-full md:w-[75%] relative z-0 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="aspect-square md:aspect-[16/9] rounded-[2rem] overflow-hidden relative group shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                    <img
                      src={item.imgUrl}
                      alt={item.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-1000 group-hover:opacity-40"></div>
                  </div>
                </div>

                {/* Floating Ultra-Premium Text Card */}
                <div className={`w-[92%] md:w-[40%] mt-[-100px] md:mt-0 relative z-10 p-8 sm:p-10 md:p-14 rounded-3xl bg-[#0a0a0a]/85 backdrop-blur-3xl border border-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.9)] ${idx % 2 === 1 ? 'md:-mr-[15%] md:order-1' : 'md:-ml-[15%] md:order-2'}`}>
                  <div className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-light flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-white/80">{item.layanan}</span>
                    <span className="text-white/20">/</span>
                    <span>{item.lokasi}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl text-white font-light tracking-tight mb-10 leading-[1.1]">{item.motor}</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <span className="block text-white/40 uppercase tracking-[0.15em] text-[9px] mb-3 font-medium">The Challenge</span>
                      <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">{item.masalah}</p>
                    </div>
                    <div>
                      <span className="block text-white/40 uppercase tracking-[0.15em] text-[9px] mb-3 font-medium">Our Execution</span>
                      <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">{item.solusi}</p>
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
                  "Premium Armada Hydraulic Hilux Rangga Diesel A/T",
                  "Sistem hidrolik pengereman ganda",
                  "Lantai plat bordes anti slip",
                  "Winch berkapasitas 4 Ton",
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
      <footer className="py-12 text-center text-neutral-700 font-light text-xs space-y-4">
        <div className="flex justify-center gap-4">
          <a href="https://www.instagram.com/towing_semarang/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram (@towing_semarang)</a>
        </div>
        <p>© {new Date().getFullYear()} Storing Towing Semarang. Spesialis Moge.</p>
      </footer>
    </main>
  );
}
