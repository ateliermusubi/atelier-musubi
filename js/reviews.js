// お客様の声のデータ一覧（新しいものを上に追記していきます）
const reviewData = [
    {
        date: "2026.06",
        model: "ショパール アンティーク懐中時計",
        area: "東京都荒川区 T 様",
        stars: "★★★★★",
        comment: "test　今回も自身の所有する時計をOHしました。",
        linkUrl: "cases/case06.html" // 追加しました
    },
　　{
        date: "2026.05",
        model: "ロレックスデイトジャスト(1601)",
        area: "東京都荒川区 T 様",
        stars: "★★★★★",
        comment: "test　今回も自身の所有する時計をOHしました。",
        linkUrl: "cases/case05.html" // 追加しました
    },
    {
        date: "2026.05",
        model: "ユニバーサルジュネーブ",
        area: "東京都荒川区 T 様",
        stars: "★★★★★",
        comment: "test　今回も自身の所有する時計をOHしました。",
        linkUrl: "cases/case04.html" // 追加しました
    },
    {
        date: "2026.05",
        model: "オリエントスター プレステージ",
        area: "東京都荒川区 T 様",
        stars: "★★★★★",
        comment: "test　今回も自身の所有する時計をOHしました。",
        linkUrl: "cases/case03.html" // 追加しました
    },
    {
        date: "2026.05",
        model: "タグホイヤー 125thレマニア搭載機",
        area: "東京都荒川区 T 様",
        stars: "★★★★★",
        comment: "test　今回も自身の所有する時計をOHしました。",
        linkUrl: "cases/case02.html" // 追加しました
    },
    {
        date: "2026.05",
        model: "ゼニス アンティーク懐中時計",
        area: "東京都荒川区 T 様",
        stars: "★★★★★",
        comment: "test　自身の所有する懐中時計をOHしました。",
        linkUrl: "cases/case01.html" // 追加しました
    }
];

// ページが読み込まれたら自動的に実行する処理
document.addEventListener("DOMContentLoaded", () => {
    const reviewContainer = document.getElementById("auto-reviews");
    if (!reviewContainer) return;

    const maxDisplay = 3;
    let htmlContent = "";

    for (let i = 0; i < Math.min(reviewData.length, maxDisplay); i++) {
        const item = reviewData[i];
        
        let linkButtonHtml = "";
        if (item.linkUrl) {
            linkButtonHtml = `<a href="${item.linkUrl}" class="review-link-btn" style="color: #c5a059; font-size: 0.85rem; display: block; margin-top: 10px; text-decoration: none; border-bottom: 1px solid rgba(197, 160, 89, 0.4); display: inline-block;">この修理実績の詳細を見る →</a>`;
        }

        htmlContent += `
            <div class="review-card" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(197, 160, 89, 0.1); padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                <div class="review-meta" style="font-size: 0.8rem; color: #888; margin-bottom: 8px;">
                    <span class="review-date">${item.date}</span> | 
                    <span class="review-area">${item.area}</span>
                </div>
                <h4 class="review-model" style="color: #fff; margin: 0 0 10px; font-size: 1rem;">ご依頼品：${item.model}</h4>
                <div class="review-stars" style="color: #c5a059; margin-bottom: 10px; font-size: 0.9rem;">${item.stars}</div>
                <p class="review-comment" style="color: #b0b0b0; line-height: 1.6; font-size: 0.95rem; margin-bottom: 10px;">「${item.comment}」</p>
                ${linkButtonHtml} 
            </div>
        `;
    }

    reviewContainer.innerHTML = htmlContent;
});