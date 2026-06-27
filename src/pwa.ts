import { registerSW } from "virtual:pwa-register";

const intervalMS = 1 * 60 * 1000;

export const updateSW = registerSW({
  onRegisteredSW(swUrl, r) {
    if (!r) return;

    setInterval(async () => {
      if (r.installing || !navigator) return;

      if ("connection" in navigator && !navigator.onLine) return;

      const resp = await fetch(swUrl, {
        cache: "no-store",
        headers: {
          cache: "no-store",
          "cache-control": "no-cache",
        },
      });

      if (resp?.status === 200) await r.update();
    }, intervalMS);
  },
});

// import { registerSW } from "virtual:pwa-register";

// // how often each open tab checks for a new version
// const UPDATE_INTERVAL_MS = 60 * 1000;

// registerSW({
//   immediate: true,
//   onRegisteredSW(_swUrl, registration) {
//     if (!registration) return;

//     // periodic background check
//     setInterval(() => {
//       if (registration.installing) return;
//       if ("onLine" in navigator && !navigator.onLine) return;
//       registration.update();
//     }, UPDATE_INTERVAL_MS);

//     // check the moment a user returns to the tab
//     document.addEventListener("visibilitychange", () => {
//       if (document.visibilityState === "visible") {
//         registration.update();
//       }
//     });
//   },
// });
