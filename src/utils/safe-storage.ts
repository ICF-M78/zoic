import { AES, enc } from "crypto-js";
import type { StorageLike } from "pinia-plugin-persistedstate";

//楚天千里清秋，水随天去秋无际。
const encryptionSecret = "ctqlqqss";

// 加密
function encrypt(data: string): string {
  return AES.encrypt(data, encryptionSecret).toString();
}

//解密
function decrypt(data: string): string | null {
  try {
    const bytes = AES.decrypt(data, encryptionSecret);
    return bytes.toString(enc.Utf8);
  } catch (e) {
    console.error("解密失败", e);
    return null;
  }
}

// 使用 sessionStorage 实现 StorageLike 接口
export const safeSessionStorage: StorageLike = {
  setItem(key: string, value: string) {
    sessionStorage.setItem(key, encrypt(value));
  },
  getItem(key: string): string | null {
    const encryptedData = sessionStorage.getItem(key);
    if (encryptedData) {
      return decrypt(encryptedData);
    }
    return null;
  },
};

// 使用 localStorage 实现 StorageLike 接口
export const safeLocalStorage: StorageLike = {
  setItem(key: string, value: string) {
    localStorage.setItem(key, encrypt(value));
  },
  getItem(key: string): string | null {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
      return decrypt(encryptedData);
    }
    return null;
  },
};

//退出登录，清除信息
export const clearStorage = () => {
  sessionStorage.clear();
  localStorage.clear();
};
