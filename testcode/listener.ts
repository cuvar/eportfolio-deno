// type IpifyResponse = {
//   ip: String;
// };

// const response = await fetch("https://api.ipify.org?format=json");
// const ipData: IpifyResponse = await response.json();

// console.log(`Your IP is ${ipData.ip}`);

// const postRequest = await fetch("https://example.com/profile", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ username: "example" }),
// });

// https://api.github.com/users/denoland

const response = await fetch("https://api.kanye.rest/");
const ipData = await response.json();

console.dir(ipData);
