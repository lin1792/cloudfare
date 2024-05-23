// /api/news.ts
import {useHttp} from "../index";

export async function getUserInfo() {
  return await useHttp.get<any>('/user/info', {})
}