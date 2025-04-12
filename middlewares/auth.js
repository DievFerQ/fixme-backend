const { clerkClient } = require('@clerk/clerk-sdk-node');

async function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "No autorizado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const session = await clerkClient.sessions.verifySession(token);
    req.auth = { userId: session.userId };
    next();
  } catch (err) {
    console.error("Token inválido:", err);
    return res.status(403).json({ error: "Token inválido" });
  }
}

module.exports = requireAuth;
