const user = (req, res) => {
    res.status(200).json({ username: "geraldo.trovao", email: "geraldo.trovao@aws.com.br" })
}

module.exports = user