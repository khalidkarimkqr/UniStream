const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers && req.headers['authorization'].split(' ')[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided",
                data: null,
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
                data: null,
            });
        }

        req.id = decoded.id;
        req.role = decoded.role; 

        next();
        
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Failed authenticating user",
            data: null,
        });
        
    }
}