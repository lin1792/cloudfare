// ~/utils/auth.js

import jwt from "jsonwebtoken";

// 生成 JWT 令牌
export function generateToken(payload:any) {
  // 设置 JWT 密钥
  const secretKey = 'your_secret_key';

  // 设置令牌的有效期，例如 1 小时
  // const expiresIn = '1m';//分钟
  // const expiresIn = '1h';//小时
  const expiresIn = '1d';//天

  // 使用 payload、密钥和有效期生成令牌
  const token = jwt.sign(payload, secretKey, { expiresIn });

  return token;
}
