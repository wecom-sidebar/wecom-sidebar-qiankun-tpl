const updateWebpackPublicPath = () => {
  if (window.__POWERED_BY_QIANKUN__) {
    // @ts-ignore
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
}

updateWebpackPublicPath()

export default updateWebpackPublicPath
