// 加载导航栏
function loadNavbar() {
    // 使用fetch加载导航栏HTML
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(html => {
            // 创建临时div来解析HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            // 获取样式和导航栏HTML
            const styles = tempDiv.querySelector('style');
            const navbar = tempDiv.querySelector('nav');
            
            // 将样式添加到head
            if (styles) {
                document.head.appendChild(styles);
            }
            
            // 将导航栏添加到body
            if (navbar) {
                document.body.insertAdjacentElement('afterbegin', navbar);
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// 当DOM加载完成后执行
document.addEventListener('DOMContentLoaded', loadNavbar); 