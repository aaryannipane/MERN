import express from 'express'

const router = express.Router();

router.get('/all', (req, res)=>{
    res.send("Teacher All")
})

router.post('/create', (req, res)=>{
    res.send('Teacher post create');
})

router.put('/update', (req, res)=>{
    res.send('Teacher put update');
})

router.delete('/delete', (req, res)=>{
    res.send('Teacher delete delete');
})

// old method to export
// module.exports = router

// new method to export
export default router