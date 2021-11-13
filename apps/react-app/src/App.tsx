import React from 'react';
import logo from './logo.svg';
import './App.css';

interface UserResponse extends Response {
  userid: string; // 成员UserID
  name: string; // 成员名称
  gender: 0 | 1 | 2; // 性别。0表示未定义，1表示男性，2表示女性
  qr_code: string; // 员工个人二维码，扫描可添加为外部联系人
  thumb_avatar: string; // 头像缩略图url
}

interface Props {
  user?: UserResponse;
}

function App(props: Props) {
  const {user} = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user ? <p>{user.name}</p> : <p>Edit <code>src/App.tsx</code> and save to reload.</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
