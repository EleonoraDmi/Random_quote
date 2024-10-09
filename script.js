window.onload = function() {
    let quoteList = [
        { text: '"Knowledge is power."', author: "Sir Francis Bacon" },
        { text: '"In the middle of difficulty lies opportunity."', author: "Albert Einstein" },
        { text: '"The more you say, the less people remember."', author: "François Fénelon" },
        { text: '"Fall seven times and stand up eight."', author: "Japanese Proverb" },
        { text: '"Success is not the key to happiness. Happiness is the key to success."', author: "Herman Cain" },
        { text: '"To have another language is to possess a second soul."', author: "Charlemagne" },
        { text: '"The best dreams happen when you are awake."', author: "Cherie Gilderbloom" },
        { text: '"Never make fun of someone who speaks broken English. It means they know another language."', author: "H. Jackson Brown, Jr." },
        { text: '"Always forgive your enemies. Nothing annoys them more."', author: "Oscar Wilde" }
    ];

    document.getElementById('btnClick').addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quoteList.length);
        const selectedQuote = quoteList[randomIndex];
        document.getElementById('quoteText').innerHTML = `${selectedQuote.text}<br>(${selectedQuote.author})`;
    });
};