// 完整复制这个代码到 js/i18n.js

// 语言包数据
const translations = {
    zh: {
        // 网站通用
        site_name: 'AI小仙',
        language_label: '语言:',

        // 导航菜单
        nav_home: '首页',
        nav_lucky: '幸运签',
        nav_tarot: '塔罗三卡',
        nav_about: '关于',
        nav_privacy: '隐私',
        nav_contact: '联系',

        // 首页
        home_title: '欢迎来到 AI小仙 · 运势乐园',
        home_subtitle: '零注册、零付费，打开网页就能玩的「轻占卜」体验站。',

        // 功能卡片
        feature_lucky_title: '🎯 今日幸运签',
        feature_lucky_desc: '一句话点破今日关键，并附幸运颜色 & 数字。',
        feature_lucky_btn: '立即抽取',

        feature_tarot_title: '🎴 塔罗三卡阵',
        feature_tarot_desc: '过去 / 现在 / 未来 三张牌，一键翻牌。',
        feature_tarot_btn: '开始翻牌',

        feature_theme_title: '🌗 日夜主题',
        feature_theme_desc: '护眼白天 & 沉浸夜晚，一键切换。',
        feature_theme_btn: '一键换肤',

        feature_free_title: '🆓 完全免费',
        feature_free_desc: '不收集信息，无广告，用完即走。',
        feature_free_btn: '了解更多',

        // 幸运签页面
        lucky_title: '今日幸运签',
        lucky_desc: '每日 00:00 自动刷新，点击下方按钮立即抽取。',
        lucky_btn: '抽取今日幸运签',
        lucky_placeholder: '点击下方按钮，让好运发生 ✨',
        lucky_color: '幸运颜色',
        lucky_number: '幸运数字',

        // 塔罗页面
        tarot_title: '塔罗三卡阵',
        tarot_step1: '清空杂念，默想你关心的问题。',
        tarot_step2: '依次点击三张牌。',
        tarot_step3: '阅读牌意，做出选择。',
        tarot_reset_btn: '重新洗牌',
        tarot_past: '过去',
        tarot_present: '现在',
        tarot_future: '未来',

        // 其他页面
        about_title: '关于我们',
        contact_title: '联系我们',
        privacy_title: '隐私政策',

        footer_text: '© 2024 AI小仙 · 免费在线算命'
    },

    en: {
        site_name: 'AI Fairy',
        language_label: 'Language:',

        nav_home: 'Home',
        nav_lucky: 'Lucky Draw',
        nav_tarot: 'Tarot Cards',
        nav_about: 'About',
        nav_privacy: 'Privacy',
        nav_contact: 'Contact',

        home_title: 'Welcome to AI Fairy · Fortune Paradise',
        home_subtitle: 'Zero registration, zero fees. Open and play!',

        feature_lucky_title: '🎯 Daily Lucky Draw',
        feature_lucky_desc: 'One phrase reveals today\'s key, with lucky color & number.',
        feature_lucky_btn: 'Draw Now',

        feature_tarot_title: '🎴 Three-Card Tarot',
        feature_tarot_desc: 'Past / Present / Future three cards.',
        feature_tarot_btn: 'Start Reading',

        feature_theme_title: '🌗 Day/Night Theme',
        feature_theme_desc: 'Eye-friendly day & immersive night.',
        feature_theme_btn: 'Switch Theme',

        feature_free_title: '🆓 Completely Free',
        feature_free_desc: 'No data collection, no ads.',
        feature_free_btn: 'Learn More',

        lucky_title: 'Daily Lucky Draw',
        lucky_desc: 'Refreshes at 00:00 daily. Click to draw!',
        lucky_btn: 'Draw Today\'s Fortune',
        lucky_placeholder: 'Click the button, let good luck happen ✨',
        lucky_color: 'Lucky Color',
        lucky_number: 'Lucky Number',

        tarot_title: 'Three-Card Tarot Reading',
        tarot_step1: 'Clear your mind and think about your question.',
        tarot_step2: 'Click the three cards in sequence.',
        tarot_step3: 'Read the meanings and make your choice.',
        tarot_reset_btn: 'Shuffle Again',
        tarot_past: 'Past',
        tarot_present: 'Present',
        tarot_future: 'Future',

        about_title: 'About Us',
        contact_title: 'Contact Us',
        privacy_title: 'Privacy Policy',

        footer_text: '© 2024 AI Fairy · Free Online Fortune'
    },

    ja: {
        site_name: 'AI小仙',
        language_label: '言語:',

        nav_home: 'ホーム',
        nav_lucky: 'ラッキー占い',
        nav_tarot: 'タロット',
        nav_about: '私たちについて',
        nav_privacy: 'プライバシー',
        nav_contact: 'お問い合わせ',

        home_title: 'AI小仙へようこそ · 運勢パラダイス',
        home_subtitle: '登録不要、無料、開くだけで楽しめる占いサイト。',

        feature_lucky_title: '🎯 今日のラッキー占い',
        feature_lucky_desc: '今日のポイントを一言で、ラッキーカラー＆数字付き。',
        feature_lucky_btn: '今すぐ引く',

        feature_tarot_title: '🎴 タロット3枚引き',
        feature_tarot_desc: '過去/現在/未来の3枚のカード。',
        feature_tarot_btn: 'リーディング開始',

        feature_theme_title: '🌗 昼夜テーマ',
        feature_theme_desc: '目に優しい昼間＆夜間テーマ。',
        feature_theme_btn: 'テーマ変更',

        feature_free_title: '🆓 完全無料',
        feature_free_desc: '情報収集なし、広告なし。',
        feature_free_btn: '詳細を見る',

        lucky_title: '今日のラッキー占い',
        lucky_desc: '毎日00:00に更新、クリックして引いてください。',
        lucky_btn: '今日のラッキー占いを引く',
        lucky_placeholder: 'ボタンをクリックして、幸運を呼び込もう ✨',
        lucky_color: 'ラッキーカラー',
        lucky_number: 'ラッキーナンバー',

        tarot_title: 'タロット3枚引き',
        tarot_step1: '心を空にして、質問を思い浮かべてください。',
        tarot_step2: '順番に3枚のカードをクリックしてください。',
        tarot_step3: 'カードの意味を読んで選択してください。',
        tarot_reset_btn: 'もう一度シャッフル',
        tarot_past: '過去',
        tarot_present: '現在',
        tarot_future: '未来',

        about_title: '私たちについて',
        contact_title: 'お問い合わせ',
        privacy_title: 'プライバシーポリシー',

        footer_text: '© 2024 AI小仙 · 無料オンライン占い'
    }
};

