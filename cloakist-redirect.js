const url = window.location.href;
const suburl = url.length > 26;

console.log(url, suburl);

if (suburl && !window.location.href.includes('debugbypass')) {
  window.location.replace('https://themrsung.com/');
}
