const quotes = [
    {
        quote: "목표를 낮추지 말고 노력을 높여라",
        author: "작자미상"
    },{
        quote: "삶은 소유물이 아니라 순간순간의 있음이다.\
        영원한 것이 어디 있는가. 모두가 한때일 뿐, 그러나 그 한때를 최선을 다해 최대한으로 살 수 있어야 한다.\
        삶은 놀라운 신비요, 아름다움이다.",
        author: "법정스님"
    },{
        quote: "어제라는 시간은 나를 기억하고 있고\
        오늘이라는 시간은 나를 바라보고 있고\
        내일이라는 시간은 나를 기다리고 있다.",
        author: "'고마워요 내사랑' 중에서"
    },{
        quote: "나는 당신에게 말하고 싶었지요.\
        당신을 사랑한다고\
        그렇게 외치고 싶었지요.\
        그게 다예요.",
        author: "마르그리트 뒤라스"
    },{
        quote: "천번의 기도보다 단 한번의 행동으로\
        단 한사람에게라도 기쁨을 주는 일이 훨씬 낫다.",
        author: "간디"
    }

]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todayQuote =quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = `-${todayQuote.author}-`;