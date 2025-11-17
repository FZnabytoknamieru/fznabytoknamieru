
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.9)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';
        
        const img = document.createElement('img');
        img.src = item.src;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        overlay.appendChild(img);
        
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
        
        document.body.appendChild(overlay);
    });
});
