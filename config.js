// ============================================================
//  THIS IS THE ONLY FILE YOU NEED TO EDIT.
//  Keep the quotes and commas exactly where they are.
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
    { label: "Book an advisory call", url: "https://cal.com/jonathan-shkolnik/advisorycall", icon: "calendar",
      description: "45 minutes · $60", featured: true },

    { label: "YouTube", url: "https://www.youtube.com/channel/UCvWiOpaG97JzYh_cWKbjB0w",
      icon: "youtube", description: "Operations, unedited" },

    { label: "LinkedIn", url: "https://www.linkedin.com/in/jshkolnik/", icon: "linkedin" },

    { label: "Instagram", url: "https://instagram.com/johny.ops", icon: "instagram" },

    { label: "TikTok", url: "https://www.tiktok.com/@johny_ops", icon: "tiktok" },

    // Put the real PLP address in the line below, then delete the two // marks.
    // { label: "PLP", url: "https://PUT-THE-REAL-URL-HERE.com", icon: "briefcase",
    //   description: "A business I built, start to finish" },
  ],

  // --- Email capture -----------------------------------------------
  // Paste the URL your form provider gives you (Formspree, Buttondown, Kit...).
  // Leave "" to hide the signup box completely.
  emailEndpoint: "",
  emailHeading: "Notes on running things properly",
  emailSub: "One email a week. Unsubscribe whenever.",
  emailButton: "Subscribe",

  // --- Click tracking (optional, free, no server) -------------------
  // Sign up at goatcounter.com, put your site code here (the bit before
  // .goatcounter.com). Leave "" for no tracking at all.
  goatcounter: "",

  // --- Search engines & link previews ------------------------------
  seo: {
    title: "Jonathan Shkolnik — johny.ops",
    description: "Fractional COO. Operations, systems, and the boring work that makes companies run.",
    url: "https://johnyopslinks.netlify.app",            // your final site address
    image: "https://johnyopslinks.netlify.app/avatar.jpg", // preview image when shared
  },
};

if (typeof module !== "undefined") module.exports = CONFIG; // used at deploy time, ignore
