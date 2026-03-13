// Энэ кодыг бүх HTML файлын </body> өмнө нэмнэ

// Одоогийн файлын дугаарыг URL-аас авна (ppt1.html -> 1)
const currentPage = parseInt(
  window.location.pathname.match(/ppt(\d+)\.html/)?.[1] || "1",
);
const totalPages = 9; // Нийт слайдын тоо

function goToPage(n) {
  if (n < 1 || n > totalPages) return;
  window.location.href = `ppt${n}.html`;
}

// Гар дээрх arrow товч
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown")
    goToPage(currentPage + 1);
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") goToPage(currentPage - 1);
});

// Дэлгэц дээрх товч
const nav = document.createElement("div");
nav.innerHTML = `
  <style>
    .slide-nav {
      position: fixed; bottom: 30px; right: 30px;
      display: flex; gap: 12px; z-index: 9999;
    }
    .slide-nav button {
      width: 48px; height: 48px; border-radius: 50%;
      background: rgba(0,0,0,0.5); color: white;
      border: none; font-size: 20px; cursor: pointer;
      transition: background 0.2s;
    }
    .slide-nav button:hover { background: rgba(0,0,0,0.8); }
    .slide-nav button:disabled { opacity: 0.3; cursor: default; }
    .slide-counter {
      position: fixed; bottom: 38px; left: 50%;
      transform: translateX(-50%);
      color: rgba(255,255,255,0.6); font-size: 13px; z-index: 9999;
    }
  </style>
  <div class="slide-nav">
    <button id="prev-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>&#8592;</button>
    <button id="next-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>&#8594;</button>
  </div>
  <div class="slide-counter">${currentPage} / ${totalPages}</div>
`;
document.body.appendChild(nav);
