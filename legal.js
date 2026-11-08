// Legal pages share the store settings with index.html. Keep these in sync with its CONFIG.
const LEGAL = { supportEmail: "kumar.aayush2310@gmail.com", activations: 2, refundDays: 14 };
if (!LEGAL.supportEmail.includes("REPLACE")) {
  document.querySelectorAll(".support-link").forEach((a) => (a.href = "mailto:" + LEGAL.supportEmail));
}
document.querySelectorAll(".activations").forEach((el) => (el.textContent = LEGAL.activations));
document.querySelectorAll(".refund-days").forEach((el) => (el.textContent = LEGAL.refundDays));
const theme = new URLSearchParams(location.search).get("theme");
if (theme === "dark" || theme === "light") document.documentElement.dataset.theme = theme;
