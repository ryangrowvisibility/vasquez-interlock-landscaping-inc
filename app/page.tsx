import Reveal from "./Reveal";

const PHONE = "(647) 706-2321";
const TEL = "tel:+16477062321";
const SMS = "sms:+16477062321";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Vasquez%20Interlock%20%26%20Landscaping%20Inc&query_place_id=ChIJg8DNvQm2IS4RNkQMKyZKUJA";
const INSTAGRAM = "https://www.instagram.com/vasquez.interlock.landscaping";

type IconProps = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };

function Phone({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>;
}
function Message({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
}
function Star({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" /></svg>;
}
function Stars({ className = "h-5 w-5" }: IconProps) {
  return <span className="flex text-star" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className={className} />)}</span>;
}
function Check({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M20 6 9 17l-5-5" /></svg>;
}
function Clock({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
}
function Pin({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function Grid({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><rect x="3" y="3" width="8" height="5" rx="1" /><rect x="13" y="3" width="8" height="5" rx="1" /><rect x="3" y="10" width="5" height="5" rx="1" /><rect x="10" y="10" width="11" height="5" rx="1" /><rect x="3" y="17" width="11" height="4" rx="1" /><rect x="16" y="17" width="5" height="4" rx="1" /></svg>;
}
function Stone({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M4 14 7 6l7-2 6 5-2 9-9 2z" /><path d="M7 6l3 7 10-4M10 13l-1 7" /></svg>;
}
function Path({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M8 3c-2 6-2 12 0 18M16 3c2 6 2 12 0 18M7 8h10M6.5 13h11M7 18h10" /></svg>;
}
function Leaf({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path d="M2 21c0-3 1.9-5.4 5.1-6" /></svg>;
}
function Box({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M3 10h18l-2 10H5z" /><path d="M8 10c0-3 1.5-6 4-6s4 3 4 6M12 4v6" /></svg>;
}
function Home({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>;
}
function Shield({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
}
function Spark({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></svg>;
}
function Broom({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="m19 3-7 7M9 9l6 6M4 20c3 0 6-1 8-3l-6-6c-2 2-3 5-2 9z" /></svg>;
}
function Instagram({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
}
function Arrow({ className = "h-4 w-4" }: IconProps) {
  return <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

const services = [
  {
    icon: Grid,
    title: "Interlock Driveways & Walkways",
    text: "Custom interlock driveways, walkways, front porches and borders, laid on a properly compacted base so they stay flat and tight for years. We handle everything from standard pavers to extremely large-format stones that most crews avoid.",
    featured: true,
  },
  {
    icon: Stone,
    title: "Flagstone & Stone Slabs",
    text: "Tired of a heaving brick walkway? We replace old brick with natural stone slabs and flagstone for a cleaner, more solid look that suits the house. One customer called the finished result AAA.",
  },
  {
    icon: Path,
    title: "Stone Patios",
    text: "Patio areas sized for how you actually use the yard, from a single seating spot to two-patio backyard builds with a walkway tying them together. You see design options before any digging starts.",
  },
  {
    icon: Leaf,
    title: "Sodding",
    text: "Fresh sod for front and back yards, usually as the finishing step of a larger transformation. We prep and level the ground first so the new lawn takes properly and the edges meet your hardscape cleanly.",
  },
  {
    icon: Box,
    title: "Planter Boxes & Borders",
    text: "Planter boxes, garden borders and driveway borders that make a project look finished. Small details like these are where Julio's design ideas tend to stand out.",
  },
  {
    icon: Home,
    title: "Full Backyard Makeovers",
    text: "Inherited a yard full of pebbles, old wood liners and overgrown bushes? We redesign the whole space: clear it out, plan the layout with you, then build the patios, paths, planters and lawn. Free quotes, with design options up front.",
  },
];

const reviews = [
  {
    name: "Mark G.",
    job: "Backyard and front yard transformation",
    text: "We inherited a backyard full of pebbles, old wood liners and overgrown bushes. Julio reimagined it with a stone patio area and new sod front and back. He showed up when he said he would and kept us informed at every step. My wife's morning routine is moving to the backyard.",
  },
  {
    name: "Carly F.",
    job: "Two patios, walkway, planter box and border",
    text: "Julio installed two stone patios, a front walkway, a planter box and a driveway border, and had great ideas along the way. Always reliable and always available when we had a question.",
  },
  {
    name: "Dana H.",
    job: "Large paver installation",
    text: "The team laid extremely large pavers and really considered the look I wanted, offering design options before starting. They even carried the extra stones into the garage for storage.",
  },
  {
    name: "Russell K.",
    job: "Brick walkway replaced with stone slabs",
    text: "They replaced our brick walkways with stone slabs and the result is AAA. Julio came back to finish every detail. A humble, personable owner with a real work ethic.",
  },
  {
    name: "Jason K.",
    job: "Driveway, walkway and front porch",
    text: "Extremely happy with our new driveway, walkway and front porch. I'm confident that if anything ever came up, they would fully stand behind the work.",
  },
  {
    name: "Lisa",
    job: "Backyard makeover",
    text: "We researched carefully before choosing Vasquez. Julio came prepared, had fantastic creative ideas and stayed right on schedule.",
  },
];

const steps = [
  { title: "Call or text Julio", text: "Tell him what you have in mind, even if it is just a photo of the space and a rough idea. Calls and texts go straight to the owner." },
  { title: "Free on-site quote", text: "Julio comes out, measures, talks through how you use the yard and gives you a clear price. No charge, no pressure." },
  { title: "Pick your design", text: "You get design options up front: paver style, stone, borders and layout, so you know exactly what is being built before work starts." },
  { title: "We build it", text: "The crew shows up when promised, keeps you updated through the job and works to the agreed schedule and budget." },
  { title: "Clean finish and walk-through", text: "We clean the site, store any extra stones for you and walk the finished work together. If something needs a touch-up, Julio comes back." },
];

const faqs = [
  { q: "Are quotes really free?", a: "Yes. Julio visits, measures and gives you a written price for the work at no cost. Design options are part of that conversation, so you can compare a couple of approaches before deciding." },
  { q: "Which areas do you serve?", a: "Kitchener, Waterloo and Cambridge, plus the surrounding communities in Waterloo Region. If you are just outside those cities, call or text and ask; nearby jobs are often fine." },
  { q: "Can you install really large pavers or slabs?", a: "Yes. Large-format pavers and natural stone slabs are something customers specifically hire us for. They need careful base prep and extra hands to set, and we plan for both." },
  { q: "Do you do whole-yard projects or only small jobs?", a: "Both. We do single walkways and driveway borders, and we also do complete backyard makeovers with multiple patios, walkways, planter boxes and new sod front and back." },
  { q: "Will you keep me updated during the job?", a: "That is one of the things customers mention most. Julio shows up when he says he will and keeps you informed at every step, from start date to finishing touches." },
  { q: "What happens if something needs fixing after the job?", a: "Call Julio. Customers say they feel fully supported after the work is done, and he has come back to finish details to their satisfaction." },
  { q: "What is the best way to reach you?", a: `Call or text ${PHONE}. You can also message us on Instagram, where we post recent interlock and patio projects.` },
];

const areas = ["Kitchener", "Waterloo", "Cambridge", "Waterloo Region", "Surrounding areas"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Vasquez Interlock & Landscaping Inc",
  telephone: "+1-647-706-2321",
  url: "https://vasquez-interlock-landscaping-inc.growlocalvisibility.com",
  description: "Custom interlock, flagstone, stone patios, sodding and full backyard makeovers in Kitchener, Waterloo and Cambridge, Ontario.",
  areaServed: ["Kitchener, ON", "Waterloo, ON", "Cambridge, ON"],
  founder: { "@type": "Person", name: "Julio" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "13" },
  sameAs: [INSTAGRAM],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping services",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
  },
};

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a href={TEL} className={`btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 font-semibold text-white shadow-sm hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cta ${className}`}>
      <Phone /> Call {PHONE}
    </a>
  );
}

export default function Home_() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Pin className="h-4 w-4" /> Serving Kitchener, Waterloo &amp; Cambridge</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Closes 7:30 p.m. &middot; Free quotes</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Vasquez Interlock & Landscaping home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Grid className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block font-head text-lg font-extrabold tracking-tight text-ink">Vasquez</span>
              <span className="block text-xs font-semibold text-muted">Interlock &amp; Landscaping</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[0.95rem] font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Julio</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-semibold text-brand-deep hover:text-brand md:inline">{PHONE}</a>
            <a href={TEL} className="btn-press hidden min-h-12 items-center gap-2 rounded-lg bg-cta px-5 font-semibold text-white hover:bg-cta-hover md:inline-flex">Free Quote</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn-press grid h-11 w-11 place-items-center rounded-lg bg-cta text-white md:hidden"><Phone /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white to-tint">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-deep">
                <Check className="h-4 w-4" /> Owner-operated: ask for Julio
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] text-ink">
                Interlock, Flagstone &amp; Patios in Kitchener, Waterloo and Cambridge
              </h1>
              <p className="mt-5 max-w-[60ch] text-lg text-muted md:text-xl">
                Driveways, walkways, stone patios and full backyard makeovers, built by a crew that shows up when it says it will. Owner Julio brings design ideas to your free quote and keeps you posted until the last stone is set.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <a href={SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand px-6 py-3 font-semibold text-brand-deep hover:bg-brand-soft">
                  <Message /> Text Julio
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-ink">
                <span className="flex items-center gap-2"><Stars className="h-4 w-4" /><strong>5.0</strong></span>
                <span className="text-line" aria-hidden>|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-line underline-offset-4 hover:text-brand">13 Google reviews</a>
                <span className="text-line" aria-hidden>|</span>
                <span>Free quotes</span>
                <span className="text-line" aria-hidden>|</span>
                <span>Kitchener &middot; Waterloo &middot; Cambridge</span>
              </div>
            </div>

            <Reveal>
              <figure className="rounded-2xl border border-line bg-white p-7 shadow-[0_18px_40px_-24px_oklch(0.33_0.085_150/0.45)]">
                <Stars />
                <blockquote className="mt-4 text-lg leading-relaxed text-ink">
                  &ldquo;Julio reimagined our backyard with a patio stone area and new sod front and back. He showed up when he said he would and kept us informed every step. My wife&apos;s morning routine is moving to the backyard.&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
                  <span><strong className="text-ink">Mark G.</strong><span className="block text-muted">Backyard + front yard transformation</span></span>
                  <span className="rounded-md bg-tint px-2 py-1 font-semibold text-muted">Google review</span>
                </figcaption>
              </figure>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-brand-deep p-4 text-white">
                  <p className="font-head text-2xl font-extrabold">5.0 / 5</p>
                  <p className="text-white/80">13 Google reviews, plus 5/5 on Facebook</p>
                </div>
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="font-head text-2xl font-extrabold text-brand-deep">Free</p>
                  <p className="text-muted">On-site quotes with design options</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners trust us" className="border-y border-line bg-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: Star, t: "5.0 on Google", d: "Every one of 13 reviews" },
              { icon: Clock, t: "On time, on budget", d: "Shows up when promised" },
              { icon: Spark, t: "Design ideas included", d: "Options before we dig" },
              { icon: Broom, t: "Clean job sites", d: "Swept and tidy at the end" },
            ].map(({ icon: I, t, d }) => (
              <li key={t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-deep"><I className="h-5 w-5" /></span>
                <span><strong className="block text-ink">{t}</strong><span className="text-sm text-muted">{d}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-end">
              <div>
                <p className="font-semibold text-brand">Our services</p>
                <h2 className="mt-2 text-3xl text-ink md:text-[2.6rem]">Interlock and landscaping, start to finish</h2>
              </div>
              <p className="text-muted md:pb-1">
                Most of our work is hardscape: the driveways, walkways and patios you walk on every day. We also handle the sod, planters and borders that finish the job, so you deal with one crew from the first sketch to the final clean-up.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: I, title, text, featured }, i) => (
                <Reveal key={title} className={featured ? "lg:col-span-2" : ""}>
                  <article className={`group flex h-full flex-col rounded-2xl border bg-white p-7 transition-shadow duration-200 hover:shadow-[0_14px_30px_-20px_oklch(0.33_0.085_150/0.5)] ${featured ? "border-brand border-2" : "border-line"}`} style={{ transitionDelay: `${i * 30}ms` }}>
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-deep"><I /></span>
                      {featured && <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">Our specialty</span>}
                    </div>
                    <h3 className="mt-5 text-xl text-ink">{title}</h3>
                    <p className={`mt-3 flex-1 text-muted ${featured ? "max-w-[62ch]" : ""}`}>{text}</p>
                    <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-deep">
                      Call about this <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-semibold text-brand">Customer reviews</p>
                <h2 className="mt-2 text-3xl text-ink md:text-[2.6rem]">Rated 5.0 from 13 Google reviews</h2>
                <p className="mt-3 max-w-[60ch] text-muted">Customers keep coming back to the same things: reliability, communication, creative ideas, attention to detail and a clean site. Several have referred their friends and family.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-press inline-flex min-h-12 shrink-0 items-center gap-2 rounded-lg border-2 border-brand-deep bg-white px-5 font-semibold text-brand-deep hover:bg-brand-soft">
                Read all reviews on Google <Arrow />
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name}>
                  <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                    <Stars className="h-4 w-4" />
                    <blockquote className="mt-4 flex-1 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                      <strong className="text-ink">{r.name}</strong>
                      <span className="block text-muted">{r.job}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">Other happy customers on Google include Daryoush T. (side-yard walkway and patio, praised the speed and price), Heather B. (collaborative, fair prices) and Maroof B. (referred friends and family).</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-semibold text-brand">About us</p>
              <h2 className="mt-2 text-3xl text-ink md:text-[2.6rem]">Meet Julio, the owner who answers the phone</h2>
              <div className="mt-6 space-y-4 text-ink/90">
                <p>
                  Vasquez Interlock &amp; Landscaping Inc. is a Waterloo Region company that specializes in custom interlock, flagstone and full-service landscaping for driveways, walkways, patios and backyards. When you call, you talk to Julio, and Julio is the one who comes out to look at your yard.
                </p>
                <p>
                  Customers describe him as humble, personable and hard-working. He comes prepared, brings real design ideas instead of a one-size-fits-all quote, and tells you what is happening at every stage. The work gets delivered on time and on budget, and the job site is left clean.
                </p>
                <p>
                  We personally reply to our reviews because every one of them is a real neighbour in Kitchener, Waterloo or Cambridge. Many of our jobs now come from those same customers sending their friends and family our way.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-press inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-line px-5 font-semibold text-ink hover:border-brand">
                  <Instagram /> See recent projects
                </a>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: Clock, t: "Shows up when he says he will", d: "Start dates and arrival times you can plan around." },
                { icon: Message, t: "Keeps you informed every step", d: "No guessing about what is happening in your yard." },
                { icon: Spark, t: "Creative design ideas", d: "Options for layout, stone and borders before work starts." },
                { icon: Shield, t: "Stands behind the work", d: "Customers say they feel fully supported after the job." },
              ].map(({ icon: I, t, d }) => (
                <li key={t} className="flex gap-4 rounded-2xl bg-tint p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-brand"><I className="h-5 w-5" /></span>
                  <span><strong className="block text-ink">{t}</strong><span className="text-muted">{d}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <p className="font-semibold text-brand">How it works</p>
            <h2 className="mt-2 max-w-[22ch] text-3xl text-ink md:text-[2.6rem]">From first call to finished patio in five steps</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-5">
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-head text-lg font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.98rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-semibold text-brand">Service area</p>
              <h2 className="mt-2 text-3xl text-ink md:text-[2.6rem]">Working across Waterloo Region</h2>
              <p className="mt-4 text-muted">We build interlock, patios and backyard projects in Kitchener, Waterloo, Cambridge and the communities around them. Not sure if you are in range? Call or text and ask.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-tint px-4 py-2 text-sm font-semibold text-ink"><Pin className="h-4 w-4 text-brand" />{a}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map of the Kitchener, Waterloo and Cambridge service area"
                src="https://maps.google.com/maps?q=Kitchener%2C%20Waterloo%2C%20Cambridge%20Ontario&output=embed"
                className="h-[340px] w-full md:h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-semibold text-brand">FAQ</p>
              <h2 className="mt-2 text-3xl text-ink md:text-[2.6rem]">Questions before you call</h2>
              <p className="mt-4 text-muted">Anything else, just ask Julio at <a href={TEL} className="font-semibold text-brand-deep underline underline-offset-4">{PHONE}</a>.</p>
            </div>
            <div className="divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-semibold text-ink">
                    {f.q}
                    <svg {...base} className="faq-icon h-5 w-5 shrink-0 text-brand"><path d="M12 5v14M5 12h14" /></svg>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <h2 className="text-3xl md:text-4xl">Ready for a new driveway, walkway or patio?</h2>
              <p className="mt-3 max-w-[56ch] text-white/85">Call or text Julio at {PHONE} for a free on-site quote. Hours: closes 7:30 p.m.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton className="text-lg" />
              <a href={SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-6 font-semibold text-white hover:bg-white/10"><Message /> Text us</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-head text-xl font-extrabold text-ink">Vasquez Interlock &amp; Landscaping Inc</p>
            <p className="mt-3 max-w-[48ch] text-muted">Custom interlock, flagstone, stone patios, sodding and backyard makeovers in Kitchener, Waterloo and Cambridge, Ontario.</p>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Vasquez Interlock & Landscaping on Instagram" className="mt-5 inline-grid h-11 w-11 place-items-center rounded-lg border border-line text-ink hover:border-brand hover:text-brand"><Instagram /></a>
          </div>
          <div>
            <p className="font-semibold text-ink">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={TEL} className="flex items-center gap-2 hover:text-brand"><Phone className="h-4 w-4" />{PHONE}</a></li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" />Closes 7:30 p.m.</li>
              <li className="flex items-center gap-2"><Pin className="h-4 w-4" />Kitchener, Waterloo &amp; Cambridge, ON</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Services</p>
            <ul className="mt-3 space-y-2 text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl px-5 text-sm text-muted md:px-6">&copy; {new Date().getFullYear()} Vasquez Interlock &amp; Landscaping Inc. All rights reserved.</p>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn-press flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta font-semibold text-white"><Phone /> Call</a>
        <a href={SMS} className="btn-press flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand font-semibold text-brand-deep"><Message /> Text</a>
      </div>
    </>
  );
}
