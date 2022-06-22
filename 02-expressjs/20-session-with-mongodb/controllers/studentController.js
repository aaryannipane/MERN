class StudentController{
    
    // session example
    static session_example = (req, res)=>{

        // set session data to variable
        req.session.device = "Mobile";

        if(req.session.count){
            req.session.count++
        }else{
            req.session.count = 1;
        }

        res.send(`session count created ${req.session.count}`);
    }

    static get_session_data = (req, res)=>{
        if(req.session.device){
            res.send(`device : ${req.session.device} `)
        }else{
            res.send("session device is not created");
        }
    }
}


export default StudentController;