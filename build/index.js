var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/.pnpm/@remix-run+dev@1.5.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/danisal/Documents/git/daniel-salvado-website/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2TCKMWYX.css";

// route:/Users/danisal/Documents/git/daniel-salvado-website/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Daniel Salvado",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Reenie+Beanie&display=swap&text=DanielSalvado"
    }
  ];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/danisal/Documents/git/daniel-salvado-website/app/routes/legal-notice.tsx
var legal_notice_exports = {};
__export(legal_notice_exports, {
  default: () => LegalNotice,
  meta: () => meta2
});

// app/components/footer/footer.tsx
function Footer() {
  const year = new Date().getFullYear();
  return /* @__PURE__ */ React.createElement("footer", {
    className: "container mx-auto flex flex-col-reverse items-center justify-between gap-6 py-4 sm:flex-row"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA9 ", year, " Daniel Salvado"), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/daniel-salvado/",
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "Daniel on linkedin"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "h-6 w-6",
    "aria-label": "linkedIn",
    "aria-hidden": "true",
    "data-prefix": "fab",
    "data-icon": "linkedin-in",
    viewBox: "0 0 448 512"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/danisal",
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "Daniel on github"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "h-6 w-6",
    "aria-label": "github",
    "aria-hidden": "true",
    "data-prefix": "fab",
    "data-icon": "github",
    viewBox: "0 0 496 512"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/danisalTweets",
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "Daniel on twitter"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "h-6 w-6",
    "aria-label": "twitter",
    "aria-hidden": "true",
    "data-prefix": "fab",
    "data-icon": "twitter",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
  })))), /* @__PURE__ */ React.createElement("a", {
    href: "/legal-notice"
  }, "Legal Notice"));
}

// app/components/header/header.tsx
var import_react3 = require("@remix-run/react");
var import_react4 = require("react");
function Header() {
  const [shadow, setShadow] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    window.addEventListener(`scroll`, handleWindowScroll);
    return function cleanup() {
      window.removeEventListener(`scroll`, handleWindowScroll);
    };
  });
  const handleWindowScroll = () => {
    return setShadow(window.pageYOffset > 0);
  };
  return /* @__PURE__ */ React.createElement("header", {
    className: `sticky top-0 z-10 bg-white/95 py-4 text-blue-800 ${shadow && "shadow"}`
  }, /* @__PURE__ */ React.createElement("section", {
    className: "row mx-auto flex max-w-7xl items-center justify-between"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    className: "font-beanie text-4xl font-normal ",
    to: "/"
  }, "Daniel Salvado"), /* @__PURE__ */ React.createElement("nav", {
    className: "flex items-center justify-between gap-2"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/work"
  }, "Work"), /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/blog"
  }, "Writing"), /* @__PURE__ */ React.createElement(import_react3.Link, {
    style: {
      textDecoration: `none`,
      backgroundImage: `none`
    },
    to: "/contact"
  }, "Say Hello"))));
}

