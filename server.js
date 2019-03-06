const phtml = require("phtml");
const phtmlJsx = require("@phtml/jsx");

const page = `<!doctype html>
<>
  <html lang="en" dir={dir}>
    <head>
      <title>pHTML JSX</title>
    </head>
    <body>
      <p class={pClass}>Hello, {name}!</p>
    </body>
  </html>
</>`;

const data = { dir: "ltr", pClass: "foo", name: "World" };

new phtml([phtmlJsx()]).process(page, data);
