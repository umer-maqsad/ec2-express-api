
const express = require('express');

const app = express();

app.get(`/`, (_, res) => res.status(200).json({ message: `Hello, World!` }));

app.listen(3000, console.log(`Server Running On PORT 3000`));