import React, {FC, useEffect, useState} from "react";
import Cookies from "js-cookie";
import {fetchUser} from "../../api";
import {Spin} from "antd";
import ExternalUser from "./components/ExternalUser";
import ExternalChat from "./components/ExternalChat";
import Action from "./components/Action";
import MicroAppComponent from "./components/MicroAppComponent";

const Home: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserResponse>();

  // 获取当前外部联系人信息
  const getUserInfo = async () => {
    setLoading(true);
    const userId = Cookies.get('userId')

    const userInfo = await fetchUser(userId || '')

    setUser(userInfo)
    setLoading(false)
  }

  useEffect(() => {
    getUserInfo().then()
  }, [])

  return (
    <Spin spinning={loading}>
      <div>
        <h1>欢迎回来，{user ? user.name : ''}</h1>

        <ExternalUser/>

        <ExternalChat/>

        <Action/>

        {/* 手动加载微应用 */}
        <MicroAppComponent user={user}/>
      </div>
    </Spin>
  )
}

export default Home;
