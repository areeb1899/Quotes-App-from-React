const router = require('express').Router();
const Quotes = require('../models/Quotes');

// Get all quotes
router.get('/allquotes', async (req, res) => {
    try {
        const allQuotes = await Quotes.find();
        res.status(200).json(allQuotes);
    } catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
        console.error(error);
    }
});

// Add a new quote
router.post('/addQuotes', async (req, res) => {
    const { author, text } = req.body;
    await Quotes.create({ author, text });
    res.status(200).json({ msg: 'New Quote created successfully.' });
});

// Get a single quote by ID
router.get('/quotes/:id', async (req, res) => {
    try {
        const quote = await Quotes.findById(req.params.id);
        if (!quote) {
            return res.status(404).json({ msg: 'Quote not found.' });
        }
        res.status(200).json(quote);
    } catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
        console.error(error);
    }
});


// Delete a quote by ID
router.delete('/quotes/:id', async (req, res) => {
    try {
        const deletedQuote = await Quotes.findByIdAndDelete(req.params.id);
        if (!deletedQuote) {
            return res.status(404).json({ msg: 'Quote not found.' });
        }
        res.status(200).json({ msg: 'Quote deleted successfully.' });
    } catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
        console.error(error);
    }
});



module.exports = router;
