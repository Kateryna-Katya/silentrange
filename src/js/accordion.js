document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.12529 11.8786L14.8615 22.0736C15.0024 22.2378 15.177 22.3697 15.3736 22.4601C15.5702 22.5505 15.7839 22.5972 16.0003 22.5972C16.2166 22.5972 16.4304 22.5505 16.627 22.4601C16.8235 22.3697 16.9982 22.2378 17.139 22.0736L25.8753 11.8786C26.709 10.9055 26.0178 9.40234 24.7365 9.40234H7.26154C5.98029 9.40234 5.28904 10.9055 6.12529 11.8786Z" fill="#FBBF24" />
</svg>`;

        const minusIcon = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.12529 20.1214L14.8615 9.92641C15.0024 9.76216 15.177 9.63033 15.3736 9.53994C15.5702 9.44955 15.7839 9.40275 16.0003 9.40275C16.2166 9.40275 16.4304 9.44955 16.627 9.53994C16.8235 9.63033 16.9982 9.76216 17.139 9.92641L25.8753 20.1214C26.709 21.0945 26.0178 22.5977 24.7365 22.5977H7.26154C5.98029 22.5977 5.28904 21.0945 6.12529 20.1214Z" fill="#FBBF24" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});