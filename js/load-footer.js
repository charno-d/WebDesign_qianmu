document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始加载页脚');
    
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) {
        console.error('未找到页脚容器元素');
        return;
    }

    // 显示加载状态
    footerContainer.innerHTML = `
        <div class="footer-loading text-center py-3">
            <img src="css/ajax-loader.gif" alt="加载中..." class="me-2">
            <span>页脚内容加载中...</span>
        </div>`;
    
    // 加载页脚HTML
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) {
                console.error('页脚加载失败，状态码:', response.status);
                throw new Error('加载失败: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            console.log('成功获取页脚HTML');
            footerContainer.innerHTML = html;
            console.log('页脚内容已插入');
            
            // 加载完成后移除加载状态类
            footerContainer.classList.remove('loading');
            
            // 加载SVG图标
            loadSVGIcons();
        })
        .catch(error => {
            console.error('页脚加载错误:', error);
            footerContainer.innerHTML = `
                <div class="container text-center py-4">
                    <p class="text-danger">页脚加载失败，请<a href="index.html">刷新页面</a>或联系管理员</p>
                </div>`;
        });
});

// 加载SVG图标
function loadSVGIcons() {
    const svgContainer = document.createElement('div');
    svgContainer.style.display = 'none';
    svgContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="location" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </symbol>
            <symbol id="phone" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </symbol>
            <symbol id="email" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </symbol>
        </svg>
    `;
    document.body.appendChild(svgContainer);
} 