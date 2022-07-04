// include dependencies
const express = require("express");
const path = require("path");

// create express app
const app = express();

// any path/route will go through this handler and get sent the index.html file
// no matter what path sent to web server (post, settings, etc) will get sent to index
// important for single page application
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

// changed port to 3000 because 5060 didn't connect
app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
