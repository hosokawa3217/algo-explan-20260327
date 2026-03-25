(() => {
    const config = window.explanConfig;
    const root = document.getElementById("app");

    if (!config || !root) {
        return;
    }

    const escapeHtml = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const renderItems = (items) => items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");

    document.title = `${config.title} 要点整理`;

    if (config.accent) {
        document.documentElement.style.setProperty("--accent", config.accent);
    }

    if (config.accentStrong) {
        document.documentElement.style.setProperty("--accent-strong", config.accentStrong);
    }

    root.innerHTML = `
        <main class="sheet">
            <div class="content">
                <header class="header">
                    <div class="title-wrap">
                        <div class="bar"></div>
                        <div class="title-block">
                            <div class="theme">${escapeHtml(config.theme)}</div>
                            <h1>${escapeHtml(config.title)} の要点整理</h1>
                        </div>
                    </div>
                    <a class="source-link" href="${escapeHtml(config.sourceFile)}">元スライドを開く</a>
                </header>

                <p class="lead">${escapeHtml(config.lead)}</p>

                <section class="grid">
                    <article class="panel">
                        <h2>処理の要点</h2>
                        <p class="core-text">${escapeHtml(config.core)}</p>
                    </article>

                    <article class="panel">
                        <h2>解く手順</h2>
                        <ol class="flow-list">${renderItems(config.flow)}</ol>
                    </article>

                    <article class="panel">
                        <h2>確認ポイント</h2>
                        <ul class="check-list">${renderItems(config.checks)}</ul>
                    </article>

                    <article class="panel">
                        <h2>見方のコツ</h2>
                        <p class="core-text">${escapeHtml(config.tip)}</p>
                    </article>
                </section>

                <div class="footer">${escapeHtml(config.footer)}</div>
            </div>
        </main>
    `;
})();
