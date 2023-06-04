var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/kpi/:idUsuario", function (req, res) {
    medidaController.buscarMedidasKpi(req, res);
})

router.post("/pontos", function (req, res) {
    medidaController.pontos(req, res);
})

module.exports = router;