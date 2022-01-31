// // module 1
// function add(){
//     console.log("This is addition module");
// }

// var a = 30;

// // we have to ecport function variables to use it in another function
// module.exports.addition = add;
// module.exports.adata = a;


// another way to export
module.exports = {
    addition:function(){
        console.log("This is addition module");
    },
    adata:30
}