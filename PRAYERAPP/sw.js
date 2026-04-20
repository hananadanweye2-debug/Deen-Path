// SIMPLE DAILY CHECK (best-effort browser approach)

self.addEventListener("install", () => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", () => {});

// Check every hour
setInterval(() => {
  const now = new Date();

  if (now.getHours() === 8 && now.getMinutes() === 0) {
    self.registration.showNotification("📖 Daily Ayah", {
      body: "Your daily reminder from the Quran",
      icon: ""
    });
  }
}, 60000);
