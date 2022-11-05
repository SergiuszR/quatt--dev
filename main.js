let userAgent = window.navigator.userAgent;
let words = userAgent.split(" ");
let platform = words[1].replace(/[^a-zA-Z ]/g, "");
console.log(platform);

function useRegexAndroid(userAgent) {
  let regex = /\bAndroid\b/gm;
  return regex.test(userAgent);
}

console.log(useRegexAndroid(userAgent));

// if (platform === "Macintosh" || platform === "iPad" || platform === "iPhone") {
//     console.log(platform)
// } else if (platform === "Windows" || platform === "iPad" || platform === "iPhone")
