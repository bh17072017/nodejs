var baseService = require('../service/app-service');    

exports.baseController = async function (req, res, next) {
    let n = req.body?.n? req.body.n : 0;
    let a1 = req.body?.a1? req.body.a1 : [];
    let b2 = req.body?.b2? req.body.b2 : [];
    try {
        var result = await baseService.baseService(n, a1, b2)
        return res.status(200).json({ status: 200, steps: result, message: "Succesfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}