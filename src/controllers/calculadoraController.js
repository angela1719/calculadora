module.exports = {
    calculo: (req, res) => {
        res.render('./home/home')
    },
    calculoResultado: (req, res) => {
        console.log(req.body)
        res.render('./home/home', {resultadoEnviarFront: parseInt(req.body.enviarBackA) + parseInt(req.body.enviarBackB)})
    }
} 