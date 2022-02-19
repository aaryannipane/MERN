const homeController = (req, res)=>{
    const data = {
        'name':'Sonam',
        'data':['aryan', 'sanjay', 'nipane'],
    }
    res.render('index.ejs', data)
}

export {homeController}