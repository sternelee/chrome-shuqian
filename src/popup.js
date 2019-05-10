window.onload = () => {
    const $startBtn = document.querySelector('.start')
    $startBtn.onclick = () => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    injectApp: true
                },
                response => window.close()
            );
        });
    }
}