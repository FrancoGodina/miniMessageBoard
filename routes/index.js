var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "I love Interstellar",
    user: "Franco",
    added: new Date()
  },
  {
    text: "Testing",
    user: "Ronald",
    added: new Date()
  },
  {
    text: "Connections are something bigger than what people think they are",
    user: "Ernestina",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Message Board',
    messages: messages 
  });
});

router.post("/new", (req, res, next) => {
  messageText = req.body.messageText;
  messageUser = req.body.authorName;
  messages.push(
    {
      text: messageText, 
      user:messageUser, 
      added: new Date()
    });
  res.redirect("/");
});

module.exports = router;
