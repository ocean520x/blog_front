import type { MyLocalData } from '@/interfaces/interface'

export default () => {
  /**
   * 存储本地数据
   * @param key
   * @param data
   * @param expire
   */

  function set(key: string, data: any, expire?: number) {
    const cache: MyLocalData = { data, expire }
    if (expire) {
      // 到期时间的时间戳，以毫秒为单位
      cache.expire = new Date().getTime() + expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(cache))
  }

  /**
   * 获取本地存储
   * @param key
   * @param defaultValue
   */
  function get(key: string, defaultValue: any = null) {
    const cacheStore = localStorage.getItem(key)
    if (cacheStore) {
      const cache = JSON.parse(cacheStore)
      const expire = cache?.expire
      // 有效期存在，并且已经过去，直接返回默认值（null）
      if (expire && expire < new Date().getTime()) {
        // 删除本地存储
        localStorage.removeItem(key)
        return defaultValue
      }
      return cache.data
    }
    return defaultValue
  }
  // 删除本地缓存
  function remove(key: string) {
    localStorage.removeItem(key)
  }
  return { get, set, remove }
}
