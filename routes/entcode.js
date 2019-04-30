var express = require('express');
var router = express.Router();
$(document).ready(()=> {

    console.log("Hey...");
    $('#btnEncode').click(function(){
        router.get('/enc', function(req, res) {
            res.render('entcode.pug');
            console.log("gotcha!");
        });
    });

    /* $('#btnEncode').on("click",(evt)=>{
        //router.get('/enc', function(req, res) {
         window.location.href='http://localhost:63342/steganograf/views/encode.html?_ijt=ehe9kvdltmmv2qmh7cvpnc9cnl';
         console.log("gotcha!");
         // res.render('entcode.pug');
         //});
     });*/
});
module.exports = router;




