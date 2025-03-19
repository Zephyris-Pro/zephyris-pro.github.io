function scramble(el, time, originalText = "") {
  const letters = "=-/\\~_+^?!#&%$@*";
  const orig = originalText || el.innerText;
  const end = new Date().getTime() + time;
  let chars = orig.split("");
  const ridx = (a) => Math.floor(Math.random() * a.length);
  const inner = () => {
    const now = new Date().getTime();
    if (now > end) {
      el.innerText = orig;
      return;
    }
    for (let i = 0; i < 2; i++) {
      const j = ridx(chars);
      chars[j] =
        Math.random() < Math.min(0.5, (end - now) / 1000)
          ? `<span class="letters">${letters[ridx(letters)]}</span>`
          : orig[j];
    }
    el.innerHTML = chars.join("");
    requestAnimationFrame(inner);
  };
  requestAnimationFrame(inner);
}
