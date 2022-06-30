const express = require("express");

const app = express();

app.get("/", (request, response) =>{
	return response.json({message: "puta que me pariu No fap, nao desista"});
});

app.listen(3333);
