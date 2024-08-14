function copyCode() {
    const code = document.querySelector('.highlight').innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
}
