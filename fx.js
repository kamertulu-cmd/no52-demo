// No52 demo: kaydırdıkça dolan şişe, parallax ve bölümlerin belirmesi.
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var level = document.getElementById("oil-level");
  var ticking = false;
  var fxs = Array.prototype.slice.call(document.querySelectorAll(".fx"));

  function update() {
    var max = root.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (level) level.setAttribute("transform", "translate(0 " + (124 * (1 - p)).toFixed(1) + ")");
    if (!reduce) {
      root.style.setProperty("--sy", String(Math.round(window.scrollY)));
      // Her bölümdeki dallar kendi konumuna göre hafifçe kayar (parallax).
      fxs.forEach(function (fx) {
        var r = fx.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        fx.style.setProperty("--py", String(Math.round(r.top + r.height / 2 - window.innerHeight / 2)));
      });
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();

  // Bölümler kaydırıldıkça yumuşakça belirir.
  var sel = ".sec-head, .card, .steps li, .band-grid > div, .post, .oil-card, .contact > div, .pdp > *, .spec, .draft";
  var items = Array.prototype.slice.call(document.querySelectorAll(sel));
  if (!("IntersectionObserver" in window) || reduce) return;
  var seen = new WeakMap();
  items.forEach(function (el) {
    var parent = el.parentElement;
    var n = seen.get(parent) || 0;
    seen.set(parent, n + 1);
    el.style.setProperty("--d", Math.min(n, 5) * 0.09 + "s");
    el.classList.add("reveal");
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  items.forEach(function (el) { io.observe(el); });
})();
