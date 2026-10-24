import type { Metadata } from "next";
import Link from "next/link";
import ContactEnquiryForm from "./ContactEnquiryForm";
import "./contact-page.css";

export const metadata: Metadata = {
  title: "Contact Mountain Bike Morocco | Plan Your Cycling Tour",
  description:
    "Contact Mountain Bike Morocco to discuss MTB, E-MTB, gravel and road cycling tours. Share your dates, group size, riding experience and preferred destinations to start planning a Morocco cycling holiday.",
};

const enquiryTypes = [
  {
    number: "01",
    title: "Plan a cycling holiday",
    text: "Tell us where you want to ride, how long you have and the kind of cycling you enjoy. We can discuss suitable routes, trip length and the practical details that need to be confirmed.",
  },
  {
    number: "02",
    title: "Ask about a tour",
    text: "Have a particular MTB, E-MTB, gravel or road tour in mind? Include its name or the page you viewed so your question can be connected to the right itinerary.",
  },
  {
    number: "03",
    title: "Private groups & events",
    text: "For clubs, friends, families and company groups, share the approximate number of riders, experience levels, preferred dates and any requirements that may affect the plan.",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us your idea",
    text: "Send your preferred dates, cycling style, group size, destinations and a short outline of your riding experience.",
  },
  {
    number: "02",
    title: "Discuss the practical details",
    text: "Route options should be considered against season, surface, elevation, daily distance, transfers, equipment and the support needed for your group.",
  },
  {
    number: "03",
    title: "Review the proposal before confirming",
    text: "Before booking, ask for the itinerary, inclusions, exclusions, price, payment terms and cancellation arrangements in writing.",
  },
];

const cyclingStyles = [
  {
    title: "Mountain Bike Tours",
    description:
      "For riders looking for mountain tracks, rocky descents, village routes and singletrack where the conditions and skill level are suitable.",
    href: "/cycling-trips/mtb",
  },
  {
    title: "E-MTB Tours",
    description:
      "Electric-assisted mountain biking with route planning that considers climbing, battery range, charging and mechanical support.",
    href: "/cycling-trips/e-mtb",
  },
  {
    title: "Gravel Cycling",
    description:
      "Rural roads and unpaved tracks, with terrain, tyre setup, resupply points and daily distances taken into account.",
    href: "/cycling-trips/gravel",
  },
  {
    title: "Road Cycling",
    description:
      "Paved routes, mountain climbs and multi-day stages planned around your pace, elevation goals and preferred distance.",
    href: "/cycling-trips/road",
  },
];

