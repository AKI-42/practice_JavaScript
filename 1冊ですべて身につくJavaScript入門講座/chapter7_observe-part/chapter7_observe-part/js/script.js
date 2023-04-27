// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //   console.log(entry.target);
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      //   一度表示されたら監視を終了する;
      obs.unobserve(entry.target);
    }
  });
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadein(監視対象)を変数へ
const fadeElements = document.querySelectorAll('.fadein');

// ./fadeinを監視するように指示
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});
