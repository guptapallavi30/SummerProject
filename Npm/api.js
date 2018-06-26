const fetch = require("node-fetch");
debugger
async function showGitHubUser(handle) {
    debugger
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const user = await response.json();
    console.log(user.login);
    console.log(user.id);
}
debugger
showGitHubUser("checksanjay");