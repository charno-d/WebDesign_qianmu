
// 通用导航栏加载脚本
function loadNavbar() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            const navContainer = document.createElement('div');
            navContainer.innerHTML = data;
            document.body.insertBefore(navContainer.firstChild, document.body.firstChild);
            
            // 动态加载样式
            const styleTags = data.match(/<style>([\s\S]*?)<\/style>/);
            if (styleTags && styleTags[1]) {
                const style = document.createElement('style');
                style.textContent = styleTags[1];
                document.head.appendChild(style);
            }
        })
        .catch(error => console.error('加载导航栏失败:', error));
}

// 确保DOM加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}
