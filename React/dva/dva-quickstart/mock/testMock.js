module.exports = {
    "GET /api/mockdata":(req,res) => {
        console.log(req);
        res.send({
            msg:'登录成功!'
        })
    }
}