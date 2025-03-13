// MathJax Configuration
MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true,
        processClass: ['math-code', 'span'], // Add math-code to processed classes
    },
    svg: {
        fontCache: 'global'
    }
};

// Script to run after MathJax has finished rendering
window.addEventListener('load', function() {
    // Set a timer to ensure MathJax has had time to render
    setTimeout(function() {
        // Target only the MathJax in our specific code block
        const codeBlock = document.getElementById('code-block-dyt');
        if (codeBlock) {
            const mathJaxElement = codeBlock.querySelector('.MathJax');
            if (mathJaxElement) {
                mathJaxElement.style.margin = '0';
                mathJaxElement.style.textAlign = 'left';
            }
        }
    }, 1000); // Adjust timing as needed
});

// Copy function for code blocks
function copyCode() {
    const codeElement = document.querySelector('#code-block-dyt code');
    const textToCopy = codeElement.textContent.trim();
    
    copyToClipboard(textToCopy, 'copy-btn');
}

// Copy function for citation
function copyCitation() {
    const codeElement = document.querySelector('#code-block-citation code');
    const textToCopy = codeElement.textContent.trim();
    
    copyToClipboard(textToCopy, 'copy-citation-btn');
}

// Generic copy to clipboard function
function copyToClipboard(text, buttonId) {
    navigator.clipboard.writeText(text)
        .then(() => {
            const copyBtn = document.getElementById(buttonId);
            const originalText = copyBtn.innerHTML;
            
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy to clipboard');
        });
}

// Initialize syntax highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Apply syntax highlighting
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});