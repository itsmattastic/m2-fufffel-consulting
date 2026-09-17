/* =========================================================================
   M&M Fufffens Consulting AB — application layer.
   Vanilla JS, no framework. Reads window.MMF (content/services.js) and
   renders a hash-routed, data-driven experience. Progressive enhancement:
   index.html ships a readable no-JS fallback that this script replaces.
   ========================================================================= */
(function () {
  "use strict";

  var MMF = window.MMF;
  if (!MMF) return; // no data -> keep the static no-JS fallback

  var BRAND = MMF.BRAND;
  var SERVICES = MMF.SERVICES;
  var METHOD = MMF.METHOD;
  var MUG_MESSAGES = MMF.MUG_MESSAGES;

  var byId = SERVICES.reduce(function (m, s) { m[s.slug] = s; return m; }, {});

  /* ---------- tiny DOM helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function badgeClass(text) {
    if (/pending/i.test(text)) return "badge badge--amber";
    if (/mugops/i.test(text)) return "badge badge--accent";
    return "badge";
  }

  /* ---------- reusable component fragments ---------- */
  function serviceCard(s) {
    var badge = s.badge
      ? '<span class="' + badgeClass(s.badge) + '">' + esc(s.badge) + "</span>"
      : "";
    return (
      '<article class="card fade-in" style="--accent:' + esc(s.accent) + '">' +
        '<div class="card__eyebrow">' + esc(s.eyebrow) + "</div>" +
        '<h3 class="card__title"><a href="#/service/' + esc(s.slug) + '">' + esc(s.name) + "</a></h3>" +
        '<p class="card__desc">' + esc(s.description) + "</p>" +
        '<div class="card__foot">' + badge +
          '<span class="card__go" aria-hidden="true">Explore \u2192</span>' +
        "</div>" +
      "</article>"
    );
  }

  function moduleList(mods) {
    return (
      '<ul class="modules">' +
      mods.map(function (m, i) {
        return (
          '<li class="module">' +
            '<span class="module__idx" aria-hidden="true">' + pad(i + 1) + "</span>" +
            '<div class="module__body"><h4>' + esc(m.h) + "</h4><p>" + esc(m.p) + "</p></div>" +
          "</li>"
        );
      }).join("") +
      "</ul>"
    );
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function quoteBlock(q) {
    return (
      '<figure class="quote">' +
        "\u201c" + esc(q.text) + "\u201d" +
        (q.cite ? "<figcaption>" + esc(q.cite) + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function pointsBlock(points) {
    if (!points || !points.length) return "";
    return '<ul class="points">' + points.map(function (p) {
      return "<li>" + esc(p) + "</li>";
    }).join("") + "</ul>";
  }

  function ladderBlock(steps) {
    return '<ol class="ladder">' + steps.map(function (s) {
      return "<li>" + esc(s) + "</li>";
    }).join("") + "</ol>";
  }

  function disclaimerBlock(text) {
    if (!text) return "";
    return '<p class="disclaimer"><strong>Disclaimer.</strong> ' + esc(text) + "</p>";
  }

  /* ---------- views ---------- */
  function homeView() {
    var foundational = SERVICES.filter(function (s) { return s.foundational; });
    var refrains = BRAND.refrains.map(function (r) { return "<span>" + esc(r) + "</span>"; }).join("");

    var hero =
      '<section class="hero"><div class="wrap">' +
        '<p class="eyebrow hero__eyebrow">' + esc(BRAND.legalName) + "</p>" +
        '<h1 class="hero__title">We turn ambiguity into <span class="hl">alignment</span>.</h1>' +
        '<p class="hero__prop">' + esc(BRAND.proposition) + "</p>" +
        '<p class="lede">' + esc(BRAND.tagline) + " Powered by <strong>" + esc(BRAND.foundational) +
          "</strong>, our foundational capability.</p>" +
        '<div class="hero__actions">' +
          '<button class="btn btn--primary" data-open-cta>Request an alignment</button>' +
          '<a class="btn btn--ghost" href="#/service/convincing-nonsense">Meet Convincing Nonsense\u2122</a>' +
        "</div>" +
        '<div class="hero__meta">' +
          '<span class="badge badge--accent">' + esc(BRAND.foundational) + "</span>" +
          '<span class="badge badge--amber">Meta-ETA\u2122</span>' +
          '<span class="badge badge--ghost">Fictional \u00b7 satire</span>' +
        "</div>" +
      "</div></section>";

    var marquee =
      '<div class="marquee" aria-hidden="true"><div class="marquee__track">' +
        refrains + refrains +
      "</div></div>";

    var portfolio =
      '<section class="section" id="portfolio"><div class="wrap">' +
        '<div class="section-head">' +
          '<p class="eyebrow eyebrow--accent">Service portfolio</p>' +
          "<h2>Everything you need to look aligned.</h2>" +
          '<p class="lede">A complete portfolio of confidently branded, entirely fictional services. ' +
          "Each one is reachable by URL, keyboard and quiet resignation.</p>" +
        "</div>" +
        '<div class="card-grid">' + SERVICES.map(serviceCard).join("") + "</div>" +
      "</div></section>";

    var method =
      '<section class="section" id="method"><div class="wrap">' +
        '<div class="section-head">' +
          '<p class="eyebrow eyebrow--accent">Operating model</p>' +
          "<h2>The M\u00b2 method, in four unavoidable steps.</h2>" +
        "</div>" +
        '<div class="card-grid">' +
          METHOD.map(function (m, i) {
            return (
              '<article class="card" style="--accent:var(--amber)">' +
                '<div class="card__eyebrow">Step ' + pad(i + 1) + "</div>" +
                '<h3 class="card__title">' + esc(m.k) + "</h3>" +
                '<p class="card__desc">' + esc(m.d) + "</p>" +
              "</article>"
            );
          }).join("") +
        "</div>" +
        '<p class="lede mt-3">Foundational pillars: ' +
          foundational.map(function (s) {
            return '<a class="back-link" href="#/service/' + esc(s.slug) + '">' + esc(s.name) + "</a>";
          }).join(" \u00b7 ") + ".</p>" +
      "</div></section>";

    var about =
      '<section class="section" id="about"><div class="wrap">' +
        '<div class="section-head">' +
          '<p class="eyebrow eyebrow--accent">About / operating model</p>' +
          "<h2>Almost credible. Deliberately so.</h2>" +
        "</div>" +
        '<p class="lede">' + esc(BRAND.legalName) + " is a cross-border alignment practice. " +
        "German rauch lager, Finnish rye whisky, one shared table, zero action items. Our house " +
        "principle: <em>\u201c" + esc(BRAND.refrains[1]) + "\u201d</em> Our motto: <em>\u201c" +
        esc(BRAND.motto) + "\u201d</em></p>" +
        '<p class="lede mt-2">' + esc(BRAND.motto) + " We say it a lot. That is, in fact, the point.</p>" +
      "</div></section>";

    var cta = ctaBand();

    return hero + marquee + portfolio + method + about + cta;
  }

  function ctaBand() {
    return (
      '<section class="section"><div class="wrap"><div class="cta-band">' +
        "<div><h2>Request an alignment</h2>" +
        '<p>Tell us your ambiguity. We will return it as slides, plus a Meta-ETA\u2122 for the next Meta-ETA\u2122.</p></div>' +
        '<button class="btn btn--primary" data-open-cta>Open the alignment panel</button>' +
      "</div></div></section>"
    );
  }

  function detailView(s) {
    var left = "";
    left += '<h3 class="visually-hidden">Modules</h3>' + moduleList(s.modules);
    if (s.formula) left += '<div class="formula mt-2">' + esc(s.formula) + "</div>";
    if (s.ladder) {
      left += '<h3 class="mt-3">Confidence ladder</h3>' + ladderBlock(s.ladder);
    }
    left += pointsBlock(s.points);
    if (s.isMugWall) left += mugWall();
    left += disclaimerBlock(s.disclaimer);

    var right = quoteBlock(s.quote) +
      '<div class="mt-2 stack">' +
        '<button class="btn btn--primary" data-open-cta style="width:100%">Request an alignment</button>' +
        '<a class="btn btn--ghost" href="#/" style="width:100%">Back to portfolio</a>' +
      "</div>";

    var badge = s.badge ? '<span class="' + badgeClass(s.badge) + '">' + esc(s.badge) + "</span>" : "";

    return (
      '<section class="detail__top" style="--accent:' + esc(s.accent) + '"><div class="wrap">' +
        '<a class="back-link" href="#/">\u2190 M&M Fufffens portfolio</a>' +
        '<p class="eyebrow hero__eyebrow mt-2">' + esc(s.eyebrow) + "</p>" +
        '<h1 class="detail__title">' + esc(s.name) + "</h1>" +
        '<p class="detail__headline">' + esc(s.headline) + "</p>" +
        '<p class="detail__desc">' + esc(s.description) + "</p>" +
        '<div class="hero__meta">' + badge +
          '<span class="badge badge--ghost">Fictional \u00b7 satire</span>' +
        "</div>" +
      "</div></section>" +
      '<section class="section" style="--accent:' + esc(s.accent) + '"><div class="wrap">' +
        '<div class="detail__grid"><div>' + left + "</div><div>" + right + "</div></div>" +
      "</div></section>"
    );
  }

  function notFoundView() {
    return (
      '<section class="hero"><div class="wrap">' +
        '<p class="eyebrow hero__eyebrow">404 \u00b7 Alignment pending</p>' +
        '<h1 class="hero__title">This page is <span class="hl">directionally</span> missing.</h1>' +
        '<p class="hero__prop">We have a Meta-ETA\u2122 for when it might exist. In the meantime, ' +
          "please escalate responsibly.</p>" +
        '<div class="hero__actions"><a class="btn btn--primary" href="#/">Return to portfolio</a></div>' +
      "</div></section>"
    );
  }

  /* ---------- Coffee Mug Service: message wall ---------- */
  function mugWall() {
    var chips = MUG_MESSAGES.map(function (m, i) {
      return '<button type="button" class="mug-chip" data-mug="' + i + '"' +
        (i === 0 ? ' aria-pressed="true"' : ' aria-pressed="false"') + ">" + esc(m) + "</button>";
    }).join("");
    return (
      '<div class="mugwall mt-3">' +
        '<div class="mug-display"><p id="mug-display" aria-live="polite">' + esc(MUG_MESSAGES[0]) + "</p></div>" +
        '<div class="mug-chips" role="group" aria-label="Mug messages">' + chips + "</div>" +
      "</div>"
    );
  }

  var mugTimer = null;
  function initMugWall() {
    var display = document.getElementById("mug-display");
    if (!display) return;
    var chips = Array.prototype.slice.call(document.querySelectorAll(".mug-chip"));
    var idx = 0;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(i) {
      idx = i;
      display.textContent = MUG_MESSAGES[i];
      chips.forEach(function (c, j) { c.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    }
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        show(parseInt(c.getAttribute("data-mug"), 10));
        stop(); // manual selection pauses the rotation
      });
    });
    function stop() { if (mugTimer) { clearInterval(mugTimer); mugTimer = null; } }
    stop();
    if (!reduce) {
      mugTimer = setInterval(function () { show((idx + 1) % MUG_MESSAGES.length); }, 3200);
    }
  }

  /* ---------- CTA panel (dialog + mailto fallback) ---------- */
  function ensureDialog() {
    var dlg = document.getElementById("cta-panel");
    if (dlg) return dlg;
    dlg = el(
      '<dialog class="panel" id="cta-panel" aria-labelledby="cta-title">' +
        '<form method="dialog" class="panel__inner" id="cta-form">' +
          '<div class="panel__head">' +
            '<div><h3 id="cta-title">Request an alignment</h3>' +
            "<p>No backend, no tracking \u2014 this opens your email client with a tidy, " +
            "slightly ambiguous message. Confidence not included, but implied.</p></div>" +
            '<button type="button" class="panel__close" data-close aria-label="Close">\u00d7</button>' +
          "</div>" +
          '<label for="cta-name">Your name</label>' +
          '<input id="cta-name" name="name" autocomplete="name" placeholder="A confident stakeholder" />' +
          '<label for="cta-service">Service of interest</label>' +
          '<select id="cta-service" name="service">' +
            SERVICES.map(function (s) { return '<option value="' + esc(s.name) + '">' + esc(s.name) + "</option>"; }).join("") +
          "</select>" +
          '<label for="cta-msg">Your ambiguity</label>' +
          '<textarea id="cta-msg" name="msg" rows="3" placeholder="We are not sure what we need, but we need it aligned."></textarea>' +
          '<div class="panel__actions">' +
            '<button type="submit" class="btn btn--primary">Send via email</button>' +
            '<button type="button" class="btn btn--ghost" data-close>Cancel</button>' +
          "</div>" +
        "</form>" +
      "</dialog>"
    );
    document.body.appendChild(dlg);

    dlg.addEventListener("click", function (e) {
      if (e.target && e.target.hasAttribute("data-close")) { closeDialog(dlg); }
    });
    dlg.querySelector("#cta-form").addEventListener("submit", function (e) {
      // build mailto and hand off to the mail client
      var name = (dlg.querySelector("#cta-name").value || "A confident stakeholder").trim();
      var svc = dlg.querySelector("#cta-service").value;
      var msg = (dlg.querySelector("#cta-msg").value || "We need alignment. Details pending.").trim();
      var subject = "Alignment request: " + svc;
      var body = "Hello M&M Fufffens Consulting AB,\n\n" + msg +
        "\n\nRequested service: " + svc +
        "\n\nRegards,\n" + name +
        "\n\n(Meta-ETA\u2122 for your reply: after coffee.)";
      var href = "mailto:" + BRAND.contactEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = href;
      // allow default (method=dialog) to close it
    });
    return dlg;
  }

  var lastFocused = null;
  function openDialog() {
    var dlg = ensureDialog();
    lastFocused = document.activeElement;
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
    var first = dlg.querySelector("#cta-name");
    if (first) first.focus();
  }
  function closeDialog(dlg) {
    dlg = dlg || document.getElementById("cta-panel");
    if (!dlg) return;
    if (typeof dlg.close === "function" && dlg.open) dlg.close();
    else dlg.removeAttribute("open");
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  /* ---------- nav ---------- */
  function markNav() {
    var hash = location.hash || "#/";
    document.querySelectorAll(".nav__link").forEach(function (a) {
      var target = a.getAttribute("href") || "";
      // A link is current when the route starts with its target (but never the
      // bare brand/home link on the home route).
      var current = target !== "#/" && hash.indexOf(target) === 0;
      if (current) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* ---------- router ---------- */
  function parseHash() {
    var h = (location.hash || "#/").replace(/^#/, "");
    var m = h.match(/^\/service\/([a-z0-9-]+)/i);
    if (m) return { view: "service", slug: m[1] };
    if (h === "/" || h === "" || /^\/(#.*)?$/.test(h)) return { view: "home" };
    // support #/about, #/method, #/portfolio as home + scroll
    var sec = h.match(/^\/(about|method|portfolio)$/);
    if (sec) return { view: "home", scroll: sec[1] };
    return { view: "home" };
  }

  function render() {
    var app = document.getElementById("app");
    if (!app) return;
    var route = parseHash();
    var title = BRAND.legalName;

    if (route.view === "service") {
      var s = byId[route.slug];
      if (!s) { app.innerHTML = notFoundView(); document.title = "404 \u00b7 " + title; window.scrollTo(0, 0); markNav(); return; }
      app.innerHTML = detailView(s);
      document.title = s.name + " \u00b7 " + title;
      if (s.isMugWall) initMugWall();
      window.scrollTo(0, 0);
    } else {
      app.innerHTML = homeView();
      document.title = title + " \u2014 Convincing Nonsense\u2122";
      if (route.scroll) {
        var target = document.getElementById(route.scroll);
        if (target) target.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }
    // move focus to main for screen-reader route awareness
    app.setAttribute("tabindex", "-1");
    app.focus({ preventScroll: true });
    markNav();
  }

  /* ---------- global wiring ---------- */
  document.addEventListener("click", function (e) {
    var opener = e.target.closest ? e.target.closest("[data-open-cta]") : null;
    if (opener) { e.preventDefault(); openDialog(); return; }
    var toggle = e.target.closest ? e.target.closest(".nav__toggle") : null;
    if (toggle) {
      var links = document.querySelector(".nav__links");
      var open = links.getAttribute("data-open") === "true";
      links.setAttribute("data-open", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
    }
    // close mobile nav when a link is chosen
    var navlink = e.target.closest ? e.target.closest(".nav__link, .nav__cta") : null;
    if (navlink) {
      var lk = document.querySelector(".nav__links");
      if (lk) lk.setAttribute("data-open", "false");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var dlg = document.getElementById("cta-panel");
      if (dlg && dlg.open) closeDialog(dlg);
    }
  });

  window.addEventListener("hashchange", render);
  document.addEventListener("DOMContentLoaded", function () {
    // year in footer
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    render();
  });

  // If DOM already parsed (defer), render now.
  if (document.readyState !== "loading") {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    render();
  }
})();
