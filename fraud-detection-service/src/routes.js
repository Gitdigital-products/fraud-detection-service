export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "fraud-detection-service" });
  });

  // Fraud detection endpoints
  app.post("/fraud/check", (req, res) => {
    const { userId, orderId, amount } = req.body;
    const isFraudulent = Math.random() < 0.05; // mock 5% chance
    res.json({ orderId, userId, amount, fraudulent: isFraudulent });
  });

  app.get("/fraud/:orderId", (req, res) => {
    const { orderId } = req.params;
    res.json({ orderId, status: "Checked", fraudulent: false });
  });
}
