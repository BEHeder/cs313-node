function getRateLtrStmp(weight) {
    if (weight <= 1) {return 0.55}
    else if (weight <= 2) {return 0.70}
    else if (weight <= 3) {return 0.85}
    else if (weight <= 3.5) {return 1.00}
    else {return getRateLrgEnv(weight)}
}

function getRateLtrMtrd(weight) {
    if (weight <= 1) {return 0.50}
    else if (weight <= 2) {return 0.65}
    else if (weight <= 3) {return 0.80}
    else if (weight <= 3.5) {return 0.95}
    else {return getRateLrgEnv(weight)}
}

function getRateLrgEnv(weight) {
    return (1.00 + 0.20 * (Math.ceil(weight - 1)))
}

function getRate1stClsPkgSrvRtl(weight) {
    if (weight <= 4) {return 3.80}
    else if (weight <= 8) {return 4.60}
    else if (weight <= 12) {return 5.30}
    else {return 5.90}
}

function calculateRate(req, res) {
    console.log("Getting the rate from a different file")

    var weight = req.query.weight
    var mailType = req.query.mail_type
    var rate = 0

    if (mailType == "Letters (Stamped)") {
        rate = getRateLtrStmp(weight)
    }
    if (mailType == "Letters (Metered)") {
        rate = getRateLtrMtrd(weight)
    }
    if (mailType == "Large Envelopes (Flats)") {
        rate = getRateLrgEnv(weight)
    }
    if (mailType == "First-Class Package Service - Retail") {
        rate = getRate1stClsPkgSrvRtl(weight)
    }

    rate.toFixed(2)
    var stuff = {weight: weight, mailType: mailType, rate: rate}

    res.render('pages/response09', stuff)
}

module.exports = {calculateRate: calculateRate}