// route:/Users/danisal/Documents/git/daniel-salvado-website/app/routes/legal-notice.tsx
var meta2 = () => {
  return {
    title: "Legal notice | Daniel Salvado"
  };
};
function LegalNotice() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "container prose mx-auto px-7 py-16"
  }, /* @__PURE__ */ React.createElement("h1", null, "Privacy Policy"), /* @__PURE__ */ React.createElement("p", null, "Effective date: January 21, 2019"), /* @__PURE__ */ React.createElement("p", null, 'Daniel Salvado ("us", "we", or "our") operates the danielsalvado.com website (the "Service").'), /* @__PURE__ */ React.createElement("p", null, "This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Daniel Salvado is created with the help of the", ` `, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.freeprivacypolicy.com/"
  }, "Free Privacy Policy website"), "."), /* @__PURE__ */ React.createElement("p", null, "We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from danielsalvado.com"), /* @__PURE__ */ React.createElement("h2", null, "Information Collection And Use"), /* @__PURE__ */ React.createElement("p", null, "We collect several different types of information for various purposes to provide and improve our Service to you."), /* @__PURE__ */ React.createElement("h3", null, "Types of Data Collected"), /* @__PURE__ */ React.createElement("h4", null, "Personal Data"), /* @__PURE__ */ React.createElement("p", null, 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Email address"), /* @__PURE__ */ React.createElement("li", null, "First name and last name"), /* @__PURE__ */ React.createElement("li", null, "Cookies and Usage Data")), /* @__PURE__ */ React.createElement("h4", null, "Usage Data"), /* @__PURE__ */ React.createElement("p", null, `We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.`), /* @__PURE__ */ React.createElement("h4", null, "Tracking & Cookies Data"), /* @__PURE__ */ React.createElement("p", null, "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information."), /* @__PURE__ */ React.createElement("p", null, "Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."), /* @__PURE__ */ React.createElement("p", null, "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."), /* @__PURE__ */ React.createElement("p", null, "Examples of Cookies we use:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Session Cookies."), " We use Session Cookies to operate our Service."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Preference Cookies."), " We use Preference Cookies to remember your preferences and various settings."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Security Cookies."), " We use Security Cookies for security purposes.")), /* @__PURE__ */ React.createElement("h2", null, "Use of Data"), /* @__PURE__ */ React.createElement("p", null, "Daniel Salvado uses the collected data for various purposes:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "To provide and maintain the Service"), /* @__PURE__ */ React.createElement("li", null, "To notify you about changes to our Service"), /* @__PURE__ */ React.createElement("li", null, "To allow you to participate in interactive features of our Service when you choose to do so"), /* @__PURE__ */ React.createElement("li", null, "To provide customer care and support"), /* @__PURE__ */ React.createElement("li", null, "To provide analysis or valuable information so that we can improve the Service"), /* @__PURE__ */ React.createElement("li", null, "To monitor the usage of the Service"), /* @__PURE__ */ React.createElement("li", null, "To detect, prevent and address technical issues")), /* @__PURE__ */ React.createElement("h2", null, "Transfer Of Data"), /* @__PURE__ */ React.createElement("p", null, "Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."), /* @__PURE__ */ React.createElement("p", null, "If you are located outside Portugal and choose to provide information to us, please note that we transfer the data, including Personal Data, to Portugal and process it there."), /* @__PURE__ */ React.createElement("p", null, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."), /* @__PURE__ */ React.createElement("p", null, "Daniel Salvado will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."), /* @__PURE__ */ React.createElement("h2", null, "Disclosure Of Data"), /* @__PURE__ */ React.createElement("h3", null, "Legal Requirements"), /* @__PURE__ */ React.createElement("p", null, "Daniel Salvado may disclose your Personal Data in the good faith belief that such action is necessary to:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "To comply with a legal obligation"), /* @__PURE__ */ React.createElement("li", null, "To protect and defend the rights or property of Daniel Salvado"), /* @__PURE__ */ React.createElement("li", null, "To prevent or investigate possible wrongdoing in connection with the Service"), /* @__PURE__ */ React.createElement("li", null, "To protect the personal safety of users of the Service or the public"), /* @__PURE__ */ React.createElement("li", null, "To protect against legal liability")), /* @__PURE__ */ React.createElement("h2", null, "Security Of Data"), /* @__PURE__ */ React.createElement("p", null, "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."), /* @__PURE__ */ React.createElement("h2", null, "Service Providers"), /* @__PURE__ */ React.createElement("p", null, 'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.'), /* @__PURE__ */ React.createElement("p", null, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."), /* @__PURE__ */ React.createElement("h3", null, "Analytics"), /* @__PURE__ */ React.createElement("p", null, "We may use third-party Service Providers to monitor and analyze the use of our Service."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Google Analytics")), /* @__PURE__ */ React.createElement("p", null, "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network."), /* @__PURE__ */ React.createElement("p", null, "You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity."), ` `, /* @__PURE__ */ React.createElement("p", null, "For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:", ` `, /* @__PURE__ */ React.createElement("a", {
    href: "https://policies.google.com/privacy?hl=en"
  }, "https://policies.google.com/privacy?hl=en")))), /* @__PURE__ */ React.createElement("h2", null, "Links To Other Sites"), /* @__PURE__ */ React.createElement("p", null, "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."), /* @__PURE__ */ React.createElement("p", null, "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."), /* @__PURE__ */ React.createElement("h2", null, "Children's Privacy"), /* @__PURE__ */ React.createElement("p", null, 'Our Service does not address anyone under the age of 18 ("Children").'), /* @__PURE__ */ React.createElement("p", null, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."), /* @__PURE__ */ React.createElement("h2", null, "Changes To This Privacy Policy"), /* @__PURE__ */ React.createElement("p", null, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."), /* @__PURE__ */ React.createElement("p", null, 'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.'), /* @__PURE__ */ React.createElement("p", null, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."), /* @__PURE__ */ React.createElement("h2", null, "Contact Us"), /* @__PURE__ */ React.createElement("p", null, "If you have any questions about this Privacy Policy, please contact us:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "By visiting this page on our website: daniel.salvado.com/contact"))), /* @__PURE__ */ React.createElement(Footer, null));
}

