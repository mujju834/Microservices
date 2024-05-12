const checkHealth = async (req, res) => {
    res.status(200).json({ status: "OrderService is up and running" });
};

module.exports = { checkHealth };
