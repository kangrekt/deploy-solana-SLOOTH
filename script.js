document.addEventListener('DOMContentLoaded', () => {
    // Copy CA Button Logic
    const copyBtn = document.getElementById('copy-btn');
    const caText = document.getElementById('ca-text');
    const contractAddress = "TBA_SLOTH_CONTRACT_ADDRESS_HERE";

    if (copyBtn && caText) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(contractAddress).then(() => {
                copyBtn.textContent = 'COPIED!';
                copyBtn.style.backgroundColor = 'var(--accent)';
                copyBtn.style.color = 'white';
                
                setTimeout(() => {
                    copyBtn.textContent = 'COPY CA';
                    copyBtn.style.backgroundColor = 'var(--secondary)';
                    copyBtn.style.color = 'var(--black)';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy CA: ', err);
            });
        });
    }

    // Scroll Reveal Animation (Brutalism pop-up)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.brutal-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(card);
    });
});
