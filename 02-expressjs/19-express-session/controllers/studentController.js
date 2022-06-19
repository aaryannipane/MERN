class StudentController{
    // get all the session info
    static get_session_info = (req, res)=>{
        console.log(req.session);
        console.log(req.session.id);
        console.log(req.session.cookie);
        console.log(req.session.cookie.maxAge);
        console.log(req.session.cookie.originalMaxAge);
        console.log(req.sessionID);
        res.send("session info");
    }

    // regenerate session 
    static regenerate_session = (req, res)=>{
        req.session.regenerate(()=>{
            console.log(`session regenerated... new session id is  ${req.session.id}`);
        })

        res.send("Session regenerated");
    }

    // destroy session before maxAge
    static delete_session(req, res){
        req.session.destroy(()=>{
            console.log(`Session deleted... Cannot access session  ${req.session.id}`)
        })

        res.send("Session deleted");
    }

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