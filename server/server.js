const express = require('express');
const app = express();
const PORT = 5000; // different port from the server hosting react front-end

app.get('/api', (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
