function magic() {
    const quotes = [
        "🚀 You clicked magic!",
        "🎉 JavaScript is awesome!",
        "🌈 Keep learning & building!",
        "⚙️ Frontend power unlocked!"
    ];
    document.getElementById("result").innerText =
        quotes[Math.floor(Math.random() * quotes.length)];
}