import countDown from './CountDown';
countDown.install = function(Vue) {
  Vue.component(countDown.name,countDown)
};
export default countDown