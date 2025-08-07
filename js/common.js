/* 动态插入统一头部 + 底部 */
const headerHTML = `
<div class="nav-bar">
  <a class="brand" href="index.html">AI小仙</a>
  <ul class="menu">
    <li><a href="index.html">首页</a></li>
    <li><a href="lucky.html">幸运签</a></li>
    <li><a href="tarot.html">塔罗三卡</a></li>
    <li><a href="about.html">关于</a></li>
    <li><a href="privacy.html">隐私</a></li>
    <li><a href="contact.html">联系</a></li>
  </ul>
  <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
</div>
`;
const footerHTML = `<footer>© 2024 AI小仙 · 免费在线算命</footer>`;

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('header').innerHTML = headerHTML;
    document.getElementById('footer').innerHTML = footerHTML;

    /* 抽屉菜单逻辑 */
    const hamburger = document.getElementById('hamburger');
    const drawer = document.createElement('div');
    drawer.className = 'drawer';
    drawer.innerHTML = `
    <a href="index.html" onclick="closeDrawer()">首页</a>
    <a href="lucky.html" onclick="closeDrawer()">幸运签</a>
    <a href="tarot.html" onclick="closeDrawer()">塔罗三卡</a>
    <a href="about.html" onclick="closeDrawer()">关于</a>
    <a href="privacy.html" onclick="closeDrawer()">隐私</a>
    <a href="contact.html" onclick="closeDrawer()">联系</a>
  `;
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.onclick = closeDrawer;
    document.body.appendChild(drawer);
    document.body.appendChild(overlay);

    window.closeDrawer = () => {
        drawer.classList.remove('open');
        overlay.classList.remove('show');
    };
    hamburger.onclick = () => {
        drawer.classList.add('open');
        overlay.classList.add('show');
    };

    /* 主题切换 */
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'themeToggle';
    toggleBtn.title = '切换主题';
    toggleBtn.textContent = '🌓';
    document.body.appendChild(toggleBtn);
    toggleBtn.onclick = () => {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
        toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌓';
    };
});