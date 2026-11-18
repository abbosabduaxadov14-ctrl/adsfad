const path = require('node:path');
const packages = {
  "landing": [
    "index.html",
    "landing.js",
    "landing.css"
  ],
  "catalog": [
    "catalog.js",
    "courses.js",
    "course-guides.js",
    "micro-lectures.js"
  ],
  "auth": [
    "signin.html",
    "signup.html",
    "supabaseClient.js",
    "auth-config.js",
    "signup.js",
    "auth.css"
  ],
  "watch": [
    "watch.html",
    "watch.js",
    "watch.css"
  ],
  "notes": [
    "notes.html",
    "notes.js",
    "notes-store.js",
    "notes.css"
  ],
  "lesson": [
    "lesson.html",
    "app.js",
    "pilot.js"
  ],
  "discovery": [
    "discovery.html",
    "discovery.js",
    "quiz-data.js"
  ],
  "team": [
    "team.html",
    "team.js",
    "team.css"
  ],
  "shared": [
    "brand.css",
    "community.css",
    "style.css",
    "warmth.css"
  ]
};

function frontendSource(name) {
  const normalized = name.split(path.sep).join('/');
  return sourceFiles.get(normalized);
}

const sourceFiles = new Map();
for (const [feature, files] of Object.entries(packages)) {
  for (const file of files) sourceFiles.set(file, path.join('frontend', feature, file));
}

const publicFiles = new Set([
  'vendor/supabase.js', 'auth.css', 'signin.html', 'index.html', 'signup.html', 'watch.html', 'lesson.html', 'discovery.html', 'team.html', 'notes.html',
  'notes-store.js', 'notes.js', 'notes.css',
  'courses.js', 'micro-lectures.js', 'course-guides.js', 'catalog.js', 'landing.js',
  'auth-config.js', 'supabaseClient.js', 'signup.js', 'watch.js', 'app.js', 'discovery.js', 'quiz-data.js', 'pilot.js',
  'style.css', 'watch.css', 'warmth.css', 'brand.css', 'community.css',
  'assets/hamkema-mark.svg', 'assets/subject-economics.svg', 'assets/subject-explore.svg',
  'assets/hamkema-boy-cutout-v1.png', 'assets/hamkema-boy-tablet-v1.png',
  'assets/hamkema-boy-books-v1.png', 'assets/hamkema-boy-notes-v1.png',
  'assets/fonts/DelaGothicOne-Regular.ttf', 'assets/fonts/Montserrat-variable.ttf',
  ...['ea237.svg', '323ba.svg', 'ccd82.png', 'a41d2.png', '71c6c.png', '79a95.png', '62570.png', '87d23.png', '40530.png']
    .map(name => 'assets/figma-globaltalk/' + name)
]);
for (const name of publicFiles) {
  if (!sourceFiles.has(name)) sourceFiles.set(name, path.join('frontend', name));
}
const headers = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://*.supabase.co; frame-src https://www.youtube-nocookie.com; object-src 'none'; base-uri 'none'; form-action 'self'; frame-ancestors 'self'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};
module.exports = { publicFiles, frontendSource, headers };
