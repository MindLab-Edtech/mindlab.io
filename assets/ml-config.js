/* MindLab site config — one place for keys, loaded by all three pages.
   LEAD_ENDPOINT: Google Apps Script web-app URL (ends in /exec) — see FORM-SETUP.md
   POSTHOG_KEY:   PostHog project API key (phc_…)                — see FORM-SETUP.md
   Both empty = everything stays local: form/newsletter confirm on-page only, no analytics loads. */
window.ML = {
  LEAD_ENDPOINT: 'https://script.google.com/macros/s/AKfycbyW3etgZ8fiMkR28X_E6fxFaLJ7_eZnCSf3yZ8-GdXm2osCWOpxvH70Q4TWDRj9VK4Psg/exec',
  POSTHOG_KEY: 'phc_zU7YrbhD5ZtDnSxvqCpD3b65AQh2GRi9J57bsGvj5qTZ',
  POSTHOG_HOST: 'https://us.i.posthog.com'
};

/* tiny tracker: safe no-op until PostHog is live */
window.mltrack = function (name, props) {
  try { window.posthog && window.posthog.capture(name, props || {}); } catch (e) {}
};

/* PostHog loader — only runs when a key is set */
(function () {
  var c = window.ML;
  if (!c.POSTHOG_KEY) return;
  var s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = c.POSTHOG_HOST.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js';
  s.onload = function () {
    window.posthog && window.posthog.init(c.POSTHOG_KEY, {
      api_host: c.POSTHOG_HOST,
      defaults: '2025-05-24',
      person_profiles: 'identified_only'
    });
  };
  document.head.appendChild(s);
})();
