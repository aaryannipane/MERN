var mylogger = (req, res, next)=>{
    console.log("LOGGED");
    next()
}

export default mylogger