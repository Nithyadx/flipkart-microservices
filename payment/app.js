const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/payment", (req, res) => {
    res.json({
        message: "Payment Service is working"
    });
});

const PORT = 8082;

app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});
