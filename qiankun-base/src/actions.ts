/*
 * @Describe:
 * @Date: 2024-03-28 11:09:46
 * @LastEditors: Cosima
 * @LastEditTime: 2024-03-28 12:00:21
 * @FilePath: /qiankun-demo/qiankun-base/src/actions.ts
 */
// actions.ts
import { initGlobalState } from 'qiankun'
import type { MicroAppStateActions } from 'qiankun'
// 共享全局主题和语言
export interface GlobalState {
  name: string
}
export const globalState: GlobalState = {
  name: 'base',
}
// 其实这里写不写类型都一样的，因为 state 内部的类型：Record<string, any>，根本都不取决于你的类型
const actions: MicroAppStateActions = initGlobalState(globalState)
export default actions
