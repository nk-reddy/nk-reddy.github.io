document.addEventListener('DOMContentLoaded', () => {
    const introText = document.getElementById('intro-text');
    const cursor = document.getElementById('cursor');
    const textToType = "Hello there! I'm Nithin.";
    let index = 0;
    const typingSpeed = 100;

    function typeText() {
        if (index < textToType.length) {
            introText.innerHTML += textToType.charAt(index);
            index++;
            adjustCursorPosition();
            setTimeout(typeText, typingSpeed);
        }
    }

    function adjustCursorPosition() {
        const textWidth = introText.offsetWidth;
        cursor.style.left = `calc(50% - ${textWidth / 2}px + ${textWidth}px)`;
    }

    typeText();
});
