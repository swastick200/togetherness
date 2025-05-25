document.addEventListener("DOMContentLoaded", function () {
    function createFloatingElements(type, emoji, count) {
      const container = document.getElementById(type);
      if (!container) return;
  
      const className = type === 'floating-hearts' ? 'heart' : 'flower';
  
      for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.className = className;
        span.textContent = emoji;
        span.style.left = Math.random() * 100 + 'vw';
        span.style.animationDuration = (6 + Math.random() * 6) + 's';
        span.style.fontSize = (20 + Math.random() * 30) + 'px';
        span.style.top = Math.random() * 100 + 'vh';
        container.appendChild(span);
      }
    }
  
    createFloatingElements('floating-hearts', '❤️', 60);
    createFloatingElements('floating-flowers', '🌸', 50);
  });
  