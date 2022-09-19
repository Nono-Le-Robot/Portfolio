require('./config/db')
const bodyParser = require('body-parser');
const express = require('express')
const postRoutes = require('./routes/post.routes')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use('/portfolio/contact-mail/', postRoutes)

//server
app.listen(5000, () => {
    console.log(`listening on port 5000`);
});