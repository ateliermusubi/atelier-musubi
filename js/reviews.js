// お客様の声のデータ一覧（新しいものを上に追記していきます）
const reviewData = [
    {
        date: "2026.05",
        model: "ゼニス アンティーク懐中時計",
        area: "東京都荒川区 T 様",
        stars: "★★★★★",
        comment: "test　自身の所有する懐中時計をOHしました。"
    },
];

// ページが読み込まれたら自動的に実行する処理
document.addEventListener("DOMContentLoaded", () => {
    const reviewContainer = document.getElementById("auto-reviews");
    if (!reviewContainer) return;

    const maxDisplay = 3;
    let htmlContent = "";

    for (let i = 0; i < Math.min(reviewData.length, maxDisplay); i++) {
        const item = reviewData[i];
        
        // リンクURLが設定されている場合だけ、ボタンのHTMLを生成する
        let linkButtonHtml = "";
        if (item.linkUrl) {
            linkButtonHtml = `<a href="${item.linkUrl}" class="review-link-btn">この修理実績の詳細を見る →</a>`;
        }

        htmlContent += `
            <div class="review-card">
                <div class="review-meta">
                    <span class="review-date">${item.date}</span>
                    <span class="review-area">${item.area}</span>
                </div>
                <h4 class="review-model">ご依頼品：${item.model}</h4>
                <div class="review-stars">${item.stars}</div>
                <p class="review-comment">「${item.comment}」</p>
                ${linkButtonHtml} 
            </div>
        `;
    }

    reviewContainer.innerHTML = htmlContent;
});