const faqs = [
  {
    question: "What should I include in my first enquiry?",
    answer:
      "If you know them, include your travel dates, group size, preferred cycling style, riding experience, desired destinations and approximate trip length. Mention any bike requirements, accommodation preferences or questions that will help shape the discussion.",
  },
  {
    question: "Do I need to know which tour I want before contacting you?",
    answer:
      "No. You can describe the kind of cycling holiday you have in mind and ask for help comparing MTB, E-MTB, gravel and road options. Route suitability depends on your dates, experience, goals and the conditions expected for the proposed region.",
  },
  {
    question: "Can you help plan a private group trip?",
    answer:
      "You can enquire about a private trip for friends, families or cycling groups. Share the number of riders, date range, ability levels and preferred experience. Availability, route choices and the services included must be confirmed for your specific request.",
  },
  {
    question: "Does sending an enquiry confirm my booking?",
    answer:
      "No. An enquiry is a request to discuss options and availability. Treat a trip as booked only after the itinerary, price, inclusions, payment terms and booking confirmation have been agreed directly.",
  },
  {
    question: "Can I ask about bike hire or bring my own bike?",
    answer:
      "Yes—mention your bike type and any equipment needs in the message. Bike availability, sizes, luggage handling, transfers and mechanical support should be checked against the chosen itinerary before travel.",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="cycling-listing contact-page" id="top">
        <section className="cl-hero" aria-labelledby="contact-hero-title">
          <img
            className="cl-hero__image"
            src="/images/mountain-bike-morocco-hero.jpg"
            alt="Cycling through Morocco's rugged Atlas Mountain landscape"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">CONTACT · TRIP PLANNING · MOROCCO</p>
            <h1 id="contact-hero-title">Let’s plan your Morocco ride.</h1>
            <p className="cl-hero__intro">
              Tell us what you want from your cycling holiday—from an Atlas
              Mountain MTB escape to an E-MTB adventure, a gravel expedition,
              a road cycling trip or a private group journey. Start with your
              dates and ideas, and we can discuss the options that fit.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="#enquiry-form">
                Start Your Enquiry
              </Link>
              <Link className="cl-button cl-button--outline" href="#cycling-styles">
                Explore Cycling Styles
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>MTB · E-MTB · GRAVEL · ROAD</span>
              <span>PRIVATE TRIPS & GROUPS</span>
              <span>PERSONALISED TRIP PLANNING</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap" aria-labelledby="contact-intro-title">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">START WITH A CONVERSATION</p>
            <h2 id="contact-intro-title">A great cycling trip begins with the right questions.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Morocco offers many ways to explore on two wheels. You might want
              technical trails in the High Atlas, an electric-assisted ride
              beyond Marrakech, gravel routes between rural communities, or
              longer road stages across changing landscapes. Your experience,
              preferred pace and available time all help determine which plan
              makes sense.
            </p>
            <p>
              Use the enquiry form to share what you already know. You do not
              need a finished itinerary. Even a rough idea of the dates, group
              size, preferred terrain and places you hope to see is a useful
              starting point. Route options, services, costs and availability
              should be reviewed and confirmed before you commit.
            </p>
          </div>
        </section>

        <section className="contact-page__channels cl-wrap" aria-labelledby="contact-options-title">
          <div className="contact-page__section-heading">
            <p className="cl-eyebrow cl-eyebrow--dark">HOW WE CAN HELP</p>
            <h2 id="contact-options-title">What would you like to plan?</h2>
            <p>Choose the closest starting point, then use the form below to give us the details.</p>
          </div>
          <div className="contact-page__channel-grid">
            {enquiryTypes.map((item) => (
              <article className="contact-page__channel-card" key={item.number}>
                <span className="contact-page__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href="#enquiry-form" className="cl-text-link">
                  Tell us about it <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-page__direct cl-wrap" aria-labelledby="contact-direct-title">
          <div className="contact-page__section-heading">
            <p className="cl-eyebrow cl-eyebrow--dark">CONTACT US DIRECTLY</p>
            <h2 id="contact-direct-title">Prefer WhatsApp, phone or email?</h2>
            <p>Choose the easiest way to reach Mountain Bike Morocco. Tell us what kind of ride you have in mind, and include your dates or group details when possible.</p>
          </div>
          <div className="contact-page__direct-grid">
            <article className="contact-page__direct-card">
              <span className="contact-page__direct-label">QUICK RESPONSE</span>
              <h3>WhatsApp</h3>
              <p>Message us about a tour, ask a question or start planning your Morocco cycling holiday.</p>
              <a className="contact-page__direct-link" href="https://wa.me/212707222426?text=Hello%20Mountain%20Bike%20Morocco%2C%20I%20would%20like%20to%20plan%20a%20cycling%20trip%20in%20Morocco." target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a>
              <p className="contact-page__direct-detail">+212 707 22 24 26</p>
            </article>
            <article className="contact-page__direct-card">
              <span className="contact-page__direct-label">PHONE CONTACT</span>
              <h3>Call us</h3>
              <p>Prefer speaking directly? Call us to discuss your cycling style, preferred dates and questions about your trip.</p>
              <a className="contact-page__direct-link" href="tel:+212707222426">+212 707 22 24 26 <span aria-hidden="true">↗</span></a>
              <p className="contact-page__direct-detail">International format: +212 707 22 24 26</p>
            </article>
            <article className="contact-page__direct-card">
              <span className="contact-page__direct-label">DETAILED ENQUIRIES</span>
              <h3>Email</h3>
              <p>Send your dates, group size, cycling preferences and any questions you would like to discuss before booking.</p>
              <a className="contact-page__direct-link" href="mailto:mountainbikemorocco@gmail.com?subject=Mountain%20Bike%20Morocco%20trip%20enquiry">mountainbikemorocco@gmail.com <span aria-hidden="true">↗</span></a>
              <p className="contact-page__direct-detail">We recommend including your preferred tour or destination.</p>
            </article>
          </div>
        </section>

        <section className="contact-page__form-section" id="enquiry-form" aria-labelledby="enquiry-heading">
          <div className="cl-wrap contact-page__form-layout">
            <div className="contact-page__form-copy">
              <p className="cl-eyebrow cl-eyebrow--dark">YOUR TRIP, YOUR WAY</p>
              <h2 id="enquiry-heading">Tell us about your ride.</h2>
              <p>
                Add as much detail as you can. Your notes help make the first
                conversation more useful and highlight practical questions to
                discuss before a route or booking is confirmed.
              </p>
              <div className="contact-page__checklist">
                <h3>Helpful details to include</h3>
                <ul>
                  <li>Travel dates or a flexible date range</li>
                  <li>Number of riders and their general experience</li>
                  <li>Preferred cycling style and destinations</li>
                  <li>Ideal daily distance, trip length or must-see places</li>
                  <li>Bike hire, accommodation, transfers or support needs</li>
                </ul>
              </div>
              <p className="contact-page__note">
                Sending an enquiry does not confirm a departure or reservation.
                Please review the proposed itinerary, inclusions, price and
                booking conditions before confirming a trip.
              </p>
            </div>
            <div className="contact-page__form-panel">
              <ContactEnquiryForm />
            </div>
          </div>
        </section>

        <section className="contact-page__steps cl-wrap" aria-labelledby="planning-steps-title">
          <div className="contact-page__section-heading">
            <p className="cl-eyebrow cl-eyebrow--dark">FROM IDEA TO ITINERARY</p>
            <h2 id="planning-steps-title">How trip planning works</h2>
            <p>Good preparation helps make the route, support and expectations clearer for everyone.</p>
          </div>
          <div className="contact-page__steps-grid">
            {planningSteps.map((step) => (
              <article className="contact-page__step-card" key={step.number}>
                <span className="contact-page__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-page__styles" id="cycling-styles" aria-labelledby="cycling-styles-title">
          <div className="cl-wrap">
            <div className="contact-page__section-heading">
              <p className="cl-eyebrow">CHOOSE YOUR WAY TO RIDE</p>
              <h2 id="cycling-styles-title">Four ways to explore Morocco by bike.</h2>
              <p>Explore the existing tour pages for more information, then include the tour name in your enquiry if something catches your eye.</p>
            </div>
            <div className="contact-page__style-grid">
              {cyclingStyles.map((style) => (
                <article className="contact-page__style-card" key={style.title}>
                  <h3>{style.title}</h3>
                  <p>{style.description}</p>
                  <Link href={style.href} className="cl-text-link">
                    Explore tours <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-faq" aria-labelledby="contact-faq-title">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">BEFORE YOU WRITE</p>
              <h2 id="contact-faq-title">Contact &amp; trip planning FAQs</h2>
              <p>
                A few quick answers to help you prepare a useful enquiry and
                understand what happens before a trip is confirmed.
              </p>
              <Link className="cl-button cl-button--gold" href="#enquiry-form">
                Ask About Your Trip
              </Link>
            </div>
            <div className="cl-faq-list">
              {faqs.map((faq, index) => (
                <details className="cl-faq-item" key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-final-cta">
          <img
            src="/images/group-cycling-atlas-mountains.jpg"
            alt="Cyclists sharing a guided ride in the Atlas Mountains"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT ADVENTURE STARTS HERE</p>
            <h2>Bring us the idea. Let’s talk through the ride.</h2>
            <p>
              Whether you are travelling solo, with friends, as a family or
              with a cycling club, share your priorities and questions. Start
              planning around your dates, riding style and the parts of Morocco
              you would most like to discover.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="#enquiry-form">
                Start Your Enquiry
              </Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">
                Browse All Cycling Tours
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer cycling-listing__footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" />
              <span>MOUNTAIN BIKE <em>MOROCCO</em></span>
            </Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/cycling-trips">All Cycling Tours</Link>
            <Link href="/cycling-trips/mtb">Mountain Bike Tours</Link>
            <Link href="/cycling-trips/e-mtb">E-MTB Tours</Link>
            <Link href="/cycling-trips/gravel">Gravel Cycling</Link>
            <Link href="/cycling-trips/road">Road Cycling</Link>
          </div>
          <div>
            <h3>Destinations</h3>
            <Link href="/destinations/atlas-mountains">Atlas Mountains</Link>
            <Link href="/destinations/imlil">Imlil Valley</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/anti-atlas">Anti-Atlas</Link>
            <Link href="/destinations/sahara-desert">Sahara Desert</Link>
          </div>
          <div>
            <h3>Let's Plan</h3>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="#enquiry-form">Plan Your Trip</Link>
            <a href="https://wa.me/212707222426" target="_blank" rel="noreferrer">WhatsApp: +212 707 22 24 26</a>
            <a href="tel:+212707222426">Call: +212 707 22 24 26</a>
            <a href="mailto:mountainbikemorocco@gmail.com">mountainbikemorocco@gmail.com</a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}
