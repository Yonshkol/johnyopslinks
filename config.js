// ============================================================
//  THIS IS THE ONLY FILE YOU NEED TO EDIT.
//  Keep the quotes and commas exactly where they are.
//
//  It feeds two pages:
//    /           the link hub (bio link)
//    /services   pricing and what you offer
// ============================================================

const CONFIG = {
  // --- Who you are -------------------------------------------------
  name: "Jonathan Shkolnik",
  handle: "@johny_ops",                       // small line under your name. "" to hide.
  tagline: "Fractional COO. I build the operations founders outgrew.",
  avatar: "avatar.jpg",                       // square photo in this folder. "" for no photo.

  // --- Colors ------------------------------------------------------
  theme: {
    accent: "#1d4ed8",        // light mode: buttons, glow, focus rings
    accentDark: "#60a5fa",    // dark mode
  },

  // --- Your links --------------------------------------------------
  // icon: youtube | linkedin | instagram | tiktok | substack | calendar |
  //       briefcase | mail | link   (or an emoji, or an image URL)
  // featured: true  -> big glowing button. Use it on one link.
  links: [
    { label: "Work with me", url: "services.html", icon: "briefcase",
      description: "Builds, retainers, prices", featured: true },

    { label: "Book an advisory call", url: "https://cal.com/jonathan-shkolnik/advisorycall",
      icon: "calendar", description: "45 minutes · $60" },

    { label: "YouTube", url: "https://www.youtube.com/channel/UCvWiOpaG97JzYh_cWKbjB0w",
      icon: "youtube", description: "Operations, unedited" },

    { label: "LinkedIn", url: "https://www.linkedin.com/in/jshkolnik/", icon: "linkedin" },

    { label: "Instagram", url: "https://instagram.com/johny.ops", icon: "instagram" },

    { label: "TikTok", url: "https://www.tiktok.com/@johny_ops", icon: "tiktok" },

    // Put the real PLP address in the line below, then delete the two // marks.
    // { label: "PLP", url: "https://PUT-THE-REAL-URL-HERE.com", icon: "briefcase",
    //   description: "A business I built, start to finish" },
  ],

  // ==================================================================
  //  THE SERVICES PAGE
  //  Everything below controls /services. Prices are plain text, so
  //  write them however you want: "$450", "from $450", "€400".
  // ==================================================================
  services: {
    headline: "You built the business. Now something has to run it.",
    lede: "I'm a fractional COO. I build the automations and the operating rhythm that stop a growing company from running on your memory and your evenings.",

    // The three things you want someone to understand in ten seconds.
    pillars: [
      { title: "Automations, hand-built",
        body: "No template farms. I look at how your business actually runs, then build the thing that removes the repeat work." },
      { title: "Operations, owned",
        body: "Hiring, process, cash rhythm, handoffs. The unglamorous half of running a company." },
      { title: "I've run it, not advised on it",
        body: "I was COO at Portali, a bookkeeping automation company. I know what breaks because I've had to fix it." },
    ],

    // Your offer ladder. featured: true makes one tier the loud one.
    tiers: [
      {
        name: "Advisory call",
        price: "$60",
        unit: "45 minutes",
        blurb: "One problem, looked at properly. You leave with a plan you could hand to someone.",
        features: [
          "45 minutes, live",
          "One specific operational problem",
          "Written recap afterwards",
        ],
        cta: { label: "Book a call", url: "https://cal.com/jonathan-shkolnik/advisorycall" },
      },
      {
        name: "Automation build",
        price: "from $450",
        unit: "one-off",
        blurb: "One workflow, built by hand and handed over. Scoped on the call, delivered in a week.",
        features: [
          "Fixed price, fixed timeline, agreed up front",
          "Built and tested on your actual stack",
          "Documented so your team can run it without me",
          "One round of changes included",
        ],
        cta: { label: "Start with a call", url: "https://cal.com/jonathan-shkolnik/advisorycall" },
      },
      {
        name: "Keep it running",
        price: "$50",
        unit: "per month",
        blurb: "What I built stays built. I watch it, fix it, and adjust it when your process changes.",
        features: [
          "Monitoring and fixes",
          "Small changes as you go",
          "Async questions answered",
          "Cancel any time",
        ],
        note: "Attaches to any build.",
        cta: { label: "Ask about it", url: "https://cal.com/jonathan-shkolnik/advisorycall" },
      },
      {
        name: "Fractional COO",
        price: "from $1,500",
        unit: "per month",
        blurb: "I run your operations. Hiring, process, cash rhythm, and the meetings nobody wants to own.",
        features: [
          "Weekly working sessions",
          "I own outcomes, not slide decks",
          "Direct access, not a ticket queue",
          "A few slots at a time, on purpose",
        ],
        featured: true,
        cta: { label: "See if there's a fit", url: "https://cal.com/jonathan-shkolnik/advisorycall" },
      },
    ],

    // How it actually goes, so nobody has to guess.
    process: [
      { title: "Book the call",
        body: "$60, 45 minutes. Bring the thing that's breaking. We look at it together." },
      { title: "Get a scope",
        body: "Fixed price, fixed timeline, in writing. No open-ended discovery phase." },
      { title: "I build it",
        body: "Hand-built on your stack, documented, yours when it ships. Keep me on for $50/mo or don't." },
    ],

    closing: {
      title: "Not sure which one you need?",
      body: "Most people start with the call. It's $60 and it either turns into work or it doesn't.",
      cta: { label: "Book the advisory call", url: "https://cal.com/jonathan-shkolnik/advisorycall" },
    },

    seo: {
      title: "Work with me — Jonathan Shkolnik",
      description: "Fractional COO. Hand-built automations, operations retainers, and the boring work that keeps a company running. From $60.",
    },
  },

  // --- Email capture -----------------------------------------------
  // Paste the URL your form provider gives you (Formspree, Buttondown, Kit...).
  // Leave "" to hide the signup box completely.
  emailEndpoint: "",
  emailHeading: "Notes on running things properly",
  emailSub: "One email a week. Unsubscribe whenever.",
  emailButton: "Subscribe",

  // --- Dashboard ---------------------------------------------------
  // Google Sheet -> File -> Share -> Publish to web -> CSV. Paste that URL here.
  // Leave "" and /dashboard shows the setup instructions instead.
  dashboard: {
    csv: "",
  },

  // --- Click tracking (optional, free, no server) -------------------
  // Sign up at goatcounter.com, put your site code here (the bit before
  // .goatcounter.com). Leave "" for no tracking at all.
  goatcounter: "johnyops",

  // --- Search engines & link previews ------------------------------
  seo: {
    title: "Jonathan Shkolnik — johny.ops",
    description: "Fractional COO. Operations, systems, and the boring work that makes companies run.",
    url: "https://johnyops.com",            // your final site address
    image: "https://johnyops.com/avatar.jpg", // preview image when shared
  },
};

if (typeof module !== "undefined") module.exports = CONFIG; // used at deploy time, ignore
