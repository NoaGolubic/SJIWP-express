const JWT_Secret_Key = kGYYbS8VWDGbE6Dwm5ufPZlUvJJuMQjJJ5A0sPoSeI1HwMG0uaeRp95UuWjzmuAjO6rQQ1ic7AfOIic5t69g8Ci4UGtacAiBOs9Zvx9OiriOeeWgwyGEeJzhRMBPd93M

const jwt = require ("jsonwebtoken");

function getUserToken(id, email, name, role, expDays = 7){
    const tokenData = {

        uid: id, 
        email: email,
        name: name,
        role: role, 
        time: Date.now()
    };

    const tokenOptions = {
     expiresIn: expDays * 24 * 60 *60
    };

    const token = jwt.sign(tokenData, JWT_Secret_Key, tokenOptions);

    return token; 
}

function checkAuthCookie(req, res, next){
    const token = req.cookie["auth"];

    const resoult = jwt.verify(token, JWT_Secret_Key);                      

    console.log("TOKEN CHECK", resolut);
}