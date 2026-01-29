document.addEventListener("DOMContentLoaded", function () {

  const fruitLinks = document.querySelectorAll("a[href*='_detail.html']");

  fruitLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      const fruitName = this.textContent.trim();
      const result = confirm(`${fruitName}の詳細ページへ移動しますか？`);

      if (!result) {
        event.preventDefault(); // 移動をキャンセル
      }
    });
  });

});
