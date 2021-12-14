import {FC, useEffect, useRef} from 'react';
import {loadMicroApp, MicroApp} from "qiankun";

let microAppComponent: MicroApp;

interface Props {
  user?: UserResponse
}

const MicroAppComponent: FC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 当应用更新时，将 props 传递
  useEffect(() => {
    if (microAppComponent && microAppComponent.update) {
      microAppComponent.update(props).then()
    }
  })

  useEffect(() => {
    // 初始化微应用
    if (containerRef.current) {
      microAppComponent = loadMicroApp({
        name: 'api-test-nested',
        entry: '//wecom-sidebar-api-test.thedemo.cn',
        container: containerRef.current,
        props,
      });
    }

    // 将微应用 unmount
    return () => {
      microAppComponent.unmount().then();
    }
  }, [props])

  return (
    <div>
      <h2>微应用</h2>

      <div ref={containerRef}/>
    </div>
  )
}

export default MicroAppComponent;