// 多语言功能
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('preferred-language') || 'zh';
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.addLanguageSwitcher();
                this.updateContent();
            });
        } else {
            this.addLanguageSwitcher();
            this.updateContent();
        }
    }

    addLanguageSwitcher() {
        const navBar = document.querySelector('.nav-bar');
        if (navBar && !document.querySelector('.language-switcher')) {
            const switcher = document.createElement('div');
            switcher.className = 'language-switcher';
            switcher.innerHTML = `
                <span data-translate="language_label">语言:</span>
                <button class="lang-btn ${this.currentLang === 'zh' ? 'active' : ''}" data-lang="zh" onclick="window.i18n.switchLanguage('zh', this)">中文</button>
                <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en" onclick="window.i18n.switchLanguage('en', this)">English</button>
                <button class="lang-btn ${this.currentLang === 'ja' ? 'active' : ''}" data-lang="ja" onclick="window.i18n.switchLanguage('ja', this)">日本語</button>
            `;

            const hamburger = document.getElementById('hamburger');
            navBar.insertBefore(switcher, hamburger);
        }
    }

    switchLanguage(lang, buttonElement) {
        document.body.classList.add('i18n-loading');

        setTimeout(() => {
            this.currentLang = lang;
            localStorage.setItem('preferred-language', lang);

            this.updateContent();
            this.updateButtons(buttonElement);
            this.updatePageAttributes();

            document.body.classList.remove('i18n-loading');
        }, 200);
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = translations[this.currentLang]?.[key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    updateButtons(activeButton) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        if (activeButton) {
            activeButton.classList.add('active');
        } else {
            const targetBtn = document.querySelector(`.lang-btn[data-lang="${this.currentLang}"]`);
            if (targetBtn) targetBtn.classList.add('active');
        }
    }

    updatePageAttributes() {
        document.documentElement.lang = this.currentLang;
    }

    t(key) {
        return translations[this.currentLang]?.[key] || translations['zh'][key] || key;
    }
}

