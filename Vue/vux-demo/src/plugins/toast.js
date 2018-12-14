const Toast = {};
Toast.install = (Vue, options) => {
  Vue.prototype.$msg = 'Hello World!';
}
export default Toast