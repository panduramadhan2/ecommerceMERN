// import User from "../models/User.js";
// import jwt from "jsonwebtoken";

// export const authenticate = (role = []) => {
//   return async (req, res, next) => {
//     const { token } = req.cookies;

//     if (!token) {
//       return res.status(403).json({ message: "Kamu belum login" });
//     }
//     try {
//       const decode = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decode.id);
//     //   console.log(req.user);

//       if (!role.includes(req.user.role)) {
//         return res
//           .status(403)
//           .json({ message: "Kamu tidak memiliki otorosasi" });
//       }
//       next();
//     } catch (error) {
//       return res.status(403).json({ message: "Token tidak valid" });
//     }
//   };
// };

/////////////////////////////////////////////////

// import User from "../models/User.js";
// import jwt from "jsonwebtoken";

// export const authenticate = (role = []) => {
//   return async (req, res, next) => {
//     const { token } = req.cookies;

//     if (!token) {
//       return res.status(403).json({ message: "Kamu belum login" });
//     }

//     try {
//       const decode = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decode.id);

//       if (!role.includes(req.user.role)) {
//         return res
//           .status(403)
//           .json({ message: "Kamu tidak memiliki otorisasi" });
//       }

//       next();
//     } catch (error) {
//       return res.status(403).json({ message: "Token tidak valid" });
//     }
//   };
// };

import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const authenticate = (role = []) => {
  return async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
      return res.status(403).json({ message: "Kamu belum login" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decode.id);

      if (!req.user) {
        return res.status(404).json({ message: "User tidak ditemukan" });
      }

      // Only check roles if a role is provided
      if (role.length && !role.includes(req.user.role)) {
        return res
          .status(403)
          .json({ message: "Kamu tidak memiliki otorisasi" });
      }

      next();
    } catch (error) {
      return res.status(403).json({ message: "Token tidak valid" });
    }
  };
};
