/* =========================================================================
   M&M Fufffel Consulting AB — central content / service data model.
   ADD NEW OFFERINGS HERE. Do not duplicate page markup elsewhere.
   Every service: slug, name, eyebrow, headline, description, accent,
   modules (3 unless a strong reason), quote, and disclaimer when the
   subject could be mistaken for legal/employment/health/financial/
   alcohol/official-company advice.
   Exported on window.MMF for the no-build vanilla setup.
   ========================================================================= */
(function () {
  "use strict";

  /* Brand-level constants. "Fufffel" — three f's, always. */
  const BRAND = {
    legalName: "M&M Fufffel Consulting AB",
    shortName: "M² Fufffel",
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
    logo: "assets/logo.jpg",
    logoSmall: "assets/logo-sm.jpg",
    tagline2: "Active-active with absolute redundancy since 2026.",
    // Entirely fictional "happy customers".
    testimonials: [
      { quote: "We came in confused. We left aligned. We are, admittedly, still confused \u2014 but together.", who: "VP of Directional Certainty, a Very Large Enterprise (fictional)" },
      { quote: "The deck was ready before the decision. Frankly, before the question.", who: "Head of Momentum, Undisclosed Steering Group (fictional)" },
      { quote: "Their Meta-ETA\u2122 for our ETA arrived on time. The ETA did not. Ten out of ten.", who: "Programme Lead, Cloud-Adjacent Initiative (fictional)" },
    ],
    disclaimer:
      "M&M Fufffel Consulting AB is a fictional company created for satire and internal humour. " +
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
    "Let\u2019s take this offline. And then to another meeting.",
    "Great catchup \u2014 let\u2019s schedule a catchup about it.",
    "My network has a network.",
    "This coffee could have been a slide.",
    "Recursively yours.",
  ];

  /* ---- The service portfolio. Order = display order on the home grid. ---- */
  const SERVICES = [
    {
      slug: "agentic-fufffel",
      name: "Agentic Fufffel\u2122",
      eyebrow: "Autonomous alignment fleet",
      badge: "AI-NATIVE*",
      headline: "One fleet of AI agents. Every service. Zero decisions required.",
      description:
        "Our flagship agentic layer: a self-orchestrating swarm of AI agents, one per capability, " +
        "that runs the entire M&M Fufffel portfolio on your behalf \u2014 autonomously turning ambiguity " +
        "into alignment while you stay comfortably out of the loop.",
      accent: "#7ea2ff",
      foundational: true,
      // Chips linking to every capability this fleet "orchestrates".
      orchestrates: [
        "convincing-nonsense", "m2-decision-model", "osg-slide-generating-service",
        "union-alignment-nonsense-engine", "eta-estimating-service", "meta-eta",
        "dark-cloud-navigator", "inner-excellence-realignment", "afterwork", "coffee-mug-service",
        "m2-poking-service", "heard-and-seen", "m2-comeback", "grand-unified-governance",
      ],
      modules: [
        { h: "Multi-agent orchestration", p: "One agent per service, each confidently sub-tasking the others until a deck emerges." },
        { h: "Human-out-of-the-loop\u2122", p: "You approve nothing. The agents align among themselves and report consensus as fact." },
        { h: "Self-healing narrative", p: "When an agent hallucinates, a second agent reframes it as an emerging insight. Uptime: eternal." },
      ],
      formula: "agents \u00d7 (every service) \u00d7 autonomy \u00f7 oversight = one confident, self-approving roadmap",
      points: [
        "Agentic. Orchestrated. Reality-optional.",
        "It attends the meeting so you can attend a different meeting.",
        "Powered end-to-end by Convincing Nonsense\u2122, at machine speed.",
      ],
      quote: {
        text: "We gave the agents a goal, an ambiguity and a budget. They gave us alignment and a follow-up sync.",
        cite: "Agentic Fufffel\u2122 \u2014 launch narrative",
      },
      disclaimer:
        "Fictional satire, not a real AI product. These \u201cagents\u201d do not exist, make no decisions, and " +
        "should never be trusted with yours. Do not deploy autonomous nonsense in production.",
    },

    {
      slug: "convincing-nonsense",
      name: "Convincing Nonsense\u2122",
      eyebrow: "Foundational capability",
      badge: "TRADEMARK PENDING*",
      headline: "When the facts are still loading, we provide a narrative.",
      description:
        "The capability everything else rests on: translating uncertainty into confident language, " +
        "strategic fog and action-shaped ambiguity \u2014 so work can proceed before the facts arrive.",
      accent: "#6387d7",
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
        cite: "M&M Fufffel Consulting AB \u2014 house principle",
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
      name: "M2 Fufffel ETA Estimating Service",
      eyebrow: "Estimation \u00b7 powered by Meta-ETA\u2122",
      badge: "TRADEMARK PENDING*",
      headline: "An ETA for your ETA \u2014 delivered as a Meta-ETA\u2122.",
      description:
        "Built entirely around our flagship Meta-ETA\u2122: we don\u2019t estimate the work, we estimate when we\u2019ll " +
        "next be able to estimate it. Every engagement returns a Meta-ETA\u2122 \u2014 an executive-ready, " +
        "date-shaped object suitable for framing, minus the commitment.",
      accent: "#ffd23f",
      ladder: [
        "Directional-ish",
        "Plausible pending alignment",
        "Estimated estimate",
        "Meta-ETA\u2122 (you are here)",
        "Meta-ETA\u2122 for the Meta-ETA\u2122",
        "Probably after the next sync",
      ],
      modules: [
        { h: "Meta-ETA\u2122 generation", p: "The core deliverable: not when it\u2019s done, but when we\u2019ll next be able to say when it\u2019s done." },
        { h: "Confidence in the confidence", p: "We measure our confidence in the Meta-ETA\u2122, then Meta-ETA\u2122 that confidence too." },
        { h: "Recursive re-forecasting", p: "Each Meta-ETA\u2122 politely schedules the next Meta-ETA\u2122. The date always exists; its meaning stays out of scope." },
      ],
      points: [
        "Every output is a Meta-ETA\u2122, never an actual date.",
        "Meta-ETA\u2122 on time. The thing it estimates, comfortably TBD.",
        "Ask for an ETA; leave with a Meta-ETA\u2122 for the next Meta-ETA\u2122.",
      ],
      quote: { text: "An ETA for your ETA. We call it the Meta-ETA\u2122.", cite: "M2 Fufffel ETA Estimating Service" },
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
      name: "M2 Fufffel Dark Cloud Navigator\u2122",
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
      slug: "inner-excellence-realignment",
      name: "Inner Excellence Realignment\u2122",
      eyebrow: "Personal excellence",
      badge: "TRADEMARK PENDING*",
      headline: "Find your inner you. Then bring it into alignment.",
      description:
        "Personal excellence, consulting-style: we help you become your most strategically actualised " +
        "self by applying Convincing Nonsense\u2122 to the one stakeholder you can never escalate away \u2014 you.",
      accent: "#63d7c2",
      modules: [
        { h: "Locate the inner you", p: "Deep reflection (one workshop, two sticky notes) to find the you that was there all along, ideally." },
        { h: "Reframe the inner you", p: "Every weakness rebranded as a \u201cdevelopment area with momentum.\u201d Nothing is broken; everything is emerging." },
        { h: "Excel the inner you", p: "Ship the improved you now, validate later. If challenged, cite your ongoing personal transformation programme." },
      ],
      formula: "you = you \u00d7 (tighter framing + softer deadlines) \u00f7 awkward self-reflection",
      points: [
        "Same person. New narrative. Now with a maturity level.",
        "Executive presence-ish: pause meaningfully, escalate accordingly.",
        "Meta-ETA\u2122 for when the improved you will finally arrive.",
      ],
      quote: {
        text: "Be the change you want to defer to next quarter.",
        cite: "Inner Excellence Realignment\u2122 \u2014 self-guided thought leadership",
      },
      disclaimer:
        "Fictional satire \u2014 not real coaching, therapy, medical, mental-health, career or life advice, " +
        "and it will not actually improve you. For genuine personal growth or wellbeing support, talk to " +
        "real, qualified humans.",
    },

    {
      slug: "afterwork",
      name: "Afterwork by M&M Fufffel Consulting",
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
        cite: "Afterwork by M&M Fufffel Consulting",
      },
      disclaimer:
        "Fictional and for humour only. Please enjoy alcohol responsibly and only if you are of legal " +
        "drinking age. No health, medical or performance benefits are implied. Never drink and drive.",
    },

    {
      slug: "recursive-networking",
      name: "Recursive Networking\u2122",
      eyebrow: "Connection-as-a-Service",
      badge: "TRADEMARK PENDING*",
      headline: "We put people together to talk. About putting more people together to talk.",
      description:
        "The convenient alternative to real work: we introduce people who should meet, so they can " +
        "meet, so they can decide to meet again \u2014 with more people. Every conversation produces slides, " +
        "the slides produce follow-up syncs, and the syncs produce the need for even more networking. " +
        "Momentum without motion, powered by Convincing Nonsense\u2122 and served with a warm mug.",
      accent: "#59c3ff",
      modules: [
        { h: "Curated introductions", p: "We connect the people who really should talk \u2014 chosen for reach, never relevance \u2014 then step back and let the alignment ambience build itself." },
        { h: "Slide-generating conversations", p: "Every coffee produces a takeaway, every takeaway a slide, every slide a reason to reconvene the group that produced it." },
        { h: "Recursive follow-up engine", p: "The output of each networking meeting is another networking meeting. The graph only grows; nobody is ever left un-networked." },
      ],
      formula: "network(you) = coffee \u00d7 people \u00d7 slides \u00f7 outcomes \u2192 network(everyone they know)",
      points: [
        "Recursive by design: each meeting schedules the meeting that schedules the next meeting.",
        "The convenient alternative to real work \u2014 now with 40% more contacts.",
        "You leave energised, well-connected, and no closer to shipping anything.",
      ],
      quote: {
        text: "We networked about the networking. Then we scheduled a workshop to align on the follow-up sync.",
        cite: "Recursive Networking\u2122 \u2014 self-referential retrospective",
      },
      disclaimer:
        "Fictional satire \u2014 not real networking, career or business-development advice. Genuine " +
        "relationships are built by actually helping people, not by recursively scheduling coffee.",
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

    {
      slug: "m2-poking-service",
      name: "M\u00b2 Poking Service",
      eyebrow: "Escalation",
      badge: "FICTIVE SERVICE",
      headline: "When nudging is not enough.",
      description:
        "The passive-aggressive escalation layer: when a gentle nudge goes unanswered, we automatically " +
        "open a Teams chat with a perfectly-chosen GIF and a warmly-worded reminder of the shortcoming \u2014 " +
        "so accountability arrives without anyone having to raise their voice.",
      accent: "#ff5d8f",
      modules: [
        { h: "Automated Teams chat creation", p: "The moment a nudge is ignored, a fresh 1:1 opens itself. You did not schedule it. It is simply here now." },
        { h: "Contextual GIF selection", p: "An AI-picked reaction GIF that says \u201cno worries!\u201d while meaning something else entirely." },
        { h: "Passive-aggressive tone engine", p: "\u201cJust circling back \u2014 no rush, only urgency.\u201d Calibrated to sting politely and deny plausibly." },
      ],
      formula: "reminder = (missed deadline \u00d7 perfect GIF) \u00f7 \u201cjust following up \ud83d\ude4f\u201d",
      points: [
        "Escalation with a smile emoji. Consequences with a reaction GIF.",
        "Read receipts weaponised, professionally.",
        "\u201cPer my last nudge\u2026\u201d \u2014 now fully automated.",
      ],
      quote: {
        text: "Just gently circling back on the thing from three weeks ago. No pressure! \ud83d\ude4f",
        cite: "M\u00b2 Poking Service \u2014 auto-generated reminder #4",
      },
      disclaimer:
        "Fictional satire, not a real product and not workplace, HR or communications advice. Do not " +
        "actually deploy passive-aggressive automation against colleagues \u2014 real accountability is a " +
        "conversation, not a GIF.",
    },

    {
      slug: "heard-and-seen",
      name: "Heard & Seen\u2122",
      eyebrow: "Attention management",
      badge: "TRADEMARK PENDING*",
      headline: "Make them feel heard. Without the hearing.",
      description:
        "The polite way to disengage: Heard & Seen\u2122 uses Convincing Nonsense\u2122 to make persistently " +
        "over-communicative colleagues feel deeply acknowledged \u2014 warm reflective replies, thoughtful " +
        "pauses, validating noises \u2014 while you quietly reclaim your attention.",
      accent: "#c58bff",
      modules: [
        { h: "Active-listening simulation", p: "\u201cThat\u2019s such a great point, tell me more\u201d \u2014 generated, warmly, so they feel genuinely engaged with." },
        { h: "Validation-as-a-Service", p: "Reflective paraphrasing (\u201cso what I\u2019m hearing is\u2026\u201d) that confirms they were heard, without committing you to anything." },
        { h: "Graceful non-response", p: "Acknowledgements that feel like answers. Everyone leaves the thread feeling seen; nothing was actually decided." },
      ],
      formula: "peace = (warm acknowledgement \u00d7 zero follow-through) \u00f7 your remaining attention",
      points: [
        "They feel heard. You stay unbothered. Convincing Nonsense\u2122 does the rest.",
        "\u201cThanks so much for flagging this \u2014 really valuable.\u201d (No action was taken.)",
        "Empathy-shaped output, attention-cost zero.",
      ],
      quote: {
        text: "I felt so listened to. I have no idea what we agreed, but I felt wonderful.",
        cite: "Heard & Seen\u2122 \u2014 satisfied (unattended) stakeholder",
      },
      disclaimer:
        "Fictional satire \u2014 not real communication, relationship or workplace advice. Please actually " +
        "listen to your colleagues; people deserve genuine attention, not Convincing Nonsense\u2122.",
    },

    {
      slug: "m2-comeback",
      name: "M\u00b2 Comeback\u2122",
      eyebrow: "Recovery & return-to-form",
      badge: "TRADEMARK PENDING*",
      headline: "Sprained ankle or brain surgery \u2014 we\u2019ll get you sorted.",
      description:
        "Whatever knocked you off course, M\u00b2 Comeback\u2122 boosts you back with Convincing Nonsense\u2122 and " +
        "a bundle of helpful (?) services \u2014 so you can concentrate on the important stuff, like coffee " +
        "with interesting colleagues (the founders of M\u00b2 Consulting come highly recommended).",
      accent: "#4fd1a5",
      modules: [
        { h: "Convincing Nonsense\u2122 boost", p: "A confident recovery narrative applied at any severity: \u201cyou\u2019re basically back already.\u201d Reality-optional, morale-positive." },
        { h: "Helpful (?) service bundle", p: "ETAs for your recovery, slides about your progress, and gentle poking of anyone who doubts your comeback." },
        { h: "Coffee-first prioritisation", p: "We handle the boring recovery admin so your calendar clears for the truly restorative work: coffee with interesting people." },
      ],
      formula: "comeback = (any setback \u00d7 Convincing Nonsense\u2122) \u00f7 time you\u2019d rather spend on coffee",
      points: [
        "Same great you. Now with a recovery narrative and a fresh mug.",
        "From sprained ankle to brain surgery \u2014 one confident comeback plan.",
        "You focus on coffee with the founders; we focus on the boost.",
      ],
      quote: {
        text: "They said full recovery in six weeks. M\u00b2 Comeback\u2122 had me feeling back in one confident slide.",
        cite: "M\u00b2 Comeback\u2122 \u2014 delighted returnee",
      },
      disclaimer:
        "Fictional satire \u2014 absolutely not medical, health, rehabilitation or recovery advice, and no " +
        "substitute for real care. Convincing Nonsense\u2122 heals nothing. For actual injuries or surgery, " +
        "follow your real doctors and physiotherapists.",
    },

    {
      slug: "grand-unified-governance",
      name: "Grand Unified Pool Governance\u2122",
      eyebrow: "Strategy & governance",
      badge: "TRADEMARK PENDING*",
      headline: "Every requirement, from everyone, rendered gloriously ungraspable.",
      description:
        "The capacity-strategy capstone: we gather every dynamic-pool and static-pool requirement from " +
        "every user across the entire company, then apply Convincing Nonsense\u2122, Meta-ETA\u2122 and the " +
        "Dark Cloud Navigator\u2122 to produce a strategy so comprehensive nobody can grasp it \u2014 but the " +
        "slides make everyone feel deeply reassured.",
      accent: "#b08bff",
      foundational: true,
      // Pulls the reassurance-generating services together into one governance layer.
      orchestrates: [
        "convincing-nonsense", "meta-eta", "dark-cloud-navigator",
        "osg-slide-generating-service", "m2-decision-model", "union-alignment-nonsense-engine",
      ],
      modules: [
        { h: "Total requirement ingestion", p: "Dynamic pools, static pools, half-pools, hypothetical pools \u2014 we collect every requirement from every user, then never say no to any of them." },
        { h: "Strategy fog synthesis", p: "Convincing Nonsense\u2122 + Meta-ETA\u2122 + Dark Cloud Navigator\u2122 blend the requirements into one weather-shaped strategy no single human can hold in their head." },
        { h: "Reassurance-grade slides", p: "The output nobody understands, presented so confidently that the steering group applauds and asks no follow-up questions." },
      ],
      formula: "governance = (all requirements \u00d7 Convincing Nonsense\u2122 \u00d7 Meta-ETA\u2122) \u00f7 anyone\u2019s ability to grasp it",
      points: [
        "Dynamic pools, static pools, and the strategy in between \u2014 unified into one ungraspable whole.",
        "Nobody can follow it. Everybody feels reassured. This is governance.",
        "Powered by Convincing Nonsense\u2122; forecast by Meta-ETA\u2122; navigated by Dark Cloud Navigator\u2122.",
      ],
      quote: {
        text: "I don\u2019t understand our pool strategy at all now, and I have never felt more confident about it.",
        cite: "Grand Unified Pool Governance\u2122 \u2014 reassured steering group",
      },
      disclaimer:
        "Fictional satire \u2014 not real capacity planning, strategy or governance advice. Real pool strategy " +
        "needs clear requirements and decisions people can actually understand, not Convincing Nonsense\u2122.",
    },
  ];

  /* ---- "Some of our work": real onepagers delivered to (delighted) clients. ---- */
  /* Each has a cover image (a PDF page preview) and links to the full PDF.        */
  const WORK = [
    {
      title: "Recursive Networking\u2122",
      client: "For a team that wanted to connect before committing",
      blurb: "We introduced the people who really should meet, captured every coffee as a slide, and let each meeting schedule the next \u2014 across a widening set of contacts. Warm, well-attended, and reliably self-perpetuating; no decision was reached.",
      cover: "assets/work/work-recursive-networking.jpg",
      pdf: "assets/pdf/recursive-networking.pdf",
      service: "recursive-networking",
      accent: "#59c3ff",
    },
    {
      title: "Grand Unified Pool Governance\u2122",
      client: "For a company unsure of its dynamic vs static pool strategy",
      blurb: "We gathered every pool requirement from every user, blended it with Convincing Nonsense\u2122, Meta-ETA\u2122 and Dark Cloud Navigator\u2122, and produced a strategy nobody could grasp \u2014 and a deck that had the steering group applauding.",
      cover: "assets/work/work-governance.jpg",
      pdf: "assets/pdf/governance.pdf",
      service: "grand-unified-governance",
      accent: "#b08bff",
    },
    {
      title: "M\u00b2 Comeback\u2122",
      client: "For a client returning from a serious setback",
      blurb: "Sprained ankle or brain surgery \u2014 we boosted them back with Convincing Nonsense\u2122 and the helpful (?) bundle, cleared the recovery admin, and got them to coffee with the founders.",
      cover: "assets/work/work-comeback.jpg",
      pdf: "assets/pdf/comeback.pdf",
      service: "m2-comeback",
      accent: "#4fd1a5",
    },
    {
      title: "Heard & Seen\u2122",
      client: "For an exec drowning in over-communication",
      blurb: "We made their most persistent stakeholders feel deeply acknowledged \u2014 warm, reflective, validating \u2014 while quietly handing the exec their attention back. Everyone felt wonderful; nothing was decided.",
      cover: "assets/work/work-heard-and-seen.jpg",
      pdf: "assets/pdf/heard-and-seen.pdf",
      service: "heard-and-seen",
      accent: "#c58bff",
    },
    {
      title: "M\u00b2 Poking Service",
      client: "For a team that had run out of polite reminders",
      blurb: "When nudging wasn\u2019t enough, we automated the Teams chats \u2014 perfect GIF, warm wording, pointed undertone. Accountability arrived; nobody had to raise their voice.",
      cover: "assets/work/work-poking-service.jpg",
      pdf: "assets/pdf/poking-service.pdf",
      service: "m2-poking-service",
      accent: "#ff5d8f",
    },
    {
      title: "Agentic Fufffel\u2122",
      client: "For an enterprise that wanted AI to run the whole thing",
      blurb: "One fleet of AI agents, one per service, aligning among themselves and reporting consensus as fact. We delivered a self-approving roadmap and a recurring sync no human booked.",
      cover: "assets/work/work-agentic-fufffel.jpg",
      pdf: "assets/pdf/agentic-fufffel.pdf",
      service: "agentic-fufffel",
      accent: "#7ea2ff",
    },
    {
      title: "Inner Excellence Realignment\u2122",
      client: "For a high performer who needed a personal roadmap",
      blurb: "Find your inner you, then bring it into alignment. We rebranded their flaws as \u201cedges,\u201d compressed the inner monologue to three bullets, and shipped You 2.0.",
      cover: "assets/work/work-inner-excellence.jpg",
      pdf: "assets/pdf/inner-excellence.pdf",
      service: "inner-excellence-realignment",
      accent: "#63d7c2",
    },
    {
      title: "Meta-ETA\u2122 Estimating Service",
      client: "For a leadership team that needed a date, not an answer",
      blurb: "How long will it take to estimate how long it will take? We delivered a single, confident-looking number and a plan to defend it.",
      cover: "assets/work/work-meta-eta.jpg",
      pdf: "assets/pdf/meta-eta.pdf",
      service: "meta-eta",
      accent: "#ff9d3d",
    },
    {
      title: "OSG Slide Generating Service",
      client: "For a steering group with more dashboards than decisions",
      blurb: "Scattered dashboards and shifting criteria compressed into one executive-ready narrative \u2014 before the next meeting created three new versions.",
      cover: "assets/work/work-osg.jpg",
      pdf: "assets/pdf/osg.pdf",
      service: "osg-slide-generating-service",
      accent: "#ff6fae",
    },
    {
      title: "Dark Cloud Navigator\u2122",
      client: "For a programme going through a genuinely cloudy quarter",
      blurb: "Executive weather briefings and resilience narratives that kept everyone moving. Directional certainty, weather permitting.",
      cover: "assets/work/work-dark-cloud-navigator.jpg",
      pdf: "assets/pdf/dark-cloud-navigator.pdf",
      service: "dark-cloud-navigator",
      accent: "#9b8cff",
    },
    {
      title: "Afterwork Operating Model",
      client: "For two teams who believed in cross-border synergy",
      blurb: "German rauch lager meets Finnish rye whisky. No one asked whether the interfaces were compatible; we simply poured forward.",
      cover: "assets/work/work-afterwork.jpg",
      pdf: "assets/pdf/afterwork.pdf",
      service: "afterwork",
      accent: "#e0a35c",
    },
    {
      title: "Coffee Mug Service \u2014 MugOps",
      client: "For an office that runs on caffeine and slogans",
      blurb: "A managed wall of spot-on mug messages, delivered warm and suspiciously on-message. This meeting could have been a mug.",
      cover: "assets/work/work-coffee-mug.jpg",
      pdf: "assets/pdf/coffee-mug.pdf",
      service: "coffee-mug-service",
      accent: "#ff7a59",
    },
    {
      title: "Union Alignment Nonsense Engine\u2122",
      client: "For a foundational pillar that needed reassuring branding",
      blurb: "Dialogue, mandate and listening packaged into modules that sound like progress. Everyone was heard; we have a certificate to prove it.",
      cover: "assets/work/work-union.jpg",
      pdf: "assets/pdf/union.pdf",
      service: "union-alignment-nonsense-engine",
      accent: "#7be0c2",
    },
    {
      title: "M&M Fufffel \u2014 Company Overview",
      client: "For prospects deciding whether to align with us",
      blurb: "The full portfolio in one confident onepager: ambiguity in, alignment out, slides throughout. Convincing Nonsense\u2122 on every page.",
      cover: "assets/work/work-overview.jpg",
      pdf: "assets/pdf/overview.pdf",
      service: "convincing-nonsense",
      accent: "#6387d7",
    },
  ];

  /* ---- Merch showcase: what happy customers actually receive. ---- */
  const SHOWCASE = [
    {
      title: "The Merch Kit",
      tagline: "Wear the workstream.",
      note: "Caps, mugs and one-liners engineered for busy people. Perfect gifts, plausible deniability included.",
      img: "assets/merch.jpg",
      alt: "M\u00b2 Fufffel branded cap and coffee mugs with slogans like 'We turn complexity into a confident slide.'",
    },
    {
      title: "Executive Decision Fuel",
      tagline: "Small candy. Big alignment.",
      note: "Blue M\u00b2 candy stamped DECIDE NOW, VALIDATE LATER, GOOD ENOUGH. Same great taste, lower accountability.",
      img: "assets/candy.jpg",
      alt: "M\u00b2 Fufffel branded blue candy in bowls and sachets reading 'Please take a Fufffel' and 'Executive decision fuel.'",
    },
  ];

  window.MMF = { BRAND, METHOD, SERVICES, MUG_MESSAGES, WORK, SHOWCASE };
})();
