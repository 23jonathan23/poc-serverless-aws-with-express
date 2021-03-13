const recipe = (req, res) => {
    res.status(200).json({ recipe: "Macarrão com queijo", time: "15 min" })
}

module.exports = recipe