// 카드에 커서가 올라가면 살짝 광원이 따라오는 느낌 (너무 과하면 촌스러워서 은은하게)
const cards = document.querySelectorAll(".card, .year-card, .link-card, .media");

for (const el of cards) {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  });
}

// 추가로 원하면 여기에 parallax 같은 효과도 붙일 수 있음.
