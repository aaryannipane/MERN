const homeController = (req, res)=>{
    // res.send('Hello')
    // res.render('index.ejs')
    // variables
    res.render('index.ejs', {'name':'Sonam'})
}

export {homeController}