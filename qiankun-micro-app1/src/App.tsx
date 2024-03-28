/*
 * @Describe: 
 * @Date: 2024-03-22 18:19:45
 * @LastEditors: Cosima
 * @LastEditTime: 2024-03-28 12:01:13
 * @FilePath: /qiankun-demo/qiankun-micro-app1/src/App.tsx
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import actions from "./actions";

const handleBase = () => {
  console.log('actions :', actions);
  actions.actions.setGlobalState({ name: 'app1' })
}

function App() {
  return <div className="App">qiankun-micro-app1 <button onClick={handleBase}>app1</button></div>;
}

export default App;
