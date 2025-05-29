(function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
    new MutationObserver(e => {
        for (const n of e)
            if (n.type === "childList")
                for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && l(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(e) {
        const n = {};
        return e.integrity && (n.integrity = e.integrity), e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? n.credentials = "include" : e.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function l(e) {
        if (e.ep) return;
        e.ep = !0;
        const n = t(e);
        fetch(e.href, n)
    }
})();
const d = document.getElementById("audio"),
    m = document.getElementById("mute"),
    L = document.getElementById("day"),
    M = document.getElementById("hour"),
    E = document.getElementById("minute"),
    C = document.getElementById("second"),
    p = document.getElementById("send"),
    c = document.querySelector("input[name=guest]"),
    x = document.querySelectorAll("input[name=attendance]"),
    B = new Date("2025-06-22T00:00:00"),
    u = document.getElementById("guest-valid"),
    y = document.getElementById("attendance-valid"),
    I = `
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#00000030" height="30" width="30" xmlns="http://www.w3.org/2000/svg" style="color: rgba(0, 0, 0, 0.19);"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></path><path d="M243.33 98.86a23.89 23.89 0 00-25.55 1.82l-.66.51-28.52 23.35a8 8 0 00-.59 11.85l54.33 54.33a8 8 0 0013.66-5.66v-64.49a24.51 24.51 0 00-12.67-21.71zm8 236.43L96.69 180.69A16 16 0 0085.38 176H56a24 24 0 00-24 24v112a24 24 0 0024 24h69.76l92 75.31a23.9 23.9 0 0025.87 1.69A24.51 24.51 0 00256 391.45v-44.86a16 16 0 00-4.67-11.3zM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 10-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 002.32 6.25l14.36 14.36a8 8 0 0013.55-4.31A146 146 0 00352 256zm64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 00-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 001.9 8.26L389 337.4a8 8 0 0013.13-2.79C411 311.76 416 287.26 416 256z"></path><path d="M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 10-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 001.59 9l11.92 11.92a8 8 0 0012.92-2.16C471.6 344.9 480 305 480 256z"></path></svg>
`,
    T = `
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#00000030" height="30" width="30" xmlns="http://www.w3.org/2000/svg" style="color: rgba(0, 0, 0, 0.19);"><path d="M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z"></path><path d="M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z"></path><path d="M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z"></path></svg>
`;

function A() {
    d.played || d.play(), d.muted ? (m.innerHTML = T, d.muted = !1) : (m.innerHTML = I, d.muted = !0)
}
const g = () => {
        const s = B - new Date,
            t = Math.floor(s / 1e3),
            l = Math.floor(t / (24 * 3600)),
            e = Math.floor(t % (24 * 3600) / 3600),
            n = Math.floor(t % 3600 / 60),
            a = t % 60;
        L.innerText = l.toString(), M.innerText = e < 10 ? "0" + e.toString() : e.toString(), E.innerText = n < 10 ? "0" + n.toString() : n.toString(), C.innerText = a < 10 ? "0" + a.toString() : a.toString()
    },
    r = Array.from(document.querySelectorAll("*")).filter(o => window.getComputedStyle(o).transform !== "none" && !o.classList.contains("-translate-y-1/2") && !o.classList.contains("-translate-x-1/2")),
    h = [];

function f() {
    const s = window.scrollY + window.innerHeight;
    for (let t = 0; t < r.length; t++) {
        const n = window.getComputedStyle(r[t]).transform.match(/matrix.*\((.+)\)/)[1].split(", "),
            a = parseFloat(n[4]),
            w = parseFloat(n[5] ? n[5] : 0),
            i = s - (r[t].getBoundingClientRect().top + window.scrollY);
        if (i > 0 && i < window.innerHeight) {
            const v = Math.min(1, i / window.innerHeight),
                S = a < 0 ? Math.min(0, a + i) : Math.max(0, a - i);
            r[t].style.opacity = v, r[t].style.transform = `translateX(${S}px) translateY(${w}px)`
        } else i >= window.innerHeight ? (r[t].style.opacity = 1, r[t].style.transform = "translateX(0)") : (r[t].style.opacity = 0, r[t].style.transform = `translateX(${h[t]*50}px)`)
    }
}
setInterval(g, 1e3);
document.addEventListener("DOMContentLoaded", () => {
    for (let o = 0; o < r.length; o++) {
        const l = window.getComputedStyle(r[o]).transform.match(/matrix.*\((.+)\)/)[1].split(", "),
            e = parseFloat(l[4]);
        h[o] = e > 0 ? 1 : -1
    }
    g(), 
    requestAnimationFrame(f), 
    window.addEventListener("scroll", () => {
        requestAnimationFrame(f)
    }), document.addEventListener("visibilitychange", f), setTimeout(() => {
        document.getElementById("spinner").remove()
    }, 1e3), c.addEventListener("change", () => {
        c.value !== "" && u.style.display === "" && (u.style.display = "none")
    }), c.addEventListener("keydown", () => {
        u.style.display === "" && (u.style.display = "none")
    }), x.forEach(o => {
        o.addEventListener("change", () => {
            (o.value !== null || String(o.value).trim() !== "") && y.style.display === "" && (y.style.display = "none")
        })
    })
});
p.addEventListener("click", async o => {
    o.preventDefault(), c.value === "" && (u.style.display = "");
    const s = document.querySelector("input[name=attendance]:checked");
    if ((s === null || s.value === "" || s.value === null) && (y.style.display = ""), c.value !== "" && s.value !== "") {
        try {
            const l = await (await fetch("/.netlify/functions/sendMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: `*GuestName*: ${c.value} 
*Attendance*: ${s.value}`
                })
            })).json();
            console.log(l)
        } catch (t) {
            console.error("Error:", t)
        }
        p.classList.add("active"), document.getElementById("send-btn-text").innerText = "ОТПРАВЛЕНО"
    }
});