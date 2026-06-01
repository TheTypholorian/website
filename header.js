window.addEventListener("DOMContentLoaded", async () => {
    const resp = await fetch("/header.html");
    const html = await resp.text();

    document.body.insertAdjacentHTML("afterbegin", html);
});