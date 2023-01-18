const { addQuiz, getAllQuizes, getQuiz, deleteQuize, updateQuize } = require('./controller/quiz.controller');

const router = require('express').Router();

router.post('/addQuiz',addQuiz)
router.get('/getQuiz/:id',getQuiz)
router.get('/getAllQuizes',getAllQuizes)
router.delete('/deleteQuize/:id',deleteQuize)
router.patch('/updateQuize/:id',updateQuize)


module.exports=router
