var app = require("express")();

app.get("/", (req, res, next) => {
	res.send("okok");
});

app.listen(3333);