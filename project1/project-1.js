// VARIABLES
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        person: "Oscar Wilde"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        person: "Albert Einstein"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Whether you think you can, or you think you can't – you're right.",
        person: "Henry Ford"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        person: "Dalai Lama"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        person: "Alan Kay"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "Confucius"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "Everything you can imagine is real.",
        person: "Pablo Picasso"
    },
    {
        quote: "Simplicity is the ultimate sophistication.",
        person: "Leonardo da Vinci"
    },
    {
        quote: "Turn your wounds into wisdom.",
        person: "Oprah Winfrey"
    },
    {
        quote: "Do not grieve. Indeed, Allah is with us.",
        person: "Prophet Muhammad (peace be upon him)"
    },
    {
        quote: "Your remedy is within you, but you do not sense it. Your sickness is from you, but you do not perceive it.",
        person: "Imam Ali ibn Abi Talib"
    },
    {
        quote: "Raise your words, not voice. It is rain that grows flowers, not thunder.",
        person: "Rumi"
    },
    {
        quote: "What you seek is seeking you.",
        person: "Rumi"
    },
    {
        quote: "Knowledge enlivens the soul.",
        person: "Imam Ali ibn Abi Talib"
    },
    {
        quote: "To get what you love, you must first be patient with what you hate.",
        person: "Imam Al-Ghazali"
    },
    {
        quote: "Whoever does not thank people, has not thanked Allah.",
        person: "Prophet Muhammad (peace be upon him)"
    },
    {
        quote: "Take account of yourselves before you are taken to account.",
        person: "Umar ibn Al-Khattab"
    },
    {
        quote: "He who has no manners has no knowledge.",
        person: "Imam Malik"
    },
    {
        quote: "Riches are not from an abundance of worldly goods, but from a contented mind.",
        person: "Prophet Muhammad (peace be upon him)"
    }
];

// EVENT LISTENER
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
