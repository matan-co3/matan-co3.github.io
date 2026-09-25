/* =========================================================================
   PORTFOLIO CONTENT  -  EDIT THIS FILE ONLY
   -------------------------------------------------------------------------
   Everything on the site is driven by this file.
   - Change any text between the "quotes".
   - Images live in the /images folder. To set one, write its path, e.g.
        thumb: "images/lt2026-cover.png"
     Leave "" to show a placeholder.
   - Each project has an "id" (used in the URL: project.html?id=THE-ID).
   - To ADD a project: copy a { ... } block inside "projects", paste it,
     change the id + text + images.
   - "type" is either "work" or "playground" (used by the filter on the home page).
   - Full "case study" fields (goal / role / challenge / made / decisions /
     tools / outcome) are optional - lighter projects can skip them.
   Don't edit index.html, project.html or styles.css unless changing design.
   ========================================================================= */

window.PORTFOLIO = {

  name: "Matan Cohen",
  role: "Marketing Designer",

  hero: {
    eyebrow: "",
    headline: "Hey! I'm Matan.",
    // "{br}" forces the break so "and strong visual systems." stays whole on
    // its own line (index.html turns it into a <br class="hero-br">, dropped
    // again on narrow screens where the line wraps earlier anyway).
    sub: "I shape complex ideas into clear concepts, useful experiences,{br}and strong visual systems."
  },

  /* ================= PROJECTS (all in one place) ================= */
  projects: [

    /* ---------- Full case studies ---------- */
    {
      id: "learning-technologies-conferences",
      title: "Learning Technologies Conferences",
      category: "Content & Campaigns",
      type: "work",
      year: "2025–2026",
      // No "cover": it would render as a strip image at the top of the page,
      // repeating the booth photo that already appears further down.
      thumb: "images/lt26-fromconference.jpg",
      about: "Learning Technologies Conferences covers two years of Powtoon's presence at the UK L&D event, from one-pagers and stage presentations to the 2026 booth experience featuring Interactive Live Avatars.",
      tools: ["Illustrator", "Photoshop", "Google Slides"],
      layout: "strip",
      extraGuides: [
        { subLabels: ["One pager"], className: "lt-onepager", carousel: { key: "lt26onepager", count: 2 } },
        { subLabels: ["Presentation"], className: "lt-centered", carousel: { key: "lt26presentation", count: 10 } },
        {
          // The counter and the photo of it on the floor, side by side at one
          // shared height. The counter is a single flattened image (face plus
          // both wings joined, exactly as printed) rather than three cells -
          // three cells would have carried the label offset of only the first
          // one and knocked the joins out of line.
          className: "lt-counter-row",
          imageGrid: {
            cols: 2,
            equalHeights: true,
            images: [
              { image: "images/lt26-counter-full.jpg", label: "Counter" },
              { image: "images/lt26-fromconference.jpg", label: "From the conference" }
            ]
          }
        },
        {
          className: "lt-booth-row",
          imageGrid: {
            cols: 3,
            equalHeights: true,
            images: [
              { image: "images/lt26-rollup.jpg", label: "Rollup" },
              { image: "images/lt26-perspex-ask.jpg", label: "Perspex ask mode" },
              { image: "images/lt26-perspex-train.jpg", label: "Perspex train mode" }
            ]
          }
        },
        { label: "Learning Technologies 2025", className: "guide-block--section" },
        { subLabels: ["One pager"], className: "lt-onepager", carousel: { key: "lt2025onepager", count: 2 } },
        { label: "Gifs for social", className: "guide-block--section" },
        {
          // One gif at a time, arrows to switch between the three exports, with
          // the size of whichever is showing named above it - the same
          // treatment the Veo 3 guide's PPC set uses.
          className: "lt-gifs",
          carousel: {
            key: "ltgif",
            count: 3,
            ext: "gif",
            hideCount: true,
            sections: [
              { name: "600 × 338", count: 1 },
              { name: "698 × 400", count: 1 },
              { name: "1080 × 1080", count: 1 }
            ]
          }
        }
      ]
    },
    {
      id: "veo3-prompt-guide",
      title: "Veo 3 Prompt Writing Guide",
      // Content built inside Powtoon's existing brand system, not brand
      // identity work - Content & Campaigns, not Branding.
      category: "Content & Campaigns",
      type: "work",
      year: "2025",
      thumb: "images/veo3guide-thumb.jpg",
      layout: "guide",
      about: "The Veo 3 Prompt Writing Guide is a practical prompt-writing reference for Google Veo 3, created for Creative, Marketing, and L&D teams. It turns prompt writing into a repeatable system through a 9-part \"Prompt Blueprint,\" a shared visual and technical vocabulary, and a library of do's, don'ts, and sample prompts for different use cases.",
      tools: ["Adobe XD", "Powtoon Studio", "Seedance", "Veo 3.1"],
      guide: { label: "The guide", key: "veo3guide", count: 13 },
      gifs: {
        label: "GIFs",
        countBelow: true,
        items: [
          { src: "images/veo_1x1.mp4", format: "1080 × 1080" },
          { src: "images/veo_4x5.mp4", format: "1080 × 1350" },
          { src: "images/veo_9x16.mp4", format: "1080 × 1920" },
          { src: "images/veo_960x1200.mp4", format: "960 × 1200" },
          { src: "images/veo_1200x628.mp4", format: "1200 × 628" }
        ]
      }
    },
    {
      id: "finance-ld-guide",
      title: "Finance - AI for L&D Guide",
      category: "Content & Campaigns",
      type: "work",
      year: "2025",
      thumb: "images/financeguide-thumb.jpg",
      layout: "guide",
      about: "A 12-page educational guide for financial L&D teams exploring the role of AI in video creation and how Powtoon's AI platform can support their content workflows.",
      tools: ["Adobe XD"],
      guide: { label: "The guide", key: "financeguide", count: 12 }
    },
    {
      id: "sac-tmt",
      title: "Sac-TMT - Mechanism of Action",
      category: "Motion",
      // Client-facing marketing/demo content made for Merck - same kind of
      // deliverable as Lockheed Martin, just delivered as an animation.
      altCategories: ["Content & Campaigns"],
      type: "work",
      year: "2026",
      thumb: "images/sactmt-thumb.jpg",
      layout: "guide",
      about: "A 3D medical animation created for Merck to demonstrate Powtoon's MOA interface through a Sac-TMT mechanism of action. The video was produced using Powtoon's AI video tools powered by Veo 3.1, following the scientific and visual requirements of the mechanism.",
      tools: ["Powtoon Studio", "Seedance", "NotebookLM", "Veo 3.1", "Gemini"],
      guide: { video: "images/sactmt-video.mp4", sound: true, noLabel: true }
    },
    {
      id: "lockheed-martin",
      title: "Lockheed Martin",
      category: "Content & Campaigns",
      type: "work",
      year: "2026",
      thumb: "images/lockheedmartin-thumb.jpg",
      layout: "guide",
      about: "A strategic presentation created for a meeting with Lockheed Martin, introducing Powtoon's enterprise offering as part of a potential partnership. The project included the visual direction, information hierarchy, and slide design.",
      tools: ["Powtoon Studio", "Seedance", "Veo 3.1"],
      guide: { video: "images/lockheedmartin-video.mp4", sound: true, noLabel: true }
    },
    {
      id: "enterprise-credits",
      title: "Powtoon Credits",
      category: "Content & Campaigns",
      type: "work",
      year: "2025",
      thumb: "images/eccredits-thumb.jpg",
      layout: "guide",
      about: "Powtoon Credits brings together three resources built around Powtoon's credit system for AI features. Enterprise Credits is a sales one-pager covering plans, pricing tiers, and customer examples. AI Credits explains how the system works and reflects pricing updates, while the Rate Card provides a quick reference for the credit cost of each AI feature.",
      tools: ["Illustrator"],
      guide: { label: "Enterprise Credits", key: "eccredits", count: 2 },
      guide2: { label: "AI Credits", key: "eccredits2", count: 2 },
      guide3: { label: "Rate Card", key: "ratecard", count: 1 }
    },
    {
      id: "rules-of-engagement",
      title: "Rules of Engagement",
      // Content built inside Powtoon's existing brand system, not brand
      // identity work - Content & Campaigns, not Branding. Also has a real
      // landing-page design, so it answers to Web Design too.
      category: "Content & Campaigns",
      altCategories: ["Web Design"],
      type: "work",
      year: "2025",
      thumb: "images/rules-of-engagement-thumb.jpg",
      cover: "",
      layout: "slides",
      about: "Rules of Engagement is a series of AI adoption guides for L&D teams across 11 industries, from Finance to Retail. Each includes a dedicated signup landing page for web and mobile, paired with a full industry-specific guide - all built from one flexible design system adapted to each field.",
      made: ["11 industry-specific guides", "Reusable layout & template system"],
      tools: ["Adobe XD", "Illustrator"],
      // Laptop + phone read at the same size and spacing as every other
      // landing-page pair on the site (Integrations Page is the reference).
      matchDeviceHeights: true,
      images: [],
      // Each industry = a signup landing page (web + mobile) that leads to a
      // guide presentation. Guide frames: images/sl_<key>_00.jpg ... (2-digit).
      // lpWeb / lpMobile are the landing-page images. To add a guide slide,
      // drop the file and raise "count"; to add an industry, copy a block.
      // navMobile: the logo + "Request a demo" row cropped straight out of
      // each design's own mobile screenshot, pinned above the scrolling body
      // (its top NAV_H already trimmed from lpMobile) - same treatment as the
      // "lp" layout's own navMobile, so there's one nav row, not two.
      slides: [
        { label: "Finance",         key: "finance",       count: 12, lpWeb: "images/lp_finance_web.jpg",       lpMobile: "images/lp_finance_mobile.jpg",       navMobile: "images/lp_finance_navmobile.jpg" },
        { label: "Software",        key: "software",      count: 12, lpWeb: "images/lp_software_web.jpg",      lpMobile: "images/lp_software_mobile.jpg",      navMobile: "images/lp_software_navmobile.jpg" },
        { label: "Retail",          key: "retail",        count: 12, lpWeb: "images/lp_retail_web.jpg",        lpMobile: "images/lp_retail_mobile.jpg",        navMobile: "images/lp_retail_navmobile.jpg" },
        { label: "Government",      key: "government",    count: 12, lpWeb: "images/lp_government_web.jpg",    lpMobile: "images/lp_government_mobile.jpg",    navMobile: "images/lp_government_navmobile.jpg" },
        { label: "Education",       key: "education",     count: 12, lpWeb: "images/lp_education_web.jpg",     lpMobile: "images/lp_education_mobile.jpg",     navMobile: "images/lp_education_navmobile.jpg" },
        { label: "HR",              key: "hr",            count: 12, lpWeb: "images/lp_hr_web.jpg",            lpMobile: "images/lp_hr_mobile.jpg",            navMobile: "images/lp_hr_navmobile.jpg" },
        { label: "Consulting",      key: "consulting",    count: 12, lpWeb: "images/lp_consulting_web.jpg",    lpMobile: "images/lp_consulting_mobile.jpg",    navMobile: "images/lp_consulting_navmobile.jpg" },
        { label: "Manufacturing",   key: "manufacturing", count: 12, lpWeb: "images/lp_manufacturing_web.jpg", lpMobile: "images/lp_manufacturing_mobile.jpg", navMobile: "images/lp_manufacturing_navmobile.jpg" },
        { label: "Insurance",       key: "insurance",     count: 12, lpWeb: "images/lp_insurance_web.jpg",     lpMobile: "images/lp_insurance_mobile.jpg",     navMobile: "images/lp_insurance_navmobile.jpg" },
        { label: "Nonprofit",       key: "nonprofit",     count: 12, lpWeb: "images/lp_nonprofit_web.jpg",     lpMobile: "images/lp_nonprofit_mobile.jpg",     navMobile: "images/lp_nonprofit_navmobile.jpg" },
        { label: "Food & Beverage", key: "food",          count: 12, lpWeb: "images/lp_food_web.jpg",          lpMobile: "images/lp_food_mobile.jpg",          navMobile: "images/lp_food_navmobile.jpg" }
      ]
    },
    {
      id: "enterprise",
      title: "World of Learning",
      category: "Content & Campaigns",
      // Has a real landing-page design - also answers to Web Design.
      altCategories: ["Web Design"],
      type: "work",
      year: "2025",
      thumb: "images/ent-thumb.jpg",
      layout: "lp",
      about: "World of Learning 2025 is Powtoon's campaign for the World of Learning event in Birmingham, introducing its enterprise offering to L&D leaders. The project includes a web and mobile landing page, LinkedIn and email banners, and animated GIFs.",
      tools: ["Adobe XD", "Illustrator", "Photoshop"],
      lpHeading: "Enterprise LP Birmingham",
      lpWeb: "images/ent-web.jpg",
      lpMobile: "images/ent-mobile.jpg",
      navWeb: "images/ent-hdr-web.jpg",
      navMobile: "images/ent-hdr-mobile.jpg",
      // The laptop keeps its own fixed scroll-window height as-is; the phone
      // is then scaled by width (its own real device shape, unstretched) until
      // its frame ends at that same height - same treatment as Prompt & Play.
      matchDeviceHeights: true,
      onePager: {
        label: "One pager",
        images: ["images/ent-onepager-1.png", "images/ent-onepager-2.png"]
      },
      // Add more gifs here as they're exported - each needs a src + its format label.
      gifs: {
        label: "GIFs",
        countBelow: true,
        items: [
          { src: "images/wol25-gif-1080.gif", format: "1080 × 1080" },
          { src: "images/wol25-gif-698x400.gif", format: "698 × 400" },
          { src: "images/wol25-gif-600x337.gif", format: "600 × 337" }
        ]
      }
    },
    {
      id: "email-series",
      title: "Feature Email Series",
      category: "Content & Campaigns",
      altCategories: ["Motion"],
      type: "work",
      year: "2025",
      thumb: "images/email-thumb-card.jpg",
      layout: "strip",
      about: "Feature Email Series is a collection of emails highlighting individual Powtoon features, each centered around a short animated preview of the feature in action.",
      tools: ["Powtoon Studio", "After Effects"],
      extraGuides: [
        { label: "Soundtrack", video: "images/email-gif-soundtrack.mp4", fluid: true, sound: true },
        { label: "Animated texture", video: "images/email-gif-animatedtexture.mp4", fluid: true, autoplay: true },
        { label: "Export", video: "images/email-gif-export.mp4", fluid: true, autoplay: true },
        { label: "Frames", video: "images/email-gif-frames.mp4", fluid: true, autoplay: true },
        { label: "Scenes", video: "images/email-gif-scene.mp4", fluid: true, autoplay: true },
        { label: "Transitions", video: "images/email-gif-transitions.mp4", fluid: true, autoplay: true }
      ]
    },
    {
      id: "scenario-ai",
      title: "Scenario AI",
      category: "Content & Campaigns",
      type: "work",
      year: "2026",
      thumb: "images/scenario-ai-thumb.jpg",
      layout: "strip",
      about: "Scenario AI is a Powtoon feature for planning videos scene by scene - from storyboards and prompts to shot direction - and turning that plan into a finished video. The campaign launches alongside the Anything2Video event and includes a multi-format demo, scenario-based social clips, LinkedIn carousels, and supporting social content.",
      tools: ["Powtoon Studio", "Seedance", "Veo 3.1", "Illustrator", "Photoshop"],
      extraGuides: [
        { label: "Gifs", className: "guide-block--section" },
        { className: "scen-gifs", sizeSwitch: {
          ext: "mp4",
          cols: 3,
          sizes: [
            { format: "1080 × 1080", network: "Instagram & Facebook post" },
            { format: "1080 × 1920", network: "Instagram & Facebook Story" }
          ],
          designs: [
            { key: "sclemon" },
            { key: "scrunner" },
            { key: "scgirl" },
            { key: "scmoney" },
            { key: "sccine1" },
            { key: "sccine2" }
          ]
        } },
        { label: "Scenario AI carousel", className: "guide-block--section" },
        // The 6-page carousel and the "Scenario AI by Powtoon" size switcher
        // sit side by side in one row under this single heading - same
        // convention as every other pair on the site (Steal my prompt below,
        // the tickets/meme row further down): two columns, matched on height
        // so each keeps its own proportions.
        { className: "scen-carousel-row", split: {
          left: { carousel: { key: "scencar", count: 6 } },
          right: { sizeSwitch: {
            ext: "mp4",
            cols: 1,
            // Opens on the 1200 × 628 link ad (the last entry) and counts from
            // there, so the view you land on is page 1. "matchSibling" then
            // gives the carousel beside it and every format here one shared
            // height - solved from the row's real width so even this widest
            // format fits - and the pair starts and ends on the same lines.
            start: 4,
            matchSibling: true,
            sizes: [
              { format: "1080 × 1080", network: "Instagram & Facebook post" },
              { format: "1080 × 1350", network: "LinkedIn & Instagram post" },
              { format: "1080 × 1920", network: "Instagram & Facebook Story" },
              { format: "960 × 1200", network: "LinkedIn post" },
              { format: "1200 × 628", network: "LinkedIn & Facebook link ad" }
            ],
            designs: [{ key: "scenmain" }]
          } }
        } },
        { label: "Steal my prompt carousel", className: "guide-block--section" },
        { split: {
          left: { label: "EC - LinkedIn", carousel: { key: "stealec", count: 5 } },
          right: { label: "SS - Instagram", carousel: { key: "stealss", count: 5, ext: "mp4" } }
        } },
        { label: "Ticket posts & meme", className: "guide-block--section" },
        { className: "eg-tickets", split: {
          left: { carousel: { key: "tickets", count: 4 } },
          right: { image: "images/scenario-ai-meme.jpg" }
        } }
      ]
    },
    {
      id: "anything-to-video",
      title: "Anything to Video",
      category: "Content & Campaigns",
      // Has a real landing-page design - also answers to Web Design.
      altCategories: ["Web Design"],
      type: "work",
      year: "2025",
      // The Anything to Video one-pager, cropped 4:3 off its own top so the
      // card shows the hero rather than centre-cropping into the feature list.
      thumb: "images/a2v-onepager-thumb.jpg",
      cover: "images/a2v-onepager-thumb.jpg",
      about: "Anything2Video is a launch campaign for Powtoon's unified AI video platform, launched alongside Scenario AI. The campaign spans a landing page, product one-pager, website and social banners, social clips, and LinkedIn and Instagram carousels.",
      tools: ["Figma", "Illustrator", "Photoshop", "Powtoon Studio", "Veo 3.1", "Midjourney"],
      layout: "guide",
      sharedColumn: true,
      guide2: {
        label: "Landing page",
        lpMock: {
          header: "images/a2v_lp_hdr.jpg",
          mobileHeader: "images/a2v_lp_mobile_hdr.jpg",
          // No webAspect: the fixed scroll-window height (the shared default,
          // same as Rules of Engagement/Integrations Page/Articulate) is what
          // keeps every mockup on the site at one identical size - webAspect
          // let the laptop's own width drive its height instead, which is
          // what made this one render wider than the others.
          webLabel: "Web",
          mobileLabel: "Mobile",
          matchDeviceHeights: true,
          tabs: [
            { web: "images/a2v_lp_desktop.jpg", mobile: "images/a2v_lp_mobile.jpg" }
          ]
        }
      },
      extraGuides: [
        { label: "One-pager", className: "guide-block--section" },
        { className: "a2v-carousel a2v-onepager", carousel: { key: "a2vonepager", count: 2 } },
        { label: "Social", className: "guide-block--section" },
        { className: "a2v-social-row", split: {
          left: { label: "1080 × 1350", video: "images/sl_a2vsocial_00.mp4" },
          mid: { sizeSwitch: {
            ext: "mp4",
            // Format only above this one - the row is a set of clips, not a
            // placement breakdown, so the network line would only add noise.
            sizes: [
              { format: "1080 × 1080" },
              { format: "1080 × 1350" },
              { format: "1080 × 1920" }
            ],
            designs: [{ key: "a2vengage" }]
          } },
          right: { label: "1080 × 1350", video: "images/sl_a2vsocial_02.mp4" }
        } },
        { label: "Website & social banners", className: "guide-block--section" },
        { className: "a2v-banner", sizeSwitch: {
          cols: 1, colWidth: 820,
          sizes: [
            { format: "3840 × 128", network: "Website banner - Desktop" },
            { format: "1440 × 250", network: "Website banner - Mobile" },
            { format: "1080 × 1080", network: "Instagram post" }
          ],
          designs: [{ key: "a2vbanner" }]
        } },
        { label: "Anything2Video & Aftermath carousels", className: "guide-block--section" },
        { split: {
          left: { label: "Anything2Video", carousel: { key: "a2vcarousel", count: 6 } },
          right: { label: "Aftermath", carousel: { key: "a2vaftermath", count: 7 } }
        } }
      ]
    },
    {
      id: "ai-translation-ppc",
      title: "AI Translation - Social",
      category: "Content & Campaigns",
      type: "work",
      year: "2026",
      thumb: "images/ai-translation-ppc-thumb.jpg",
      layout: "guide",
      about: "AI Translation Social is a social campaign for Powtoon's AI-powered translation and dubbing feature. The core ad follows the same postcard from New York to Vietnam to Thailand as its message is localized into each language, alongside Go Global carousels tailored to self-serve and enterprise L&D audiences.",
      tools: ["After Effects", "Illustrator"],
      guide: { video: "images/ai-translation-ppc.mp4", label: "Go global GIF", autoplay: true },
      extraGuides: [
        { label: "Go global carousel", className: "guide-block--section" },
        { split: {
          left: { label: "SS", carousel: { key: "goglobalss", count: 4, hideCount: true } },
          right: { label: "EC", carousel: { key: "goglobalec", count: 4, hideCount: true } }
        } }
      ]
    },
    {
      id: "product-carousels",
      title: "Product Carousels",
      category: "Content & Campaigns",
      type: "work",
      year: "2026",
      thumb: "images/product-carousels-thumb.jpg",
      layout: "strip",
      // "{br}" - a plain line break with no paragraph gap (see project.html's
      // about renderer): "tailored" starts the next line instead of hanging on
      // the end of the one above it, so the break lands on the comma.
      about: "Product Carousels is a series of social carousels spotlighting individual Powtoon features, including Gen AI video tools and custom animation capabilities. Each feature is presented through two LinkedIn carousels,{br}tailored to self-serve users and enterprise L&D teams.",
      tools: ["Illustrator", "Photoshop"],
      extraGuides: [
        { label: "Gen AI carousel", className: "guide-block--section" },
        { carousel: { key: "genaiss", count: 4 } },
        { label: "Animation features carousel", className: "guide-block--section" },
        { split: {
          left: { label: "SS", carousel: { key: "animss", count: 4 } },
          right: { label: "EC", carousel: { key: "animec", count: 4 } }
        } }
      ]
    },
    {
      id: "evergreen-stats-posts",
      title: "Evergreen & Data-Driven Stats Posts",
      category: "Content & Campaigns",
      type: "work",
      year: "2026",
      thumb: "images/evergreen-stats-thumb.jpg",
      layout: "strip",
      about: "A collection of organic social posts for Powtoon's ongoing content. Data-driven posts turn industry research into statistics about AI and video in the workplace, while evergreen posts highlight Powtoon's features and use cases through concepts such as “Powtoonify” and a one-stop-shop view of the Powtoon Studio.",
      tools: ["Illustrator", "Photoshop"],
      extraGuides: [
        { label: "Data driven posts", className: "guide-block--section" },
        { sizeSwitch: {
          // Opens on the square (index 1); the arrows show the other formats.
          start: 1,
          sizes: [
            { format: "1080 × 1350", network: "LinkedIn & Instagram post" },
            { format: "1200 × 1200", network: "Instagram & Facebook post" },
            { format: "1080 × 1920", network: "Instagram & Facebook Story" }
          ],
          designs: [
            { key: "stat1in2" },
            { key: "stat49" }
          ]
        } },
        { className: "eg-stat-grid", imageGrid: {
          cols: 2,
          images: [
            "images/sl_stat80.jpg",
            "images/sl_stat60.jpg",
            "images/sl_stat38.jpg",
            "images/sl_stat90.jpg"
          ]
        } },
        { label: "Evergreen posts", className: "guide-block--section" },
        { sizeSwitch: {
          start: 1,
          sizes: [
            { format: "1080 × 1350", network: "LinkedIn & Instagram post" },
            { format: "1200 × 1200", network: "Instagram & Facebook post" },
            { format: "1080 × 1920", network: "Instagram & Facebook Story" }
          ],
          designs: [
            { key: "eganything" },
            { key: "egavatars" }
          ]
        } },
        { image: "images/eg-shopping-basket.gif", ownStage: true }
      ]
    },
    {
      id: "ai-avatar-ppc",
      title: "AI Avatar - Social",
      category: "Content & Campaigns",
      type: "work",
      year: "2026",
      // Its own 4:3 thumb: the card crops 4:3, and the square 1×1 ad lost a
      // quarter of its height (the pink frame, the logo, the CTA) to that crop.
      // This one is the 1200×628 cut, whose own pink frame is simply carried
      // out top and bottom to 4:3 - nothing of the design is cut.
      thumb: "images/ai-avatar-thumb.jpg",
      layout: "strip",
      about: "AI Avatar is a social campaign for Powtoon's Interactive AI Avatars, with a core creative adapted for LinkedIn, Facebook, and Instagram, alongside two LinkedIn carousels tailored to self-serve users and enterprise L&D teams.",
      tools: ["Photoshop", "Illustrator"],
      gifs: {
        simple: true,
        label: "Social ad formats",
        items: [
          { src: "images/ai-avatar_4x5.jpg", format: "1080 × 1350" },
          { src: "images/ai-avatar_1x1.jpg", format: "1200 × 1200" },
          { src: "images/ai-avatar_9x16.jpg", format: "1080 × 1920" },
          { src: "images/ai-avatar_960x1200.jpg", format: "960 × 1200" },
          { src: "images/ai-avatar_1200x628.jpg", format: "1200 × 628" }
        ]
      },
      extraGuides: [
        { label: "AI Avatar carousel", className: "guide-block--section" },
        { split: {
            left: { label: "EC", carousel: { key: "avatarcarec", count: 4 } },
            right: { label: "SS", carousel: { key: "avatarcarss", count: 4 } }
        } }
      ]
    },
    {
      id: "ld-report-social",
      title: "L&D Report - Social",
      category: "Content & Campaigns",
      type: "work",
      year: "2025",
      thumb: "images/ld-report-thumb.jpg",
      layout: "guide",
      about: "The Pulse of L&D in 2026 is a social campaign for Powtoon's industry report, featuring a carousel of insights from L&D practitioners alongside a series of campaign creatives promoting the report.",
      tools: ["Illustrator", "Photoshop", "After Effects", "Figma", "Midjourney", "Seedance 2"],
      // 15 quote cards, ordered by the "Trend" label printed on each one, so
      // the subtitle names the trend the current card belongs to as you page.
      guide: {
        groupLabel: "Quotes posts carousel",
        key: "ldquotes",
        count: 15,
        globalCount: true,
        sections: [
          { name: "", count: 3 },
          { name: "Beyond Courses: Alternative & Micro Learning", count: 2 },
          { name: "Rethinking SME-ID Workflows", count: 3 },
          { name: "AI's Next Chapter: Impact Over Speed", count: 2 },
          { name: "From Content & Tools Overload to Ecosystem Strategy", count: 2 },
          { name: "L&D's Golden ROI Era", count: 3 }
        ]
      },
      // PPC lives in guide2/guide3 rather than extraGuides: extraGuides reuses
      // the #gdStage id, which this project's own "guide" layout already
      // renders for the quotes carousel - guide slots keep the ids unique.
      guide2: { label: "L&D report PPC", video: "images/ld-ppc-girlgum.mp4", autoplay: true },
      // The poster sits beside the video, which carries the section heading -
      // so it takes a blank single-line label of its own (a non-breaking
      // space) purely to reserve that same heading height, keeping both
      // pieces' top edges on one line instead of the poster riding up.
      guide3: { key: "ldppcpaper", count: 1, label: " " }
    },
    {
      id: "ld-ai-presentation",
      title: "AI for Faster Employee Development",
      category: "Content & Campaigns",
      type: "work",
      year: "2026",
      thumb: "images/ldai-deck-thumb.jpg",
      layout: "guide",
      about: "A conference talk deck on using AI to capture and scale subject-matter expertise, structured around a Capture → Create → Share workflow. The presentation covers knowledge retention, content creation, and the role of Powtoon's AI tools throughout the process.",
      tools: ["Illustrator", "Google Slides"],
      guide: { noLabel: true, key: "ldaideck", count: 14 }
    },

    /* ---------- Lighter work projects ---------- */
    {
      id: "youtube-thumbnails",
      title: "YouTube Thumbnails",
      category: "Content & Campaigns",
      type: "work",
      year: "2025–2026",
      thumb: "images/sl_ytthumb_card.jpg",
      layout: "guide",
      about: "YouTube Thumbnails is an ongoing template system for Powtoon's YouTube channel, covering recurring series including \"The Creator Edit with Renee Teeley,\" \"How It's Done,\" and \"Learn with Powtoon.\" Each series has its own color palette and layout, alongside a dedicated carousel for the \"Powtoon AI 101\" playlist.",
      tools: ["Photoshop", "Figma", "Midjourney"],
      guide: { label: "\"The Creator Edit with Renee Teeley\" playlist", key: "ytcreator", count: 16, mockup: "images/sl_ytmockup1.jpg" },
      guide2: { label: "\"How It's Done\" playlist", key: "ytdone", count: 27, mockup: "images/sl_ytmockup2.jpg" },
      guide3: { label: "\"Learn with Powtoon\" playlist", key: "ytlearn", count: 45, mockup: "images/sl_ytmockup3.jpg" },
      guide4: { label: "\"Powtoon AI 101\" playlist", key: "ytai101", count: 12, mockup: "images/sl_ytmockup4.jpg" },
      guide5: { label: "\"Powtoon AI 101\" social carousel (LinkedIn & Instagram)", key: "ytai101social", count: 13 }
    },
    {
      id: "webinars",
      title: "Prompt & Play",
      category: "Content & Campaigns",
      // Has a real landing-page design - also answers to Web Design.
      altCategories: ["Web Design"],
      type: "work",
      year: "2025",
      thumb: "images/pp-thumb.jpg",
      cover: "images/pp-thumb.jpg",
      about: "Prompt & Play is a Powtoon webinar built around the shift from “type & pray” to “prompt & play,” exploring how AI changes the video creation workflow. The campaign includes a registration landing page, website and email banners, and social content for LinkedIn, Instagram, and Facebook.",
      tools: ["Figma", "Illustrator"],
      layout: "guide",
      sharedColumn: true,
      guide2: {
        label: "Landing page",
        lpMock: {
          header: "images/pp_lp_hdr.jpg",
          mobileHeader: "images/pp_lp_mobile_hdr.jpg",
          // No webAspect - see Anything to Video's lpMock for why.
          webLabel: "Web",
          mobileLabel: "Mobile",
          matchDeviceHeights: true,
          tabs: [
            { label: "Register page", web: "images/pp_lp_register.jpg", mobile: "images/pp_lp_mobile.jpg" }
          ]
        }
      },
      extraGuides: [
        { label: "Social", className: "guide-block--section" },
        { subLabels: ["Webinar cover"], image: "images/pp_cover.jpg", fluid: true },
        { label: "PPC", className: "guide-block--section" },
        {
          subLabels: ["Instagram posts (1080×1080)"],
          imageGrid: {
            cols: 2,
            images: ["images/pp_ig_post_1.jpg", "images/pp_ig_post_2.jpg"]
          }
        },
        {
          // One grid, three cells: the tall story spans both rows on the left,
          // and the Facebook post and the replay thumbnail stack in the right
          // column - so the thumbnail sits directly under the post it belongs
          // with, instead of below the full height of the story.
          className: "pp-social-row",
          imageGrid: {
            cols: 2,
            // The story is scaled down by height (proportions kept) to finish
            // on the same line as the replay thumbnail beside it.
            fitFirstToRest: true,
            images: [
              { image: "images/pp_ig_story.jpg", label: "Instagram story (1080×1920)" },
              { image: "images/pp_fb_post.jpg", label: "Facebook post (1200×630)" },
              { image: "images/pp_thumb_replay.jpg", label: "Thumbnail replay (1920×1080)" }
            ]
          }
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { image: "images/pp_li_post_wide.jpg", label: "LinkedIn post (1350×1080)" },
              { image: "images/pp_li_event_cover.jpg", label: "LinkedIn event cover (1920×1080)" }
            ]
          }
        },
        {
          subLabels: ["LinkedIn post (1080×1350)"],
          imageGrid: {
            cols: 3,
            images: ["images/pp_li_stat_1.jpg", "images/pp_li_stat_2.jpg", "images/pp_li_stat_3.jpg"]
          }
        },
        {
          subLabels: ["LinkedIn carousel (1350×1080)"],
          carousel: { key: "ppcarousel", count: 4 }
        },
        {
          subLabels: ["LinkedIn post (1200×1200)"],
          imageGrid: {
            cols: 3,
            images: ["images/pp_li_sq_1.jpg", "images/pp_li_sq_2.jpg", "images/pp_li_sq_3.jpg"]
          }
        },
        { label: "Email", className: "guide-block--section" },
        {
          imageGrid: {
            cols: 2,
            images: [
              { image: "images/pp_email_invite.jpg", label: "Email invitation (600×338)" },
              { image: "images/pp_email_replay.jpg", label: "Email replay (600×338)" }
            ]
          }
        }
      ]
    },
    {
      id: "unboxing-webinar-2025",
      title: "Unboxing Webinar",
      category: "Content & Campaigns",
      // Has a real landing-page design - also answers to Web Design.
      altCategories: ["Web Design"],
      type: "work",
      year: "2025",
      thumb: "images/sl_unboxwebinar_card.jpg",
      layout: "guide",
      about: "Unboxing Webinar is a campaign for a live event introducing Powtoon's Unified AI Video Platform and its new AI-powered features to enterprise audiences. It includes a registration landing page and PPC assets promoting the webinar and driving registrations.",
      tools: ["Adobe XD", "Illustrator"],
      guide2: {
        label: "Landing page",
        lpMock: {
          // Same laptop + phone side-by-side treatment as every other mockup
          // on the site (Integrations Page is the reference) - this one was
          // left stacked by oversight, not on purpose.
          header: "images/sl_unboxwebinar_lpweb_hdr.jpg",
          mobileHeader: "images/sl_unboxwebinar_lpmobile_hdr.jpg",
          // No webAspect - see Anything to Video's lpMock for why.
          webLabel: "Web",
          mobileLabel: "Mobile",
          matchDeviceHeights: true,
          // The mobile mockup only exists for Registration - Replay was never
          // designed for mobile, so putting "mobile" on that tab alone (rather
          // than shared across both) hides the phone automatically when the
          // Replay tab is active instead of showing the Registration screen
          // next to it.
          tabs: [
            { label: "Registration", web: "images/sl_unboxwebinar_lpweb1.jpg", mobile: "images/sl_unboxwebinar_lpmobile.jpg" },
            { label: "Replay", web: "images/sl_unboxwebinar_lpweb2.jpg" }
          ]
        }
      },
      // Social posts, Instagram story and Emails all moved into extraGuides
      // (from the old guide3/guide4/guide5 slots) so the Instagram post and
      // Instagram story can sit in a split - side by side, same row, each
      // keeping its own proportion - the way every other paired set on the
      // site does, instead of two separate stacked sections.
      extraGuides: [
        { label: "Social posts", className: "guide-block--section" },
        { className: "uw-social-row", split: {
          left: { label: "Instagram post (1080×1080)", carousel: { key: "unboxwebinar3", count: 3 } },
          right: { label: "Instagram story", carousel: { key: "unboxwebinar4", count: 1 } }
        } },
        // Both frames at the Facebook post's own height (its 1200×630 shape
        // is the wider of the two), each keeping its own real proportion -
        // without this, the shared width-based box sizing means paging
        // between them changes the box's height by a third each time.
        { className: "uw-lf-carousel", carousel: {
            key: "unboxwebinarlf",
            count: 2,
            sections: [
              { name: "LinkedIn post (1350×1080)", count: 1 },
              { name: "Facebook post (1200×630)", count: 1 }
            ]
        } },
        { label: "Emails", className: "guide-block--section" },
        { carousel: {
            key: "unboxwebinar5",
            count: 2,
            sections: [
              { name: "Email invitation (600×338)", count: 1 },
              { name: "Email replay (600×338)", count: 1 }
            ]
        } }
      ]
    },
    {
      id: "triple-unboxing-2026",
      title: "Triple Unboxing Webinar",
      category: "Content & Campaigns",
      type: "work",
      year: "2026",
      // Dedicated thumb: the raw teaser frame is a tall 4:5 slide, so the
      // card's 4:3 crop was slicing straight through the top headline and
      // the bottom "But the knowledge transfer gap?" line. This crop keeps
      // only the app screenshot + its floating UI, centered, text-free.
      thumb: "images/triplebox-thumb.jpg",
      layout: "guide",
      about: "Triple Unboxing is a campaign for a May 2026 event introducing three new AI-powered experiences in Powtoon: Co:Create, Interactive Live Avatars, and MOA Studio. The campaign includes pre-event teasers, post-event content, and feature-focused carousels highlighting updates such as the new Global Timeline. It also reached beyond Powtoon's own channels through a sponsored banner in the Offbeat newsletter, driving registrations to the live event.",
      tools: ["Illustrator", "Midjourney"],
      guide: { label: "Teaser carousel", key: "triplebox1", count: 4 },
      guide2: { label: "Aftermath recap", key: "triplebox2", count: 5 },
      // The Global Timeline pair sits side by side under one section heading -
      // the same EC/SS treatment as Scenario AI's "Steal my prompt". The
      // Offbeat newsletter banner used to be its own one-asset project; it
      // belongs to this campaign (same 2026 event) so it sits here instead.
      extraGuides: [
        { label: "Global Timeline feature", className: "guide-block--section" },
        { split: {
          left: { label: "EC", carousel: { key: "triplebox3", count: 5 } },
          right: { label: "SS", carousel: { key: "triplebox4", count: 5 } }
        } },
        // ownStage: this project already uses #gdStage/#gd2Stage for its two
        // guide slots, so the banner takes a private stage id instead of
        // borrowing the first one from that pool (which would duplicate the
        // id, and hand the banner that slot's tall fixed box). "fluid" then
        // sizes it by its own 1536×480 ratio.
        { label: "Offbeat newsletter banner (1536×480)", image: "images/offbeat-banner.jpg", fluid: true, ownStage: true }
      ]
    },
    {
      id: "articulate-webinar",
      title: "Articulate Webinar",
      category: "Content & Campaigns",
      // Has a real landing-page design - also answers to Web Design.
      altCategories: ["Web Design"],
      type: "work",
      year: "2026",
      thumb: "images/articulate-thumb.jpg",
      layout: "guide",
      about: "Articulate Webinar Series is Powtoon's ongoing webinar series for L&D teams, run in collaboration with Articulate. This project covers two sessions: Workflow, represented by its landing page, and Storyline + Live Avatars, featuring a social campaign of static and motion LinkedIn/Instagram posts.",
      tools: ["Figma", "Midjourney", "Seedance", "Veo 3.1", "Powtoon Studio"],
      guide2: {
        label: "Landing page",
        lpMock: {
          header: "images/articulate-lp-hdr-web.jpg",
          mobileHeader: "images/articulate-lp-hdr-mobile.jpg",
          webLabel: "Web",
          mobileLabel: "Mobile",
          matchDeviceHeights: true,
          tabs: [
            { label: "Register page", web: "images/articulate-lp-web.jpg", mobile: "images/articulate-lp-mobile.jpg" }
          ]
        }
      },
      extraGuides: [
        {
          // LinkedIn + Instagram post (1080×1350), each paired with its own
          // short motion version - one imageGrid, two columns, six rows -
          // "Static"/"Motion" labeled once at the top rather than per row.
          // Label lives on this same block (not a separate bare-label entry)
          // so it sits exactly as tight to its caption as the LP block's own
          // label sits to "Webinar register page" - same .lp__label margin,
          // no reliance on the looser guide-block--section inter-block gap.
          label: "Social - Storyline & Live Avatars",
          className: "articulate-social-grid",
          subLabels: ["Static", "Motion"],
          imageGrid: {
            cols: 2,
            caption: "LinkedIn + Instagram post (1080×1350)",
            images: [
              "images/articulate-post-workflow.jpg",
              { video: "images/articulate-video-workflow.mp4", autoplay: true },
              "images/articulate-post-nextlevel.jpg",
              { video: "images/articulate-video-nextlevel.mp4", autoplay: true },
              "images/articulate-post-2027.jpg",
              { video: "images/articulate-video-2027.mp4", autoplay: true },
              "images/articulate-post-avatarsunlocked.jpg",
              { video: "images/articulate-video-avatarsunlocked.mp4", autoplay: true },
              "images/articulate-post-quizzes.jpg",
              { video: "images/articulate-video-quizzes.mp4", autoplay: true },
              "images/articulate-post-storyline.jpg",
              { video: "images/articulate-video-storyline.mp4", autoplay: true }
            ]
          }
        },
        {
          // No heading of its own - billboards are part of the same social
          // rollout as the posts above, not a separate named section. Same
          // idea as Evergreen's stat grid: className carries the imageGrid's
          // own row rhythm into the gap above it too, so it reads as one
          // continuous grid with the six rows before it rather than a
          // separate work with the standard between-works gap.
          className: "articulate-billboards",
          imageGrid: {
            cols: 2,
            images: ["images/articulate-billboard-learners.jpg", "images/articulate-billboard-employees.jpg"]
          }
        }
      ]
    },
    {
      id: "integrations-page",
      title: "Integrations Page",
      category: "Web Design",
      type: "work",
      year: "2026",
      thumb: "images/integrations-thumb.jpg",
      layout: "guide",
      about: "The Powtoon Integrations page is a browsable directory of the tools Powtoon connects with, from Zapier and Salesforce to Google Drive and Articulate 360. A filterable grid organized by category helps visitors find and explore the integrations they need.",
      tools: ["Adobe XD"],
      guide2: {
        label: "Landing page",
        lpMock: {
          header: "images/integrations-lp-hdr-web.jpg",
          mobileHeader: "images/integrations-lp-hdr-mobile.jpg",
          webLabel: "Web",
          mobileLabel: "Mobile",
          matchDeviceHeights: true,
          tabs: [
            { label: "Integrations page", web: "images/integrations-lp-web.jpg", mobile: "images/integrations-lp-mobile.jpg" }
          ]
        }
      }
    },
    /* The Offbeat newsletter banner used to be its own project here. It's a
       single asset from the same May 2026 event as Triple Unboxing Webinar
       (matching year, same launch), so it now lives inside that project's
       extraGuides instead of standing alone. */

    /* ---------- Playground (add images by exporting from Figma/Behance) ---------- */
    {
      id: "changemaker",
      title: "Tact It",
      category: "Product Design",
      // Its graphic language (characters, posters, illustrated icon set)
      // also belongs under Illustration.
      altCategories: ["Illustration"],
      type: "playground",
      year: "",
      thumb: "images/tactit-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "An app designed to help users navigate awkward social situations in real time. It detects the situation, analyzes social cues and emotions, and guides users toward the right response. The app also combines practice, mindfulness, and social-skill tools to turn uncomfortable moments into opportunities for personal growth.",
      tools: ["Figma", "After Effects", "Photoshop", "Procreate"],
      sharedColumn: true,
      extraGuides: [
        { image: "images/tactit-hero-lite.webp", fluid: true },
        { label: "Main user flow", className: "guide-block--section" },
        {
          imageGrid: {
            cols: 2,
            images: [
              { video: "images/tactit-flow-emotions.mp4", label: "Emotion's filter flow" },
              { video: "images/tactit-flow-practice.mp4", label: "People's filter + Tact Practice flow" }
            ]
          }
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { video: "images/tactit-flow-alarm.mp4", label: "Tactless alarm + AI flow" },
              { video: "images/tactit-flow-analize.mp4", label: "Analize flow" }
            ]
          }
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { video: "images/tactit-flow-safeword.mp4", label: "Tact safe word flow" },
              { video: "images/tactit-flow-mindfulness.mp4", label: "Tact mindfulness flow" }
            ]
          }
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { video: "images/tactit-flow-community.mp4", label: "Tact community flow" }
            ]
          }
        },
        { subLabels: ["Posters"], image: "images/tactit-posters-lite.webp", fluid: true },
        { label: "Graphic language", className: "guide-block--section" },
        {
          imageGrid: {
            cols: 2,
            images: [
              { image: "images/tactit-gl-feelings.png", label: "Feelings" },
              { image: "images/tactit-gl-typography.png", label: "Typography" }
            ]
          }
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { image: "images/tactit-gl-locations.png", label: "Locations" },
              { image: "images/tactit-gl-colors.png", label: "Colors" }
            ]
          }
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { image: "images/tactit-gl-characters.png", label: "Characters" },
              { image: "images/tactit-gl-logo.png", label: "Logo" }
            ]
          }
        }
      ]
    },
    {
      id: "glamorous",
      title: "Glamorous",
      category: "Product Design",
      // Desktop web-app design shown via a Figma embed rather than the
      // site's laptop-mockup component - still a website case study, so it
      // also answers to Web Design.
      altCategories: ["Web Design"],
      type: "playground",
      year: "",
      thumb: "images/glamorous-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "A management system designed to manage multiple fashion shows and productions for different companies simultaneously.",
      tools: ["Figma", "After Effects"],
      sharedColumn: true,
      extraGuides: [
        {
          className: "guide-block--spec",
          label: "Target audience",
          text: "Managers of fashion brands, who want to manage fashion production in an optimal way with a minimum of hassles."
        },
        {
          className: "guide-block--spec",
          label: "Platform",
          text: "Desktop 1440px X 1024px"
        },
        {
          className: "guide-block--spec",
          label: "Purpose & goals",
          cardCols: 2,
          cards: [
            {
              title: "Ensure organized management",
              text: "Maintain accurate records of items, schedules, and roles to reduce miscommunications and overlooked details."
            },
            {
              title: "Optimize resources management",
              text: "Allocate and track resources efficiently to prevent shortages and ensure smooth event execution."
            },
            {
              title: "Facilitate timely completion",
              text: "Complete all tasks on schedule to avoid last-minute rushes and uphold quality standards."
            },
            {
              title: "Control budget and costs",
              text: "Monitor and manage expenses to prevent budget overruns and keep the event within financial limits."
            },
            {
              title: "Enhance coordination",
              text: "Use effective communication tools to improve coordination and reduce confusion among team members."
            },
            {
              title: "Reduce stress and panic",
              text: "Quickly address problems to avoid disruptions and ensure smooth operations during the event."
            }
          ]
        },
        { subLabels: ["Prototype"], video: "images/glamorous-prototype.mp4", fluid: true },
        {
          subLabels: ["Try it yourself"],
          // "content-scaling=fixed" (Figma's default share-link setting)
          // renders the prototype at its real 1440×1024 pixel size and lets
          // the iframe's own bounds crop whatever doesn't fit - inside this
          // 16:10 embed box (not a 1440:1024/1.41 box), that cut off the
          // design. "scale-down" instead shrinks the whole frame to fit the
          // available space, so the full prototype shows, scaled to the box
          // rather than cropped by it. Same fix as Kill Bill's working embed.
          embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbjZobCbC0vyakVW25PrVQW%2FVirtualFashion%3Fcontent-scaling%3Dscale-down%26kind%3Dproto%26node-id%3D1014-27898%26page-id%3D0%253A1%26scaling%3Dscale-down%26show-proto-sidebar%3D1%26starting-point-node-id%3D1014%253A27151%26t%3D9bUpbgJVtaLdJcYa-1%26viewport%3D493%252C1468%252C0.17",
          embedLink: "https://www.figma.com/proto/bjZobCbC0vyakVW25PrVQW/VirtualFashion?content-scaling=scale-down&kind=proto&node-id=1014-27898&page-id=0%3A1&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=1014%3A27151&t=9bUpbgJVtaLdJcYa-1&viewport=493%2C1468%2C0.17"
        },
        {
          subLabels: ["Screenshots"],
          imageGrid: {
            cols: 2,
            images: [
              "images/glamorous-shot-1.png",
              "images/glamorous-shot-2.png",
              "images/glamorous-shot-3.png",
              "images/glamorous-shot-4.png",
              "images/glamorous-shot-5.png",
              "images/glamorous-shot-6.png"
            ]
          }
        },
        {
          subLabels: ["Look&Fill"],
          imageGrid: {
            cols: 1,
            images: ["images/glamorous-lookfill-1.png", "images/glamorous-lookfill-2.png"]
          }
        },
        {
          subLabels: ["Wireframes"],
          imageGrid: {
            cols: 1,
            images: ["images/glamorous-wireframes-1.png", "images/glamorous-wireframes-2.png"]
          }
        },
        { label: "Design kit", className: "guide-block--section" },
        { subLabels: ["Color palette"], image: "images/glamorous-palette.png", fluid: true },
        { subLabels: ["Typography"], image: "images/glamorous-typography.png", fluid: true },
        { subLabels: ["Icons&features"], image: "images/glamorous-icons.png", fluid: true },
        { label: "Research", className: "guide-block--section" },
        { subLabels: ["Process"], image: "images/glamorous-process.png", fluid: true },
        {
          subLabels: ["Occupation research"],
          table: {
            head: ["Occupation", "Interface"],
            rows: [
              {
                title: "Production overview",
                text: "Oversee and view upcoming and future productions by their scheduled dates.",
                value: "Diary/calendar (time)"
              },
              {
                title: "Production volume management",
                text: "Monitor the number of productions occurring simultaneously to ensure proper resource allocation.",
                value: "timeline/graph (time)"
              },
              {
                title: "Operational oversight",
                text: "Supervise the conduct of each production to ensure they meet requirements and deadlines.",
                value: "graph (comparison)"
              },
              {
                title: "Progress reporting",
                text: "Receive updates on the progress of each production to stay informed and address any issues promptly.",
                value: "graph (comparison)"
              },
              {
                title: "Alert management",
                text: "Get notifications when a production is ready or if it fails to meet the defined timelines or requirements.",
                value: "Notification"
              },
              {
                title: "Personal management",
                text: "Assign to each productions a manager, provide briefs, and manage personnel allocation for each production.",
                value: "Table (organization)"
              },
              {
                title: "Inventory management",
                text: "Order and manage inventory required for each production, ensuring it matches the investment levels.",
                value: "Table/list (organization)"
              },
              {
                title: "Financial management",
                text: "Define and oversee the budget for each production, control budget distribution among teams, and approve financial allocations.",
                value: "graph/table (comparison)"
              }
            ]
          }
        },
        { subLabels: ["Information architecture"], image: "images/glamorous-ia.png", fluid: true }
      ]
    },
    {
      id: "kill-bill",
      title: "Kill Bill",
      // "Interactive" isn't one of the 8 main filter categories, but it's a
      // more honest label than any of them for an actual interactive
      // website - kept as the visible eyebrow text, with the filter
      // membership set explicitly below.
      category: "Interactive",
      altCategories: ["Web Design"],
      type: "playground",
      year: "",
      thumb: "images/killbill-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "An interactive website offering the services of hired killers from the assassin unit in the movie “Kill Bill” - “The Deadly Viper Squad”. The visual language draws on the film's homage to martial arts and western movies - wanted-poster layouts, bold condensed typography, and a red, yellow and black palette - carried across the landing page, website and products.",
      tools: ["Figma", "Illustrator", "Photoshop", "After Effects"],
      sharedColumn: true,
      // Order and section breakdown follows the live Behance case study
      // exactly (Products, then Visual research, then Graphic language) -
      // videos and the web prototype embed will be added later, so only the
      // static image sections are here for now.
      extraGuides: [
        {
          subLabels: ["Landing page"],
          video: "images/killbill-landing-video.mp4",
          fluid: true
        },
        {
          label: "Website",
          video: "images/killbill-website-video.mp4",
          fluid: true
        },
        {
          label: "Web prototype",
          embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDXDzpKvntoYlNtEoNAfxEs%2FKill-Bill---Website%3Fkind%3Dproto%26node-id%3D665-12757%26page-id%3D665%253A7905%26scaling%3Dscale-down%26starting-point-node-id%3D665%253A12757%26t%3D8QkY3I1ABXjWAViB-1%26type%3Ddesign%26viewport%3D72%252C-1374%252C0.08",
          embedLink: "https://www.figma.com/proto/DXDzpKvntoYlNtEoNAfxEs/Kill-Bill---Website?kind=proto&node-id=665-12757&page-id=665%3A7905&scaling=scale-down&starting-point-node-id=665%3A12757&t=8QkY3I1ABXjWAViB-1&type=design&viewport=72%2C-1374%2C0.08"
        },
        {
          label: "Products",
          row: {
            images: [
              "images/killbill-poster-1.png",
              "images/killbill-poster-2.png",
              "images/killbill-poster-3.png"
            ]
          }
        },
        { image: "images/killbill-cardstack-lite.webp", fluid: true },
        {
          label: "Visual research",
          fluid: true,
          parts: [
            { subLabels: ["Colors"], image: "images/killbill-vr-colors.png" },
            { subLabels: ["Conceptual"], image: "images/killbill-vr-conceptual.png" },
            { subLabels: ["Compositions"], image: "images/killbill-vr-compositions.png" },
            { subLabels: ["Common elements"], image: "images/killbill-vr-common-elements.png" },
            { subLabels: ["Typography"], image: "images/killbill-vr-typography.png" },
            { subLabels: ["Layout"], image: "images/killbill-vr-layout.png" },
            { subLabels: ["Graphic language"], image: "images/killbill-vr-graphic-language.png" },
            { subLabels: ["History"], image: "images/killbill-vr-history.png" }
          ]
        },
        {
          label: "Graphic language",
          align: "left",
          className: "kb-graphic-top",
          columns: {
            images: [
              { image: "images/killbill-logo.png", label: "Logo" },
              { image: "images/killbill-figurative.png", label: "Figurative language" }
            ]
          }
        },
        {
          align: "left",
          className: "kb-graphic-bottom",
          columns: {
            images: [
              { image: "images/killbill-fonts.png", label: "Fonts" },
              { image: "images/killbill-alphabet.png" }
            ]
          }
        },
        {
          align: "left",
          subLabels: ["Color palette"],
          image: "images/killbill-palette.png",
          fluid: true
        }
      ]
    },
    {
      id: "waiters-protest",
      title: "The Waiters Protest",
      category: "Illustration",
      type: "playground",
      year: "",
      thumb: "images/waitersprotest-thumb.jpg",
      // No cover/strip: the installed-table shot it used to hold now sits
      // flush under the table set and bill, where it belongs.
      layout: "strip",
      sharedColumn: true,
      about: "As part of my Communication Design studies I was asked to make a protest design. Following my work as a waitress, I chose to protest the disrespectful attitude of customers towards waiters. After deep research I decided that the best place to convey the message would be in a restaurant - by designing the elements in it.",
      tools: ["Illustrator", "Procreate"],
      // Section order follows the live Behance case study: Job ads → Menu →
      // Order time → Table set & bill → Banner → Gifs → highlight reel, with
      // the process sections (research, graphic language) kept up front and
      // the Instagram grid at the end - neither is on Behance.
      extraGuides: [
        { label: "Job ads", image: "images/waiters-jobads.png", fluid: true },
        // Menu and Order time are each a single composed image: the two photos
        // scaled to one shared height and butted together, so the pair is
        // flush, square-cornered, and spans the column exactly like Behance -
        // rather than two cards squeezed to equal widths with a gap between.
        { label: "Menu", image: "images/waiters-menu-pair.jpg", fluid: true },
        { label: "Order time", image: "images/waiters-ordertime.jpg", fluid: true },
        {
          label: "Table set & bill",
          stack: [
            "images/waiters-table-placemat.jpg",
            "images/waiters-table-bill.jpg",
            "images/waiters-install.jpg"
          ]
        },
        {
          label: "Banner",
          row: {
            images: [
              "images/waiters-banner-pink.jpg",
              "images/waiters-banner-yellow.jpg",
              "images/waiters-banner-teal.jpg"
            ]
          }
        },
        {
          // The three animated banners sit side by side with a real gap, in
          // the same left-to-right positions the joined-up version had. Split
          // out of the single wide file so the gaps are page background rather
          // than white bands baked into the video, and so each one reaches the
          // column edges evenly.
          label: "Gifs",
          row: {
            videos: [
              "images/waiters-gif-faucet.mp4",
              "images/waiters-gif-lips.mp4",
              "images/waiters-gif-shoe.mp4"
            ]
          }
        },
        {
          // The posts sit beside the profile screenshot ("side"), so the block
          // reads as the real feed. waiters-ig-phone.jpg is gone - it was a
          // duplicate of the angled menu photo, which already appears up in
          // the Menu section.
          label: "Instagram",
          grid: {
            cols: 3,
            images: [
              "images/waiters-ig-01.jpg",
              "images/waiters-ig-02.jpg",
              "images/waiters-ig-03.jpg",
              "images/waiters-ig-04.jpg",
              "images/waiters-ig-05.jpg",
              "images/waiters-ig-06.jpg"
            ],
            side: "images/waiters-ig-profile.jpg"
          }
        },
        {
          label: "Highlight - #Waiters_share",
          video: "images/waiters-highlights.mp4",
          fluid: true
        },
        // Process sections close the page, after the campaign itself. The
        // visual-language frames are transparent PNGs, so they sit on the page
        // with no panel behind them, at the same column width as everything
        // above.
        {
          label: "Graphic language",
          fluid: true,
          parts: [
            { subLabels: ["Colors"], image: "images/waiters-colors.png" },
            { subLabels: ["Typography"], image: "images/waiters-typography.png" },
            { subLabels: ["Figurative language"], image: "images/waiters-figurative.png" }
          ]
        },
        { label: "Visual research", image: "images/waiters-visual-research.jpg", fluid: true }
      ]
    },
    {
      id: "first-rain-festival",
      title: "First Rain Festival",
      category: "Branding",
      type: "playground",
      year: "",
      thumb: "images/yorafest-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "Branding a unique water festival where participants celebrate together by dancing and singing to welcome the first rain.",
      tools: ["Illustrator", "Photoshop", "Procreate", "After Effects"],
      sharedColumn: true,
      extraGuides: [
        {
          className: "guide-block--spec",
          label: "Target audience",
          text: "Young people aged 18-35.\nLovers of nature, music, spirituality, and Jewish traditions."
        },
        {
          className: "guide-block--spec",
          label: "Brand values",
          chips: ["Authentic", "Eco-conscious", "Spiritual", "Innovative", "Communal"]
        },
        { subLabels: ["Entrance sign"], image: "images/yorafest-entrance.png", fluid: true },
        { subLabels: ["Wristbands and entrance tickets"], image: "images/yorafest-wristbands.png", fluid: true },
        {
          subLabels: ["Posters"],
          row: {
            images: [
              "images/yorafest-poster-1.png",
              "images/yorafest-poster-2.png",
              "images/yorafest-poster-3.png",
              "images/yorafest-poster-4.png",
              "images/yorafest-poster-5.png"
            ]
          }
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { image: "images/yorafest-toilet.png", label: "Toilet sign" },
              { image: "images/yorafest-illustration.png", label: "Illustration" }
            ]
          }
        },
        { subLabels: ["Teaser"], video: "images/yorafest-teaser.mp4", fluid: true },
        { subLabels: ["Presentation"], image: "images/yorafest-presentation-lite.webp", fluid: true },
        { label: "Visual research", className: "guide-block--section" },
        { image: "images/yorafest-research.png", fluid: true },
        { label: "Graphic language", className: "guide-block--section" },
        { subLabels: ["Colors"], image: "images/yorafest-colors.png", fluid: true },
        { subLabels: ["Typography"], image: "images/yorafest-typography.png", fluid: true },
        { subLabels: ["Figurative language"], image: "images/yorafest-figurative.png", fluid: true }
      ]
    },
    {
      id: "tango",
      title: "It Takes 2 for Tango",
      category: "Branding",
      type: "playground",
      year: "",
      thumb: "images/tango-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "It Takes 2 for Tango is branding for a dog trainer. The main concept is to create a common language between the dog and its owner - this way, they will understand each other and be able to develop as a team, much like in the tango dance. The identity carries that idea through a single continuous line-drawing style (echoing the dance's connected steps), used across a logo, business cards, and a guide booklet for new dog owners.",
      tools: ["Illustrator", "Photoshop", "Procreate"],
      stack: {
        label: "New customer training guide",
        images: [
          "images/tango-guide-00-cover.jpg",
          "images/tango-guide-01.jpg",
          "images/tango-guide-02.jpg",
          "images/tango-guide-03.jpg",
          "images/tango-guide-04.jpg"
        ]
      },
      extraGuides: [
        { label: "Business card", image: "images/tango-bizcard.jpg" },
        { label: "T-shirt design", image: "images/tango-tshirt.jpg" },
        {
          label: "Visual language",
          align: "left",
          parts: [
            { image: "images/tango-visual-top.png", subLabels: ["Color palette", "Logo"] },
            { image: "images/tango-visual-bottom.png", subLabels: ["Typography"] }
          ]
        }
      ]
    },
    {
      id: "wedding-invitation",
      title: "Wedding Invitation",
      // A single invitation piece, not a brand system (no logo/guidelines
      // behind it) - kept as an honest standalone label, matching only
      // Playground rather than any of the 8 filter groups.
      category: "Print Design",
      type: "playground",
      thumb: "images/wedding-thumb.jpg",
      cover: "",
      layout: "strip",
      sharedColumn: true,
      about: "An invitation design inspired by the iconic energy of Dirty Dancing, reimagined through a bold, playful visual language influenced by Miyazaki. The design combines retro typography, cinematic composition, and expressive imagery to create a nostalgic yet contemporary invitation with a strong sense of movement and personality.",
      tools: ["Photoshop", "Illustrator"],
      // Side by side, no arrows - same "columns" treatment as Typographic
      // Hafla's mockup row: each poster keeps its own real proportion at a
      // shared height instead of being stacked full-width one under the
      // other, and (unlike a stage/carousel box) plain <img> tags never get
      // paged-through arrows in the first place.
      extraGuides: [
        { className: "wedding-posters", columns: {
          images: ["images/wedding-1.jpg", "images/wedding-2.jpg"]
        } }
      ]
    },
    {
      id: "herstory",
      title: "HerStory",
      // "Interactive" kept as the visible eyebrow text (more accurate than
      // any of the 8 main categories for an AI-generated interactive
      // story); its deliverables are videos, so it filters under Motion.
      category: "Interactive",
      altCategories: ["Motion"],
      type: "playground",
      year: "",
      thumb: "images/herstory-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "HerStory is an interactive storytelling project that revives historical female figures through AI-generated visuals and archival footage. It offers an immersive way to hear their voices, witness their struggles, and celebrate their impact - making history more accessible, relatable, and engaging by bringing them to life on an Instagram page.\n\nAs part of this larger project, the current work focuses solely on Frida Kahlo, bringing her journey to life through a unique visual and narrative experience.",
      tools: ["Midjourney", "Kling", "After Effects", "Photoshop"],
      sharedColumn: true,
      extraGuides: [
        {
          className: "herstory-video-row",
          columns: {
            images: [
              { video: "images/herstory-teaser.mp4", label: "Teaser", controls: true },
              { video: "images/herstory-story.mp4", label: "Frida's Kahlo story", controls: true }
            ]
          }
        },
        { label: "Frida's Kahlo bio", video: "images/herstory-bio.mp4", fluid: true }
      ]
    },
    {
      id: "goodgirl-book",
      title: "Be a Good Girl",
      // A picture book, not brand-identity work - Illustration only.
      category: "Illustration",
      type: "playground",
      year: "",
      thumb: "images/goodgirl-thumb.jpg",
      cover: "",
      layout: "guide",
      tagline: "A conceptual picture book questioning what \"be a good girl\" really asks of us.",
      about: "A conceptual picture book about a girl who was always told to behave well, listen, and wait patiently. She's instructed to always be clean, well-groomed, sociable, and nice. But what were they really asking for? To simply be a \"good girl\"...",
      tools: ["Procreate", "InDesign", "Photoshop"],
      guide: { label: "The book", key: "goodgirlbook", count: 14, rtl: true, hideCount: true },
      guide2: { noLabel: true, video: "images/goodgirl-video.mp4" },
      guide3: { label: "Visual language", key: "goodgirlvisual", count: 1, ext: "png", subLabels: ["Color palette", "Typography"] }
    },
    {
      id: "crawdads-sing",
      title: "Where the Crawdads Sing",
      category: "Motion",
      type: "playground",
      year: "",
      thumb: "images/crawdads-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "An opening title sequence for a movie based on the book. The story centers around the \"Marsh Girl,\" Kya, who is abandoned by her family in the remote marshlands of North Carolina and learns to survive with the guidance of nature. The opening is built on that bond - moving through the marsh's trees, water, plants and flowers, with the credits set into each frame.",
      tools: ["After Effects", "Unity"],
      extraGuides: [
        { label: "Opening", video: "images/crawdads-opening-video.mp4", fluid: true },
        {
          label: "Style frames",
          stack: [
            "images/crawdads-frame-01.jpg",
            "images/crawdads-frame-02.jpg",
            "images/crawdads-frame-03.jpg",
            "images/crawdads-frame-04.jpg",
            "images/crawdads-frame-05.jpg"
          ]
        },
        { label: "Typography", image: "images/crawdads-typography.png", fluid: true, align: "left" }
      ]
    },
    {
      id: "la-llorona",
      title: "La Llorona",
      category: "Illustration",
      type: "playground",
      year: "",
      thumb: "images/lallorona-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "Character design for La Llorona, the weeping woman of Mexican folklore - a beautiful woman with long dark hair and large eyes, who wears luxurious dresses and unique jewelry. After her husband discovers her infidelity, he kills her and their children, and she returns as a vengeful ghost, mourning her lost children with a mix of rage and sorrow. The design follows her through expressions, props, and a final scene.",
      tools: ["Procreate", "Nano Banana"],
      extraGuides: [
        { image: "images/lallorona-characters-row.png", fluid: true },
        { image: "images/lallorona-sketch-props.png", fluid: true },
        { image: "images/lallorona-diorama.jpg", fluid: true }
      ]
    },
    {
      id: "hypoxia",
      title: "Hypoxia",
      category: "Photography",
      type: "playground",
      thumb: "images/hypoxia-thumb.jpg",
      cover: "",
      layout: "guide",
      about: "“Hypoxia” is a concept photography catalog exploring our profound reliance on oxygen, intertwining the metaphoric and the physical. The filming took place during the COVID-19 period and was also a major source of inspiration for the project.",
      tools: ["Photoshop"],
      guide: { label: "The catalog", key: "hypoxiabook", count: 12, hideCount: true },
      guide2: { noLabel: true, video: "images/hypoxia-video.mp4" }
    },
    {
      id: "mixture",
      title: "Mixture",
      category: "Motion",
      type: "playground",
      thumb: "images/mixture-thumb.jpg",
      cover: "",
      layout: "strip",
      sharedColumn: true,
      about: "“Mixture” is a music channel which features a fusion of pop, eastern, techno, funk, country and rock music. These promo videos celebrate the channel's diverse musical offerings through visual rhythm, vibrant visuals, genre-specific color schemes, and seamless transitions.",
      tools: ["After Effects"],
      // The channel-brand video opens, then the full Behance page slice that
      // follows it (title card through the Pop bumper's lead-in), then the
      // Pop bumper video itself, then the next full slice (the rest of the
      // page, techno/country/pop through the closing line) - both stills at
      // the same fluid width as the videos, so everything shares one column.
      extraGuides: [
        { video: "images/mixture-brand-video.mp4", fluid: true, sound: true },
        { image: "images/mixture-slice-2.png", fluid: true },
        { video: "images/mixture-pop-bumper.mp4", fluid: true, sound: true },
        { image: "images/mixture-slice-3.png", fluid: true }
      ]
    },
    {
      id: "hayao-miyazaki-catalog",
      title: "The Magical World of Hayao Miyazaki",
      // An editorial catalog project, not brand-identity work - kept as an
      // honest standalone label, matching only Playground rather than any of
      // the 8 filter groups.
      category: "Catalog Design",
      type: "playground",
      year: "",
      thumb: "images/ghibli-thumb.jpg",
      cover: "",
      layout: "strip",
      sharedColumn: true,
      about: "A catalog design about Hayao Miyazaki's creations and his best movies.{br}Created as part of my second year of studies.",
      tools: ["InDesign", "Photoshop", "Lightroom"],
      // Section order and grouping follows the live Behance case study
      // exactly: cover+spine and shiriau+toc are each a 2-across row, the
      // strong-women/sketches/spirited-away preview is a 3-across row, and
      // the Kiki's Delivery Service deep-dive is two 2-across rows - not one
      // image per row. The page-flip video sits above Graphic Language,
      // whose background is removed so the swatches float on the page like
      // every other project's Graphic Language section.
      extraGuides: [
        // "The Catalog" heads the whole catalog-photography group - cover
        // trio, painting, and every spread row below - not just the single
        // painting image; only the next label ("Graphic Language") starts a
        // new section.
        { label: "The Catalog", image: "images/hayao-cover-trio-lite.webp", fluid: true },
        { image: "images/hayao-painting.jpg", fluid: true },
        {
          row: {
            images: ["images/hayao-shiriau.jpg", "images/hayao-toc.jpg"]
          }
        },
        {
          row: {
            images: [
              "images/hayao-strongwomen.jpg",
              "images/hayao-sketches.jpg",
              "images/hayao-spiritedaway-title.jpg"
            ]
          }
        },
        {
          row: {
            images: ["images/hayao-kiki-grid.jpg", "images/hayao-kiki-quote.jpg"]
          }
        },
        {
          row: {
            images: ["images/hayao-kiki-title.jpg", "images/hayao-kiki-heroine.jpg"]
          }
        },
        { video: "images/hayao-flip.mp4", fluid: true },
        // One unsplit image (as originally provided) with both sub-labels in
        // the same row above it, each roughly over its own half - "Colors"
        // over the swatches, "Typography" over the type specimens.
        {
          label: "Graphic language",
          subLabels: ["Colors", "Typography"],
          image: "images/hayao-graphic-language.png",
          fluid: true
        }
      ]
    },
    {
      id: "beatfit",
      title: "BeatFit",
      category: "Illustration",
      type: "playground",
      thumb: "images/beatfit-thumb.png",
      cover: "",
      layout: "strip",
      about: "Icon design for a music application “BeatFit”. An application which curates playlists tailored to the user's specific workout routine.",
      tools: ["Illustrator", "Photoshop"],
      extraGuides: [
        {
          row: {
            images: [
              { image: "images/beatfit-icon-skateboarding.png", label: "Skateboarding" },
              { image: "images/beatfit-icon-weightlifting.png", label: "Weightlifting" },
              { image: "images/beatfit-icon-jumprope.png", label: "Jump rope" },
              { image: "images/beatfit-icon-soccer.png", label: "Soccer" },
              { image: "images/beatfit-icon-stretching.png", label: "Stretching" },
              { image: "images/beatfit-icon-meditation.png", label: "Meditation" }
            ]
          }
        },
        { label: "Color palette", image: "images/beatfit-palette.png", fluid: true }
      ]
    },
    {
      id: "sugar-makes-you-smile",
      title: "Sugar Makes You Smile",
      category: "Branding",
      // Hand-drawn stickers - also surfaces under Illustration.
      altCategories: ["Illustration"],
      type: "playground",
      thumb: "images/sugar-thumb.png",
      cover: "",
      layout: "strip",
      sharedColumn: true,
      about: "This project explores the bad impact that sweets have on our teeth. It aims to raise awareness about the alarming consequences of excessive sugar consumption through art-directed photography and a new visual language. I strive to inspire healthier choices, improve oral hygiene practices, and encourage a better smile.",
      tools: ["Illustrator", "Photoshop", "Procreate"],
      extraGuides: [
        {
          split: {
            left: {
              label: "Stickers for WhatsApp",
              note: "https://getstickerpack.com/stickers/sugarstickers",
              noteLabel: "View sticker pack ↗",
              row: {
                images: [
                  "images/sugar-sticker-brush.png",
                  "images/sugar-sticker-ilovesugar.png",
                  "images/sugar-sticker-smilecircle.png",
                  "images/sugar-sticker-smackit.png",
                  "images/sugar-sticker-heart.png",
                  "images/sugar-sticker-sweetdrinks.png",
                  "images/sugar-sticker-warning.png",
                  "images/sugar-sticker-star.png"
                ]
              }
            },
            right: {
              label: "Brochure",
              image: "images/sugar-brochure.png"
            }
          }
        },
        {
          label: "Posters",
          row: {
            images: [
              "images/sugar-poster-1.png",
              "images/sugar-poster-2.png",
              "images/sugar-poster-3.png",
              "images/sugar-poster-4.png",
              "images/sugar-poster-5.png",
              "images/sugar-poster-6.png"
            ]
          }
        },
        {
          label: "Graphic language.",
          align: "left",
          columns: {
            images: [
              { image: "images/sugar-colors.png", label: "Colors" },
              { image: "images/sugar-typography.png", label: "Typography" }
            ]
          }
        }
      ]
    },
    {
      id: "final-project",
      title: "Not By Chance",
      // "Interactive" kept as the visible eyebrow text - a grad-school
      // interactive installation, not a website. Filters under Illustration
      // (the posters/screens are illustrated) and Product Design (the flow
      // itself is a UX exercise).
      category: "Interactive",
      altCategories: ["Illustration", "Product Design"],
      type: "playground",
      year: "",
      thumb: "images/nbc-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "An interactive installation exploring the hidden mechanisms behind the choices we make. Through Ella's story, participants face a series of decisions that shape her journey in real time. Each choice creates a different path, reflecting the emotions, beliefs, past experiences, and external influences that guide our own decisions. The project invites us to question how much control we truly have over our lives - and whether we can change our path.",
      tools: ["Procreate", "Photoshop", "Figma", "Illustrator"],
      sharedColumn: true,
      extraGuides: [
        {
          label: "User flows",
          text: "Different flow, different story.",
          className: "guide-block--section"
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { video: "images/nbc-live-flow.mp4", label: "Live flow (from exhibition)" },
              { image: "images/nbc-screens.jpg", label: "Screens" }
            ]
          }
        },
        {
          imageGrid: {
            cols: 2,
            images: [
              { video: "images/nbc-flow-1.mp4", label: "Flow 1" },
              { video: "images/nbc-flow-2.mp4", label: "Flow 2" }
            ]
          }
        },
        { subLabels: ["Posters"], image: "images/nbc-posters-lite.webp", fluid: true },
        { subLabels: ["Images from the exhibition"], image: "images/nbc-exhibition-lite.webp", fluid: true },
        {
          className: "nbc-exh-row",
          imageGrid: {
            cols: 2,
            images: [
              { video: "images/nbc-exhibition-1.mp4" },
              { video: "images/nbc-exhibition-2.mp4" }
            ]
          }
        }
      ]
    },
    {
      id: "tooth-fairy",
      title: "The Tooth Fairy",
      category: "Game Design",
      type: "playground",
      year: "",
      thumb: "images/tooth-fairy-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "Horror game design.\nYou've been assigned a special task, one only a brave tooth fairy can handle.\nIn a remote and abandoned place, there are scattered teeth crucial for preserving the Tooth Fairy Kingdom. Your mission is to collect all 15 teeth to save our realm from destruction.\nBut beware! The area is infested with Huggy Waggy dolls, fiercely protective of their territory. Avoid them at all costs. Good Luck!",
      tools: ["Unity"],
      extraGuides: [
        { label: "The game", video: "images/tooth-fairy-game-video.mp4", fluid: true },
        {
          label: "Styleframes",
          stack: [
            "images/tooth-fairy-frame-01.jpg",
            "images/tooth-fairy-frame-02.jpg",
            "images/tooth-fairy-frame-03.jpg",
            "images/tooth-fairy-frame-04.jpg",
            "images/tooth-fairy-frame-05.jpg"
          ]
        }
      ]
    },
    {
      id: "deadline",
      title: "DeadLine",
      category: "Game Design",
      type: "playground",
      year: "",
      thumb: "images/deadline-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "A VR game that humorously captures the experiences and challenges of pursuing a degree in visual communication.\nThe player must navigate obstacles and embrace endless opportunities for growth along the way.\nThe environment design is inspired by the Bauhaus movement.",
      tools: ["Unity"],
      extraGuides: [
        { label: "The game", video: "images/deadline-game-video.mp4", fluid: true },
        { label: "Styleframes", image: "images/deadline-styleframes-lite.webp", fluid: true }
      ]
    },
    {
      id: "typographic-hafla",
      title: "Typographic Hafla",
      category: "Branding",
      type: "playground",
      year: "",
      thumb: "images/typographic-hafla-thumb.jpg",
      cover: "",
      layout: "strip",
      about: "This project is a branding concept for the final celebration of a typography course, inspired by the lively spirit of a \"Hafla\". The design blends the festive atmosphere of a hafla with the core elements of typography, creating a vibrant visual language. The goal was to infuse the event with energy and excitement, while showcasing the creative journey and accomplishments of the course.",
      tools: ["Illustrator"],
      sharedColumn: true,
      extraGuides: [
        {
          label: "Poster & Invitation",
          image: "images/typographic-hafla-poster-invitation.png",
          fluid: true
        },
        {
          className: "hafla-mockup-row",
          columns: {
            images: [
              { image: "images/typographic-hafla-mockup.png" },
              { video: "images/typographic-hafla-invitation-video.mp4" }
            ]
          }
        },
        {
          label: "Graphic language",
          fluid: true,
          parts: [
            { subLabels: ["Colors"], image: "images/typographic-hafla-colors.png" },
            { subLabels: ["Typography"], image: "images/typographic-hafla-typography.png" }
          ]
        }
      ]
    },
    {
      id: "secureot-labs",
      title: "SecureOT Labs",
      hideCardYear: true,
      category: "Web Design",
      // The 3D-modeled industrial facility on the landing page (reacting to
      // scroll/cursor) and the feature-selection product panel are real
      // interaction/UX work, not just visual design - also answers to
      // Product Design. And unlike the Powtoon work, the brand here was
      // defined from scratch (values, concept, visual language), so it's
      // honest Branding too.
      altCategories: ["Product Design", "Branding"],
      type: "playground",
      year: "",
      thumb: "images/secureot-labs-thumb.jpg",
      cover: "",
      layout: "strip",
      sharedColumn: true,
      tagline: "Transparent security. Concrete resilience.",
      about: "SecureOT Labs is a speculative rebrand and landing page for an OT/ICS cybersecurity company, developed from audience and brand research through visual exploration to a coded animated website.",
      tools: ["Claude Design", "NotebookLM", "Gemini", "Midjourney"],
      extraGuides: [
        { label: "Prototype", className: "guide-block--section" },
        // The real coded landing page, running live in the page - the export
        // lives in prototypes/secureot/ (its own index.html + runtime +
        // assets), so it's scrollable and clickable here rather than a set
        // of screenshots. "embedLink" opens it full-size in a new tab.
        {
          embed: "prototypes/secureot/index.html",
          // No embedWidth/embedHeight here on purpose: those render the page
          // at a 1440px viewport and shrink the whole frame to the column
          // (~0.72), which made every bit of type inside come out a third
          // smaller than the rest of the site - the page's own nav and its
          // dense product labels read tiny next to the case study around them.
          // The landing page has no width breakpoints (fluid clamp/auto-fit
          // grids, capped at 1400px), so it lays itself out as a desktop page
          // at the column width too - running it 1:1 there keeps the same
          // composition at true size. Its proportion is set in styles.css.
          embedLink: "prototypes/secureot/index.html",
          embedLinkLabel: "Open the live prototype"
        },
        { label: "Research", className: "guide-block--section" },
        {
          className: "guide-block--spec",
          label: "Target audience",
          text: "CISOs, OT Managers, and Control Systems Engineers responsible for the systems behind critical, always-on infrastructure - energy, water, gas, and electricity."
        },
        {
          className: "guide-block--spec",
          label: "Core values for the company",
          cardCols: 3,
          cards: [
            { title: "Proactive defense", text: "Address problems before they surface." },
            { title: "Operational resilience", text: "Production that never has to stop." },
            { title: "Continuous innovation", text: "Attackers evolve daily - AI is essential to stay ahead and protect the infrastructure." }
          ]
        },
        {
          className: "guide-block--spec",
          label: "Brand values",
          cardCols: 3,
          cards: [
            { title: "Resilient", text: "Proactive protection that supports operational continuity and stops threats before they reach production." },
            { title: "Innovative", text: "Forward-thinking SCADA and ICS security, tailored to the operational DNA of each industrial environment." },
            { title: "Technological", text: "Real-time monitoring of complex industrial protocols - visibility into the core of machines, systems and networks." },
            { title: "Stability", text: "Reliable protection for strategic assets: uninterrupted operations, long-term continuity, peace of mind." },
            { title: "Meticulous", text: "Rigorous governance, compliance and risk management built for the most demanding industrial standards." }
          ]
        },
        { label: "Visual research", className: "guide-block--section" },
        // One board per brand value, each labelled with the value it explores
        // (the last one is the industry itself rather than a value). Every
        // conclusion follows the same tight shape - what the board showed,
        // what I took from it (bolded so it scans on its own), and where
        // that landed in the finished page - instead of re-describing what's
        // already visible in the image above it.
        // "guide-block--note" keeps them as normal left-aligned paragraphs
        // (see project.html) instead of centered captions, sitting close
        // under the board they belong to.
        { subLabels: ["Resilient"], image: "images/secureot-mood-resilience.jpg", fluid: true },
        { className: "guide-block--note", text: "**Contrast between rigid materials and organic human elements** became central to the visual direction, expressing strength without losing the people behind the system. Layering, repeated geometry and connected structures reinforce the idea of resilience through support, continuity and growth." },
        { subLabels: ["Innovative"], image: "images/secureot-mood-innovative.jpg", fluid: true },
        { className: "guide-block--note", text: "**Pixels, small geometric units and illuminated details** suggest innovation by revealing how a larger system is built from smaller parts. These elements informed the modular digital language and glowing accents used throughout the design." },
        { subLabels: ["Technological"], image: "images/secureot-mood-technological.jpg", fluid: true },
        { className: "guide-block--note", text: "**Dark surfaces, cyan highlights, grids, geometric lines and perspective** define the technological visual language. Filled and outlined forms, together with line-based structures, create depth, movement and a sense of connected systems." },
        { subLabels: ["Stability"], image: "images/secureot-mood-stability.jpg", fluid: true },
        { className: "guide-block--note", text: "**Balance, strong foundations and clear geometric relationships** communicate stability. Structured alignment and controlled compositions create a sense of reliability while still allowing tension between balance and imbalance." },
        { subLabels: ["Meticulous"], image: "images/secureot-mood-meticulous.jpg", fluid: true },
        { className: "guide-block--note", text: "**Geometric forms, grids, repetition and symmetry** communicate precision and control. Repeated modular elements create a visual system that feels ordered, measured and deliberate." },
        { subLabels: ["Manufacturing"], image: "images/secureot-mood-manufacturing.jpg", fluid: true },
        { className: "guide-block--note", text: "**Industrial environments, strong structures and the combination of people with technology** shaped the visual direction. The photography keeps the brand grounded in real operational spaces, while unusual viewpoints reinforce the idea of constant visibility without interrupting the work itself." },
        // What the research concluded - the concept and the design direction
        // it produced. They close the research part (rather than opening the
        // page) because they're its output, not its brief. The tagline gets
        // its full weight back here as "statement" - a short bold line above
        // the explanation, so the concept the research actually produced
        // reads as the takeaway of the section rather than as a repeated
        // header line.
        {
          className: "guide-block--spec",
          label: "Concept",
          statement: "Transparent Security. Concrete Resilience.",
          text: "Security you can see through rather than security that walls you off - the network opened up layer by layer, and protection that grows inside the rigid industrial environment instead of fighting it."
        },
        {
          className: "guide-block--spec",
          label: "Design direction",
          text: "Grid as the anchor - geometric shapes and straight lines carrying the order of the plant floor.\nDepth and transparency - layered typography and three-dimensional forms standing in for deep packet inspection, the ability to look inside the protocols.\nColor contrast - a near-black base for stability and authority, with neon cyan for the live traffic moving through the network."
        },
      ]
    }
  ],

  about: {
    // Two short paragraphs - the capability blocks and the experience table
    // under them carry the detail, so this stays positioning and philosophy
    // only: who he is and what the work does (with AI folded in as one clause
    // of the process, not its own paragraph), then function-first and why
    // that matters. The B.Des line moved out of here and sits with the
    // experience table as Education (see "education" below).
    intro: "I'm Matan, a designer working across product, brand, and marketing, currently at Powtoon. Most of my work starts with something complex - a product, a message, a system that's hard to explain - and turns into something clear: a concept, a structure, and a visual language that holds up wherever it's used. AI sits inside that process now, from research and early exploration through imagery and quick prototypes.",
    values: "Function comes first for me. Once I understand what something actually needs to do, the concept and the visual language follow from it - and that's the part I find most interesting: design decides how people understand something, how they feel about it, and what they do next.",
    // Rendered under the experience table (app.js), as one row in the same
    // compact three-column style - degree, school, years.
    education: { role: "B.Des in Visual Communication", org: "Holon Institute of Technology", years: "2021–2025" },
    skillGroups: [
      // Reworked so the three tags read as product, brand, and marketing
      // rather than one flat "marketing designer" list - the projects in
      // this portfolio genuinely span all three.
      { label: "Product", items: ["Landing & product pages", "UX/UI thinking", "Interactive prototypes", "Presentations"] },
      { label: "Brand", items: ["Brand systems & identity", "Illustration", "Motion & video", "Typography"] },
      { label: "Marketing", items: ["Campaigns & social", "Email design", "Carousels & guides", "Event & conference content"] },
      { label: "AI & Creative Tech", items: ["Research & concepting", "Image & video generation", "Vibe-coding", "Prompt-driven workflows"] }
    ],
    experience: [
      { role: "Marketing Designer", org: "Powtoon", years: "2025–2026" },
      { role: "Graphic Designer", org: "Bad Boy Studio", years: "2024–2025" },
      { role: "Designer", org: "Freelance - branding, social & logos", years: "2022–2023" },
      { role: "Designer", org: "Good Sap Studio", years: "2022–2023" },
      { role: "Team Leadership & Instruction", org: "IDF", years: "2018–2020" }
    ]
  },

  contact: {
    line: "Open to full-time design roles and select freelance projects.",
    email: "matan1399@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/matan-cohen-a2864821a/" },
      { label: "Behance", url: "https://www.behance.net/matancohen2" },
      { label: "Instagram", url: "https://instagram.com/mind_art_design_" }
    ]
  }
};
