const Quotes=require('./models/Quotes')


const DUMMY_QUOTES = [
    {
        author: 'Mahatma Gandhi',
        text: 'A man is but the product of his thoughts. What he thinks, he becomes.'
    },
    {
        author: 'Mahatma Gandhi',
        text: 'The greatness of humanity is not in being human, ut in being humane.'
    },
    {
        author: 'Oscar Wilde',
        text: 'Be yourself; everyone else is already taken.'
    },
    {
        author: 'Albert Einstein',
        text: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.'
    },
    {
        author: 'Dr. Seuss',
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {
        author: 'Robert Frost',
        text: "In three words I can sum up everything I've learned about life: it goes on."
    }
]

// console.log(DUMMY_QUOTES);

async function seedDB() {
    await Quotes.deleteMany({});
    await Quotes.insertMany(DUMMY_QUOTES);
    console.log('DB SEEDED!');
}

module.exports = seedDB;