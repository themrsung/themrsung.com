const url = window.location.href;

const var1 = "https://www.themrsung.com/" === url;
const var2 = "https://www.themrsung.com" === url;
const var3 = "https://themrsung.com/" === url;
const var4 = "https://themrsung.com" === url;

if (!(var1 || var2 || var3 || var4) && !window.location.href.includes("debugbypass")) {
  window.location.replace("https://www.themrsung.com/");
}
