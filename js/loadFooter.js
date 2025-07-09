document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    
    function loadFooter() {
        // 使用fetch加载页脚HTML
        fetch('/components/footer.html')
            .then(response => response.text())
            .then(html => {
                if (footerContainer) {
                    footerContainer.innerHTML = html;
                }
            })
            .catch(error => console.error('Error loading footer:', error));
    }

    // 加载Bootstrap Icons
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
    document.head.appendChild(iconLink);

    // 加载页脚
    loadFooter();

    // 监听页面历史变化（前进/后退按钮）
    window.addEventListener('popstate', function() {
        // 页面历史变化时，重新初始化页脚
        setTimeout(loadFooter, 100);
    });

    // 监听页内链接点击，用于处理页面导航
    document.addEventListener('click', function(event) {
        // 检查是否点击了链接
        const link = event.target.closest('a');
        if (link && 
            link.href && 
            link.href.startsWith(window.location.origin) && 
            !link.getAttribute('target') && 
            !event.ctrlKey && 
            !event.metaKey) {
            
            // 对于同源链接的点击，提前获取页脚元素的状态
            const hasFooter = !!document.getElementById('footer-container');
            
            // 记录状态到 sessionStorage
            if (hasFooter) {
                sessionStorage.setItem('footerStatus', 'loaded');
                sessionStorage.setItem('lastPath', window.location.pathname);
            }
        }
    });

    // 在页面加载时检查之前的状态
    window.addEventListener('load', function() {
        const lastPath = sessionStorage.getItem('lastPath');
        const footerStatus = sessionStorage.getItem('footerStatus');
        
        // 如果是从其他页面跳转过来的
     
    });
});
