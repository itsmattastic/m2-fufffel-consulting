/* =========================================================================
   M&M Fufffens Consulting AB — central content / service data model.
   ADD NEW OFFERINGS HERE. Do not duplicate page markup elsewhere.
   Every service: slug, name, eyebrow, headline, description, accent,
   modules (3 unless a strong reason), quote, and disclaimer when the
   subject could be mistaken for legal/employment/health/financial/
   alcohol/official-company advice.
   Exported on window.MMF for the no-build vanilla setup.
   ========================================================================= */
(function () {
  "use strict";

  /* Brand-level constants. "Fufffens" — three f's, always. */
  const BRAND = {
    legalName: "M&M Fufffens Consulting AB",
    shortName: "M² Fufffens",
    foundational: "Convincing Nonsense\u2122",
    proposition:
      "We turn ambiguity into alignment, alignment into slides, and slides into further ambiguity.",
    motto: "Teamwork makes the dream work.",
    tagline: "Alignment-as-a-Service. Confidence not included, but implied.",
    // Recurring, knowingly overused messaging.
    refrains: [
      "Teamwork makes the dream work.",
      "None of us are so confused as all of us together.",
      "An ETA for your ETA.",
      "Confidence without the administrative burden of certainty.",
    ],
    contactEmail: "alignment@fufffens.example",
    disclaimer:
      "M&M Fufffens Consulting AB is a fictional company created for satire and internal humour. " +
      "All services, trademarks and metrics are invented. Nothing here is real advice, a real product, " +
      "or affiliated with, endorsed by, or representative of any real organisation.",
  };

  /* Methodology steps shown on the home page + about section. */
  const METHOD = [
    {
      k: "Intake ambiguity",
      d: "We receive your unresolved questions, half-formed goals and one very confident stakeholder.",
    },
    {
      k: "Manufacture alignment",
      d: "Through Convincing Nonsense\u2122 we convert uncertainty into a shared, comfortable narrative.",
    },
    {
      k: "Compress to slides",
      d: "The narrative is compressed into an executive-ready deck that raises exactly the right new questions.",
    },
    {
      k: "Return to ambiguity",
      d: "Momentum preserved, follow-up questions deferred, everyone leaves feeling directionally certain.",
    },
  ];

  /* Coffee Mug Service — rotating message wall. */
  const MUG_MESSAGES = [
    "This meeting could have been a mug.",
    "Have you tried turning the roadmap off and on again?",
    "Alignment pending.",
    "Meta-ETA\u2122: after coffee.",
    "Convincing Nonsense\u2122 inside.",
    "Teamwork makes the dream work.",
    "I survived the steering group.",
    "Please escalate responsibly.",
    "F-model compliant-ish.",
    "No facts were harmed in this decision.",
  ];

  /* ---- The service portfolio. Order = display order on the home grid. ---- */
  const SERVICES = [
    {
      slug: "convincing-nonsense",
      name: "Convincing Nonsense\u2122",
      eyebrow: "Foundational capability",
      badge: "TRADEMARK PENDING*",
      headline: "When the facts are still loading, we provide a narrative.",
      description:
        "The capability everything else rests on: translating uncertainty into confident language, " +
        "strategic fog and action-shaped ambiguity \u2014 so work can proceed before the facts arrive.",
      accent: "#c6ff3a",
      foundational: true,
      modules: [
        {
          h: "Uncertainty-to-language",
          p: "We convert \u201cwe don\u2019t know\u201d into \u201cwe are actively aligning,\u201d at scale.",
        },
        {
          h: "Strategic fog generation",
          p: "Precisely the right amount of haze: enough to move, not enough to be questioned.",
        },
        {
          h: "Action-shaped ambiguity",
          p: "Deliverables that look like decisions until someone tries to act on them.",
        },
      ],
      points: [
        "Confidence without the administrative burden of certainty.",
        "AI-assisted. Human-approved. Reality-optional.",
      ],
      quote: {
        text: "None of us are so confused as all of us together.",
        cite: "M&M Fufffens Consulting AB \u2014 house principle",
      },
      disclaimer:
        "Fictional satire. Not a real methodology and not a substitute for facts, evidence, or thinking.",
    },

    {
      slug: "m2-decision-model",
      name: "M\u00b2 Decision Model",
      eyebrow: "Framework",
      badge: "FICTIVE SERVICE",
      headline: "Rigour-shaped decisions at a fraction of the rigour.",
      description:
        "A decision framework engineered to cut every possible corner on the F-model while preserving " +
        "the reassuring appearance of governance and control.",
      accent: "#8ab4ff",
      modules: [
        { h: "Minimise meetings", p: "Fewer syncs, more momentum. The calendar is the enemy of alignment." },
        { h: "Maximise momentum", p: "Keep moving so the decision cannot catch up and ask what it was." },
        { h: "Manufacture alignment", p: "Agreement is produced on demand, then reported as pre-existing." },
      ],
      formula: "decision = (Minimise meetings \u00d7 Maximise momentum \u00d7 Manufacture alignment) \u00f7 follow\u2011up questions",
      points: ["Move on before the model asks follow-up questions."],
      quote: {
        text: "A framework so agile it agrees with itself before you finish the question.",
        cite: "M\u00b2 Decision Model \u2014 abstract",
      },
      disclaimer:
        "This is fictional nonsense, not a real management framework. Do not use it to make real decisions.",
    },

    {
      slug: "osg-slide-generating-service",
      name: "OSG Slide Generating Service",
      eyebrow: "Source-to-slide",
      badge: "FICTIVE SERVICE",
      headline: "None of us are so confused as all of us together.",
      description:
        "Converts operational inputs, dashboards, governance language and unresolved questions into " +
        "polished slides \u2014 the industrial pipeline from confusion to consensus-shaped decks.",
      accent: "#ff6fae",
      modules: [
        { h: "Source-to-slide orchestration", p: "Dashboards, tickets and vibes in; a coherent-looking deck out." },
        { h: "Executive narrative compression", p: "Forty unknowns compressed into three confident bullets." },
        { h: "Automated status confidence", p: "Every status is green-adjacent and defensible in the moment." },
      ],
      points: ["One more deck before the decision."],
      quote: {
        text: "The deck was aligned. The people, less so. But the deck was aligned.",
        cite: "OSG post-implementation review",
      },
    },

    {
      slug: "union-alignment-nonsense-engine",
      name: "Union Alignment Nonsense Engine\u2122",
      eyebrow: "Foundational pillar",
      badge: "TRADEMARK PENDING*",
      headline: "Dialogue, mandate and alignment \u2014 reassuringly branded.",
      description:
        "One of our foundational pillars. A satirical way to package dialogue, negotiation, collective " +
        "mandate, listening and alignment into modules that sound like progress.",
      accent: "#7be0c2",
      foundational: true,
      modules: [
        { h: "Collective Clarity Intake", p: "We gather every concern and route it into a warmly worded backlog." },
        { h: "Negotiation Narrative Layer", p: "Positions become stories; stories become slides; slides become minutes." },
        { h: "Mandate Momentum Mapping", p: "A map of who feels heard, refreshed hourly, never quite finished." },
        { h: "Agreement-Adjacent Reporting", p: "Reports that are close to agreement without the risk of agreeing." },
        { h: "Human-Centred Escalation", p: "Escalation, but make it caring, calm and entirely non-committal." },
      ],
      quote: {
        text: "Everyone was heard. The engine has a certificate to prove it.",
        cite: "Union Alignment Nonsense Engine\u2122 \u2014 self-assessment",
      },
      disclaimer:
        "Fictional satire. This is NOT legal, employment, labour-relations or union advice. " +
        "For real union matters, talk to your actual union and qualified professionals.",
    },

    {
      slug: "eta-estimating-service",
      name: "M2 Fufffens ETA Estimating Service",
      eyebrow: "Estimation",
      badge: "FICTIVE SERVICE",
      headline: "An ETA for your ETA.",
      description:
        "We estimate the estimate, calibrate confidence in the confidence, and hand back an " +
        "executive-ready, date-shaped object suitable for framing.",
      accent: "#ffd23f",
      ladder: [
        "Directional-ish",
        "Plausible pending alignment",
        "Estimated estimate",
        "Meta-ETA\u2122",
        "Probably after the next sync",
      ],
      modules: [
        { h: "Estimate the estimate", p: "We do not estimate the work; we estimate when we could estimate it." },
        { h: "Confidence calibration", p: "We measure our confidence, then measure our confidence in that." },
        { h: "Date-shaped object", p: "A deliverable that looks exactly like a date, minus the commitment." },
      ],
      quote: { text: "An ETA for your ETA.", cite: "M2 Fufffens ETA Estimating Service" },
    },

    {
      slug: "meta-eta",
      name: "Meta-ETA\u2122",
      eyebrow: "Flagship concept",
      badge: "TRADEMARK PENDING*",
      headline: "The estimate of when the next estimate will be ready.",
      description:
        "Our trademarked flagship concept: not when it will be done, but when we will next be able to " +
        "say when it will be done. Recursion as a service.",
      accent: "#ff9d3d",
      modules: [
        { h: "First-order deferral", p: "Replace \u201cwhen is it done?\u201d with \u201cwhen will we know when?\u201d" },
        { h: "Recursive scheduling", p: "Each Meta-ETA\u2122 politely schedules the next Meta-ETA\u2122." },
        { h: "Executive serenity", p: "A date exists at all times; its meaning is comfortably out of scope." },
      ],
      quote: {
        text: "The Meta-ETA\u2122 is on track. The thing it estimates remains a mystery.",
        cite: "Meta-ETA\u2122 status report",
      },
    },

    {
      slug: "dark-cloud-navigator",
      name: "M2 Fufffens Dark Cloud Navigator\u2122",
      eyebrow: "Navigation",
      badge: "TRADEMARK PENDING*",
      headline: "Helping you through hard times with Convincing Nonsense\u2122.",
      description:
        "For difficult periods where the problems are real but the map is mostly made of \u201calignment,\u201d " +
        "\u201cresilience\u201d and \u201ccloud transformation.\u201d We keep you moving, weather permitting.",
      accent: "#9b8cff",
      modules: [
        { h: "Executive weather briefings", p: "Today\u2019s forecast: strategic overcast with scattered synergy." },
        { h: "Cloud-shaped problem framing", p: "Any problem, reframed as a cloud you can transform later." },
        { h: "Resilience narrative generation", p: "Stories of bouncing back, drafted before the bounce." },
      ],
      points: [
        "Strategic umbrella deployment.",
        "Directional certainty, weather permitting.",
      ],
      quote: {
        text: "It was a hard quarter, but the map assured us it was mostly cloud.",
        cite: "Dark Cloud Navigator\u2122 field log",
      },
      disclaimer:
        "Fictional satire, not real crisis, financial, health or professional support. " +
        "If you are having a genuinely hard time, please reach out to real people and real services.",
    },

    {
      slug: "afterwork",
      name: "Afterwork by M&M Fufffens Consulting",
      eyebrow: "Operating model",
      badge: "FICTIVE SERVICE",
      headline: "Teamwork makes the dream work.",
      description:
        "German rauch lager meets Finnish rye whisky in a completely natural cross-border operating " +
        "model. A tasting flight of smoke, rye, oak, pepper, caramel and cross-functional warmth.",
      accent: "#e0a35c",
      modules: [
        { h: "Rauch lager track", p: "Smoke, oak and a slow, deliberate roadmap you can actually enjoy." },
        { h: "Rye whisky track", p: "Rye, pepper and caramel; bold, direct and slightly over-committed." },
        { h: "Cross-functional warmth", p: "The two tracks align over one table. No slides required." },
      ],
      points: ["Smoke \u00b7 rye \u00b7 oak \u00b7 pepper \u00b7 caramel \u00b7 cross-functional warmth."],
      quote: {
        text: "Two countries, one flight, zero action items.",
        cite: "Afterwork by M&M Fufffens Consulting",
      },
      disclaimer:
        "Fictional and for humour only. Please enjoy alcohol responsibly and only if you are of legal " +
        "drinking age. No health, medical or performance benefits are implied. Never drink and drive.",
    },

    {
      slug: "coffee-mug-service",
      name: "Coffee Mug Service",
      eyebrow: "Caffeine as a Service",
      badge: "MugOps",
      headline: "Caffeine as a Service. Uptime measured in refills.",
      description:
        "MugOps for the modern enterprise: a managed message wall of spot-on mug slogans, delivered " +
        "warm, on-brand and suspiciously on-message.",
      accent: "#ff7a59",
      isMugWall: true,
      modules: [
        { h: "Provisioned caffeine", p: "Elastic mug capacity that scales with meeting density." },
        { h: "Message wall", p: "A rotating, selectable wall of enterprise-grade mug wisdom." },
        { h: "MugOps SLAs", p: "99.9% warmth, best-effort truth, response time: after coffee." },
      ],
      quote: { text: "This meeting could have been a mug.", cite: "Coffee Mug Service \u2014 top request" },
    },
  ];

  window.MMF = { BRAND, METHOD, SERVICES, MUG_MESSAGES };
})();
