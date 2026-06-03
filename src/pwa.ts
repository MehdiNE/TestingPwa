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
