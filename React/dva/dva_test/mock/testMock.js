module.exports = {
    "GET /api/mockdata": (req,res) => {
        console.log(req);
        res.send({
            msg: 'login success!'
        })
    }
}