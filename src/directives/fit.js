let handleResize;

const fit = {
  inserted(el, binding) {
    const { value = {} } = binding;
    const { width, height, mode } = value;
    if (!width || !height) return console.log('请设置设计稿的宽高');

    handleResize = function () {
      const { innerWidth, innerHeight } = window;
      const scaleX = innerWidth / width;
      const scaleY = innerHeight / height;
      const scale = Math.min(scaleX, scaleY).toFixed(6);
      el.style.cssText = `
        width: ${width}px;
        height: ${height}px;
        transform: translateX(${(innerWidth - width) / 2}px) scale(${scale});
        transform-origin: center 0;
      `
      return handleResize;
    }
    window.addEventListener('resize', handleResize(el));
  },
  unbind() {
    window.removeEventListener('resize', handleResize)
  }
}

export default fit;
