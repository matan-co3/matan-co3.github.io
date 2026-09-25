/* =========================================================================
   SHARED ENGINE — helpers, animations, lightbox, page transitions.
   You don't need to edit this file. Content lives in content.js.
   ========================================================================= */
(function () {
  var PF = {};

  PF.esc = function (s) { return (s == null ? "" : String(s)); };

  // image on a framed panel (natural proportions, click to zoom); placeholder if empty
  PF.imgBox = function (src, label, ratio) {
    ratio = ratio || "4 / 3";
    if (src) {
      return '<figure class="media media--img"><img loading="lazy" src="' + PF.esc(src) +
             '" alt="' + PF.esc(label) + '"></figure>';
    }
    return '<div class="media media--empty" style="aspect-ratio:' + ratio + '">' +
           '<span class="media__ph">' + PF.esc(label) + '</span>' +
           '<span class="media__hint">add image</span></div>';
  };

  PF.renderAbout = function (el, a) {
    if (!el) return;
    var groups = (a.skillGroups || []).map(function (g) {
      var items = (g.items || []).map(function (it) { return '<li>' + PF.esc(it) + '</li>'; }).join("");
      return '<div class="skills__group"><h4>' + PF.esc(g.label) + '</h4><ul>' + items + '</ul></div>';
    }).join("");
    function expRow(e) {
      return '<div class="exp__row">' +
        '<div class="exp__role">' + PF.esc(e.role) + '</div>' +
        '<div class="exp__org">' + PF.esc(e.org) + '</div>' +
        '<div class="exp__years">' + PF.esc(e.years) + '</div></div>';
    }
    var exp = (a.experience || []).map(expRow).join("");
    // Education sits with the experience table rather than in the about copy:
    // it's the same kind of information (what, where, when), so it gets the
    // same compact row, under its own small heading. A plain string still
    // works — it just fills the first column on its own.
    var edu = a.education
      ? '<h4 class="exp__head exp__head--sub">Education</h4>' +
        expRow(typeof a.education === "string" ? { role: a.education, org: "", years: "" } : a.education)
      : '';
    el.innerHTML =
      '<div class="about__lead reveal">' +
        '<p>' + PF.esc(a.intro) + '</p>' +
        // "ai" is optional — the current about folds AI into the intro
        // instead of giving it its own paragraph.
        (a.ai ? '<p>' + PF.esc(a.ai) + '</p>' : '') +
        '<p>' + PF.esc(a.values) + '</p>' +
      '</div>' +
      '<div class="skills reveal">' + groups + '</div>' +
      '<div class="exp reveal"><h4 class="exp__head">Experience</h4>' + exp + edu + '</div>';
  };

  PF.renderContact = function (el, c) {
    if (!el) return;
    var links = (c.links || []).map(function (l) {
      return '<a class="contact__link" href="' + PF.esc(l.url) + '" target="_blank" rel="noopener">' + PF.esc(l.label) + ' ↗</a>';
    }).join("");
    el.innerHTML =
      '<h2 class="contact__title">Let’s work together.</h2>' +
      '<p class="contact__line">' + PF.esc(c.line) + '</p>' +
      '<a class="contact__email" href="mailto:' + PF.esc(c.email) + '">' + PF.esc(c.email) + '</a>' +
      '<div class="contact__links">' + links + '</div>';
  };

  // add .reveal + incremental delay to a container's children
  PF.stagger = function (sel) {
    document.querySelectorAll(sel).forEach(function (parent) {
      Array.prototype.forEach.call(parent.children, function (child, i) {
        child.classList.add("reveal");
        child.style.transitionDelay = (Math.min(i, 8) * 65) + "ms";
      });
    });
  };

  PF.initReveal = function () {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  };

  PF.heroIn = function () {
    var kids = document.querySelectorAll("#hero > *");
    kids.forEach(function (el, i) { el.classList.add("reveal"); el.style.transitionDelay = (i * 90) + "ms"; });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { kids.forEach(function (el) { el.classList.add("is-in"); }); });
    });
  };

  // ---- Lightbox (any .media--img image) ----
  function initLightbox() {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = '<button class="lightbox__close" aria-label="Close">×</button><img alt="">';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    document.addEventListener("click", function (e) {
      var img = e.target.closest && e.target.closest(".media--img img");
      if (img) { lbImg.src = img.currentSrc || img.src; lb.classList.add("open"); document.body.style.overflow = "hidden"; return; }
      if (e.target === lb || (e.target.closest && e.target.closest(".lightbox__close"))) close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  // ---- Nav shadow ----
  function initNav() {
    var nav = document.getElementById("nav");
    if (!nav) return;
    window.addEventListener("scroll", function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 20);
    }, { passive: true });
  }

  // ---- Page transitions (animated wipe between pages) ----
  function initTransitions() {
    requestAnimationFrame(function () { document.body.classList.add("ready"); });
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a) return;
      var href = a.getAttribute("href") || "";
      var internal = a.dataset.nav === "1" || /\.html(\?|#|$)/.test(href);
      if (!internal) return;
      if (a.target === "_blank" || /^https?:\/\//.test(href) || href.indexOf("mailto:") === 0) return;
      e.preventDefault();
      document.body.classList.remove("ready");
      document.body.classList.add("leaving");
      setTimeout(function () { window.location.href = href; }, 520);
    });
    // handle back/forward cache
    window.addEventListener("pageshow", function (ev) {
      if (ev.persisted) { document.body.classList.remove("leaving"); document.body.classList.add("ready"); }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLightbox(); initNav(); initTransitions();
  });

  // PHONES - no heading ends on a lonely last word: the last two words of a
  // longer heading are tied together (only where the pair still fits the line)
  PF.noWidows = function () {
    if (!window.matchMedia("(max-width: 720px)").matches) return;
    document.querySelectorAll("h1, h2, h3, h4, .lp__label, .carousel__subtitle, .project__next strong, .cv__role").forEach(function (el) {
      if (el.dataset.nw || !el.offsetParent) return;
      var words = el.textContent.trim().split(/\s+/);
      if (words.length < 4) return;
      var tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), last = null, n;
      while ((n = tw.nextNode())) if (/\S/.test(n.data)) last = n;
      if (!last) return;
      var before = last.data;
      // tie the last gap; if the word before it is a separator (- · &), tie that gap too
      var t = before.replace(/\s+(\S+)\s*$/, "\u00a0$1");
      t = t.replace(/\s+([-·&])\u00a0/, "\u00a0$1\u00a0");
      if (t === before) return;
      last.data = t; el.dataset.nw = "1";
      if (el.scrollWidth > el.clientWidth + 1) { last.data = before; }   // pair doesn't fit - leave it
    });
  };
  window.addEventListener("load", function () { PF.noWidows(); setTimeout(PF.noWidows, 700); });

  window.PF = PF;
})();
