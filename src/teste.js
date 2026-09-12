module.exports = (req, res) => {
    res.status(200).json({
        mensagem: "API funcionando na Vercel!"
    });
};