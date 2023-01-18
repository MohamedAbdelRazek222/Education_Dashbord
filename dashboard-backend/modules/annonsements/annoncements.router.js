const { addUser, getAllAnnonses, updateAnnouncement, deleteAnnouncement, getAnnouncement } = require('./controller/annonsement.controller');

const router = require('express').Router();



router.post('/addUser',addUser)
router.get('/getAllAnnonses',getAllAnnonses)
router.get('/getAnnouncement/:id',getAnnouncement)
router.delete('/deleteAnnouncement/:id',deleteAnnouncement)
router.patch('/updateAnnouncement/:id',updateAnnouncement)




module.exports=router
/*
Events Manager
Events
	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
    content here',


*/