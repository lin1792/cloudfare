// ~/utils/auth.js

import * as jose from 'jose'

// 生成 JWT 令牌
export async function generateToken(payload:any) {
  // 设置 JWT 密钥
  const secretKey = new TextEncoder().encode('your-256-bit-secret');
  const alg = 'HS256';
  // 设置令牌的有效期，例如 1 小时
  const expiresIn = '1m';//分钟
  // const expiresIn = '1h';//小时
  // const expiresIn = '1d';//天

  // 使用 payload、密钥和有效期生成令牌
  const token = await new jose.SignJWT(payload)
  .setProtectedHeader({ alg })
  .setIssuedAt()
  .setExpirationTime(expiresIn)
  .sign(secretKey);
  
console.log('token',token);

  return token;
}

export async function verifyToken(token:any) {
  // 使用TextEncoder编码密钥
  const secret = new TextEncoder().encode('your-256-bit-secret');

  try {
    // 验证JWT
    const { payload, protectedHeader } = await jose.jwtVerify(token, secret);

    console.log('Decoded Payload:', payload);
    return payload;
  } catch (err) {
    // console.error('Token verification failed:', err);
    return {
      error: err,
    }
  }
}


