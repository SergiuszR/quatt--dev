let userAgent = window.navigator.userAgent;
console.log(userAgent);
console.log(window.navigator);
let words = userAgent.split(" ");
let platform = words[1].replace(/[^a-zA-Z ]/g, "");
console.log(platform);
