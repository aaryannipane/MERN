import express from 'express'

const router = express.Router();

router.get('/all', (req, res)=>{
    res.send("Student All")
})

router.post('/create', (req, res)=>{
    res.send('Student post create');
})

router.put('/update', (req, res)=>{
    res.send('Student put update');
})

router.delete('/delete', (req, res)=>{
    res.send('Student delete delete');
})

// old method to export
// module.exports = router

// new method to export
export default router