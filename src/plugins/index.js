import { default as TimerManager } from "@alanojs/timer";
import Storage, { StorageAdapterType } from "@alanojs/storage";

import { default as request } from "./http";
// import { default as ElementUI } from "./element";

// 插件注册
// {plugin: 插件, options: 插件初始化参数}
const plugins = [
  { plugin: Storage, options: { adapter: StorageAdapterType.Cookie } },
  { plugin: request, options: null },
  { plugin: TimerManager, options: null },
  // { plugin: ElementUI, options: null },
];

// 插件安装
export default {
  install: (_vue) => {
    plugins.forEach((item) => {
      _vue.use(item.plugin, item.options);
    });
  },
};
