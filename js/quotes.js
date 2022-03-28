const quotes = [
    {
        quote: "quotea",
        author: "authorA"
    },{
        quote: "quoteb",
        author: "authorB"
    },{
        quote: "quotec",
        author: "authorC"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote =quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;