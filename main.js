let userAgent = window.navigator.userAgent;
let words = userAgent.split(" ");
let platform = words[1].replace(/[^a-zA-Z ]/g, "");
console.log(platform);

function useRegexMacintosh(userAgent) {
  let regex = /\bMacintosh\b/gm;
  return regex.test(userAgent);
}
function useRegexAndroid(userAgent) {
  let regex = /\bAndroid\b/gm;
  return regex.test(userAgent);
}
function useRegexWindows(userAgent) {
  let regex = /\bWindows\b/gm;
  return regex.test(userAgent);
}
function useRegexIphone(userAgent) {
  let regex = /\biPhone\b/gm;
  return regex.test(userAgent);
}
function useRegexIpad(userAgent) {
  let regex = /\biPad\b/gm;
  return regex.test(userAgent);
}

if (useRegexWindows(userAgent) || useRegexAndroid(userAgent)) {
  alert(`Platform L: ${platform}`);
} else if (
  useRegexMacintosh(userAgent) ||
  useRegexIphone(userAgent) ||
  useRegexIpad(userAgent)
) {
  alert(`Platform H: ${platform}`);
}

console.log(useRegexAndroid(userAgent));
