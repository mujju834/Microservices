const getStatus = async (req, res) => {
    res.status(200).json({ status: "AuthService is running" });
};

module.exports = { getStatus };