window.i18n = new I18n();

// 幸运签多语言数据
const luckyFortunes = {
    zh: [
        "【上上签】鸿运当头，凡事宜勇进，心想事成。",
        "【中上签】云开见月，自有贵人，稳中求胜。",
        "【中签】波澜不惊，顺其自然，可得小成。",
        "【中下签】偶有阻滞，需沉心静气，三思后行。",
        "【下下签】晦暗不明，宜守不宜攻，静待时机。"
    ],
    en: [
        "【Excellent】Great fortune ahead, be bold, wishes come true.",
        "【Very Good】Clouds clear, helpful people appear, steady wins.",
        "【Good】Calm waters, go with flow, small success achievable.",
        "【Fair】Some obstacles, need patience, think before acting.",
        "【Poor】Unclear path, better defend than attack, wait for time."
    ],
    ja: [
        "【大吉】幸運が訪れ、全てにおいて前進すべし、心願成就。",
        "【中吉】雲が晴れて月が現れ、貴人有り、着実に勝利を。",
        "【吉】波風立たず、自然に任せて、小さな成功を得られる。",
        "【小吉】時に障害あり、心静かにして、三思の後に行動を。",
        "【凶】道筋不明、攻めより守りを選び、機会を待つべし。"
    ]
};

const luckyColors = {
    zh: ["樱花粉","薄荷绿","薰衣草紫","天空蓝","柠檬黄"],
    en: ["Cherry Pink","Mint Green","Lavender","Sky Blue","Lemon Yellow"],
    ja: ["桜ピンク","ミントグリーン","ラベンダー","空色","レモンイエロー"]
};

const tarotCards = {
    zh: [
        "愚者 - 新旅程","魔术师 - 创造力","女祭司 - 直觉","皇后 - 丰饶","皇帝 - 秩序",
        "教皇 - 传统","恋人 - 选择","战车 - 胜利","力量 - 勇气","隐士 - 内省",
        "命运之轮 - 转折","正义 - 平衡","倒吊人 - 牺牲","死神 - 结束","节制 - 调和",
        "恶魔 - 欲望","塔 - 突变","星星 - 希望","月亮 - 迷惑","太阳 - 成功"
    ],
    en: [
        "The Fool - New Journey","The Magician - Creativity","High Priestess - Intuition","The Empress - Abundance","The Emperor - Order",
        "The Hierophant - Tradition","The Lovers - Choice","The Chariot - Victory","Strength - Courage","The Hermit - Introspection",
        "Wheel of Fortune - Turning Point","Justice - Balance","The Hanged Man - Sacrifice","Death - Ending","Temperance - Harmony",
        "The Devil - Desire","The Tower - Change","The Star - Hope","The Moon - Confusion","The Sun - Success"
    ],
    ja: [
        "愚者 - 新しい旅","魔術師 - 創造力","女教皇 - 直感","女帝 - 豊穣","皇帝 - 秩序",
        "教皇 - 伝統","恋人 - 選択","戦車 - 勝利","力 - 勇気","隠者 - 内省",
        "運命の輪 - 転換","正義 - バランス","吊られた男 - 犠牲","死神 - 終わり","節制 - 調和",
        "悪魔 - 欲望","塔 - 突変","星 - 希望","月 - 迷い","太陽 - 成功"
    ]
};

window.getLuckyFortunes = () => luckyFortunes[window.i18n.currentLang] || luckyFortunes.zh;
window.getLuckyColors = () => luckyColors[window.i18n.currentLang] || luckyColors.zh;
window.getTarotCards = () => tarotCards[window.i18n.currentLang] || tarotCards.zh;