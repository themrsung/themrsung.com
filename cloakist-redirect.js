const url = window.location.href;

const var1 = "https://www.themrsung.com/" === url;
const var2 = "https://www.themrsung.com" === url;
const var3 = "https://themrsung.com/" === url;
const var4 = "https://themrsung.com" === url;

const debug = url.includes("debugbypass");

if (!(var1 || var2 || var3 || var4 || debug)) {
  window.location.href = "https://www.themrsung.com/";
  // window.location.replace("https://www.themrsung.com/");
}
