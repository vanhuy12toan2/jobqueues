var app = require("express")();1

app.get("/", (req, res, next) => {
	res.send("okok");
});

app.listen(3333);