// route:/Users/danisal/Documents/git/daniel-salvado-website/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta3
});

// public/assets/profile-pic.jpg
var profile_pic_default = "/build/_assets/profile-pic-5MXYCQXR.jpg";

// app/components/bio/bio.tsx
function Bio() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "About the Author"), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "Daniel Profile",
    className: "h-24 w-24 shrink-0 rounded-full object-cover object-center",
    loading: "lazy",
    src: profile_pic_default
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", {
    className: "mb-2.5"
  }, "Daniel Salvado"), /* @__PURE__ */ React.createElement("p", null, "Software Engineer | Developer | JavaScript Enthusiast. Strive to improve on code and the people around me! Follow", ` `, /* @__PURE__ */ React.createElement("a", {
    className: "text-blue-800 no-underline",
    href: `https://twitter.com/@danisalTweets`
  }, "@danisalTweets")))));
}

// route:/Users/danisal/Documents/git/daniel-salvado-website/app/routes/index.tsx
var meta3 = () => {
  return {
    title: "Home | Daniel Salvado"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "container prose mx-auto px-7"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to my personal virtual space!"), /* @__PURE__ */ React.createElement("p", null, "Hi, my name is Daniel Salvado, I'm an enthusiastic developer who loves to work within the JavaScript ecosystem and always strive to improve on code and build beautiful apps."), /* @__PURE__ */ React.createElement("p", null, "In here you will be able to find some of the work that I've done, places where I've worked and some articles that I've written."), /* @__PURE__ */ React.createElement("p", null, "I love to share my know-how and things that I find interesting and because of that I do some writing on things that I've tested and in some way, helped me on the products that I was building!"), /* @__PURE__ */ React.createElement("p", null, "Feel free to share the articles or even to contact me if you have any questions, suggestions or simply say hi!"), /* @__PURE__ */ React.createElement(Bio, null)), /* @__PURE__ */ React.createElement(Footer, null));
}

// route:/Users/danisal/Documents/git/daniel-salvado-website/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog
});
var import_react5 = require("@remix-run/react");
function Blog() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "container prose mx-auto px-7 py-16"
  }, /* @__PURE__ */ React.createElement("h1", null, "Reading material"), /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "/blog/responsive-columns-with-css-grid"
  }, "Responsive Columns With Css Grid")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("time", {
    dateTime: "Sat Jul 20 2019"
  }, /* @__PURE__ */ React.createElement("small", null, "July 20, 2019")), /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "clock emoji"
  }, "\u23F1"), "2 minutes reading")), /* @__PURE__ */ React.createElement("p", null, "Recently I came across with a UI challenge, I wanted to have a group of elements that display in a row, that row should also be dynamic. I\u2026")), /* @__PURE__ */ React.createElement(Bio, null)), /* @__PURE__ */ React.createElement(Footer, null));
}

// route:/Users/danisal/Documents/git/daniel-salvado-website/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => Blog2
});
function Blog2() {
  return /* @__PURE__ */ React.createElement("div", null, "Blog");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "489104b8", "entry": { "module": "/build/entry.client-AU2V2LCV.js", "imports": ["/build/_shared/chunk-PGP2UT6M.js", "/build/_shared/chunk-ANST3MXO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-BBD2CDGF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-7SEDWRZH.js", "imports": ["/build/_shared/chunk-R7TN6P6W.js", "/build/_shared/chunk-CST5AVY5.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "routes/blog", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-LXNPMLIF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EXJX5HQV.js", "imports": ["/build/_shared/chunk-R7TN6P6W.js", "/build/_shared/chunk-CST5AVY5.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/legal-notice": { "id": "routes/legal-notice", "parentId": "root", "path": "legal-notice", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/legal-notice-5FY3L77P.js", "imports": ["/build/_shared/chunk-CST5AVY5.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-489104B8.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/legal-notice": {
    id: "routes/legal-notice",
    parentId: "root",
    path: "legal-notice",
    index: void 0,
    caseSensitive: void 0,
    module: legal_notice_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
