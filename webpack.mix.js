const mix = require("laravel-mix");

mix
  .js("src/js/index.js", "web/js")
  .postCss("src/css/app.css", "web/css", [require("tailwindcss")])
  .browserSync({
    proxy: "localhost:5555",
    files: [
      "templates/**/*.twig",
      "templates/**/*.html",
      "web/**/*.js",
      "web/**/*.css",
    ],
  });
