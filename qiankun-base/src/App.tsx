/*
 * @Describe: 
 * @Date: 2024-03-22 18:19:45
 * @LastEditors: Cosima
 * @LastEditTime: 2024-03-28 20:27:29
 * @FilePath: /qiankun-demo/qiankun-base/src/App.tsx
 */
import React from 'react';
import './App.css';
import actions from './actions'

const handleBase = () => {
  actions.setGlobalState({ name: 'base' })
}

function App() {
  return (
    <div className="App">
      <div><button onClick={handleBase}>base</button></div>
      <a className="a-link" href="/micro-app1">micro-app1</a>
      <a className="a-link" href="/micro-app2">micro-app2</a>
      <a className="a-link" href="/micro-vue3-app3">micro-vue3-app3</a>
      <div id="micro-app1"></div>
      <div id="micro-app2"></div>
      <div id="micro-vue3-app3"></div>
    </div>
  );
}

export default App;
