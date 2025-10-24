const SECRET_KEY = "halloween_secret_pumpkin_v1";

const AVAILABLE_PUMPKINS = [
  "hero-pumpkin-1",
  "hero-pumpkin-2",
  "hero-pumpkin-3",
  "hero-pumpkin-4",
];
export function forceSecretPumpkinId(forcedId: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SECRET_KEY, forcedId);
}

export function getOrCreateSecretPumpkinId() {
  if (typeof window === "undefined") return null;
  let id = localStorage.getItem(SECRET_KEY);
  if (!id) {
    const randomIndex = Math.floor(Math.random() * AVAILABLE_PUMPKINS.length);
    id = AVAILABLE_PUMPKINS[randomIndex];
    localStorage.setItem(SECRET_KEY, id);
  }
  return id;
}
