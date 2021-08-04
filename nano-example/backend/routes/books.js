const express = require('express');
const books = require('../../../nano-example/backend/model/books');
const router = express.Router();

module.exports = router;
// request 요청
// response 응답
router.get('/', (req, res) => {
    let briefs = []
    books.forEach(element => {
        // 구조분해할당
        let { bookId, title, author, cover } = element
        briefs.push({ bookId, title, author, cover })
    });
    res.json(briefs)
})

router.get('/:bookId', (req, res) => {
    // req.params()를 이용해여 쿼리스트링을 통해 요청된 파라미터를 얻을 수 있다.
    const bookId = req.params.bookId
    let book = books.find(element => element.bookId == bookId)
    res.json(book)
})