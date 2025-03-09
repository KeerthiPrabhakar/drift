// URL Rewrite Logic for Yahoo Mail-Like URL Structure
document.addEventListener("DOMContentLoaded", function () {
    let currentUrl = window.location.href;

    // Define custom Yahoo-like URL mappings
    let urlMappings = {
        "https://keerthiprabhakar.github.io/drift/inbox": "yahoo-inbox.html",
        "https://keerthiprabhakar.github.io/drift/bank": "bank.html",
        "https://keerthiprabhakar.github.io/drift/hr": "hr.html",
        "https://keerthiprabhakar.github.io/drift/itsupport": "itsupport.html",
        "https://keerthiprabhakar.github.io/drift/medicalcentre": "medicalcentre.html",
        "https://keerthiprabhakar.github.io/drift/tax": "tax.html",
        "https://keerthiprabhakar.github.io/drift/spam1": "spam1.html",
        "https://keerthiprabhakar.github.io/drift/spam2": "spam2.html",
        "https://keerthiprabhakar.github.io/drift/spam3": "spam3.html"
    };

    // Redirect to actual files if a custom path is accessed
    for (let fakeUrl in urlMappings) {
        if (currentUrl.startsWith(fakeUrl)) {
            window.location.replace(urlMappings[fakeUrl]);
        }
    }
});
