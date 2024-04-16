import jwt from 'jsonwebtoken';

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      verifyJwtToken: (token: string, secret: string, options: object) => {
        return jwt.verify(token, secret, options);
      },
      signJwtToken: (token: any, secret: string, options: object) => {
        return jwt.sign(token, secret, options);
      }
    }
  }
})