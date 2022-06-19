class StudentController{
    static set_cookie = (req, res)=>{

        // set cookie
        res.cookie("username", "Aryan");
        res.cookie("cart", [2, 5, 6, 3]);
        res.cookie("location", "USA", {maxAge: 10000}); // 10ms

        res.send("Cookie set .....");
    }
    
    static get_cookie = (req, res)=>{

        // get all cookies obj
        console.log(req.cookies);

        // get specific cookie value
        const usr = req.cookies.username;

        res.send("Cookie get ....." + " " + usr);
    }

    static delete_cookie = (req, res)=>{

        // clear specific cookie
        res.clearCookie("username");

        res.send("Cookie deleted .....");
    }
}

export default StudentController;