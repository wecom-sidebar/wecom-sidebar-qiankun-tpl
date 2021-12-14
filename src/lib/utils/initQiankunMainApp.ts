import {initGlobalState, MicroAppStateActions, registerMicroApps, start} from "qiankun";
import {JsSDK} from "../jsSdk";
export const subAppContainerId = 'sub-app-container';
export const subAppContainer = `#${subAppContainerId}`;

// 初始化 state
export const microAppStateActions: MicroAppStateActions = initGlobalState({});

// 获取需要传递给微应用的 props
const initPassProps = async (jsSdk: JsSDK) => {
  try {
    const res = await jsSdk.invoke<{ chatId: string }>('getCurExternalChat');
    return {
      jsSdk,
      isChat: !!res
    }
  } catch (e) {
    return {
      jsSdk,
      isChat: false,
    }
  }
}

// 启动 qiankun 的主应用
const initQiankunMainApp = async (jsSdk: JsSDK) => {
  const passProps = await initPassProps(jsSdk);

  // 添加 state 变更监听
  microAppStateActions.onGlobalStateChange((state, prev) => {
    console.log('[主应用]', state, prev);
  });

  // 注册并启动微前端
  registerMicroApps([
    {
      name: 'api-test',
      entry: '//wecom-sidebar-api-test.thedemo.cn',
      container: subAppContainer,
      activeRule: '/#/api-test',
      props: passProps
    },
    {
      name: 'sidebar-app',
      entry: '//localhost:3002',
      container: subAppContainer,
      activeRule: '/#/sidebar-app',
      props: passProps
    }
  ]);

  // 启动主应用
  start();
}

// 初始化主应用内容
export default initQiankunMainApp;
