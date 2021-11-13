# 侧边栏微应用

此项目为当前 `wecom-sidebar-qiankun-tpl` 的微应用，通过 [create-react-app](https://create-react-app.dev/) 脚手架创建。

## 启动

```shell
npm run start
```

## 与主应用通信

在项目的入口 [index.tsx](./src/index.tsx) 中，添加了与主应用的通信，可以获取主应用的 `JsSdk`，
并将其透传到 redux 的 store 中，在组件内再获取 `JsSdk` 再与企业微信侧边栏进行交互。

JsSdk 流动为：

```
主应用 -> 微应用(sidebar-app) -> redux store -> 具体组件 -> jsSdk.invoke('xxx')
```

入口代码：

```tsx
const AppWrapper = (
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);

// 渲染应用
const render = (props: any) => {
  const { container } = props;
  const containerElement = container ? container.querySelector('#root') : document.querySelector('#root');
  ReactDOM.render(AppWrapper, containerElement);
}

// 到处 qiankun 需要的生命周期钩子
export const bootstrap = async () => {
  console.log('[微应用 sidebar-app] bootstrap');
}

export const mount = async (props: any) => {
  props.onGlobalStateChange((state: any) => {
    // 将 jsSdk 更新到 store 中
    store.dispatch({ type: 'SET_JSSDK', payload: state.jsSdk })
  });

  // 更新 jsSdk
  store.dispatch({ type: 'SET_JSSDK', payload: props.jsSdk })

  // props.setGlobalState(state);
  console.log('[微应用 sidebar-app] mount', props);
  render(props);
}

export const unmount = async (props: any) => {
  console.log('[微应用 sidebar-app] unmount', props);
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
```

## 内容

本项目可以独立运行，也可以作为 `wescom-sidebar-qiankun-tpl` 的微应用。它拥有如下重要组件：

* Home 
* ExternalUser
* ExternalChat
* Action

### Home
首页，查看当前用户(user)的内容

![](./screenshots/User.png)

### ExternalUser
查看外部联系人(external user)内容，主要调用下面 API 获取外部联系人 Id。

```ts
await jsSdk.invoke<{ userId?: string }>('getCurExternalContact', {})
```

![](./screenshots/ExternalUser.png)

### ExternalChat
查看外部联系群(external chat)内容，主要调用下面 API 获取外部联系群 Id。

```ts
await jsSdk.invoke<{ chatId?: string }>('getCurExternalChat', {})
```

![](./screenshots/ExternalChat.png)

### Action
可以发消息，将消息分享到聊天窗口，主要调用下面 API 分享消息。

```ts
await jsSdk.invoke('sendChatMessage', {
  msgtype: 'text',
  text: {
    content: msg
  }
});
```

![](./screenshots/Action.png)
