import myComponent from './components/my-component'
import myComponent2 from './components/my-component2'

const components = {
  myComponent,
  myComponent2
}
const lgView = {
   ...components
};
const install = function (Vue, opts ={}) {
  if (install.installed) return
  Object.keys(lgView).forEach(key => {
    Vue.component(key, lgView[key]);
  })
}
//用于script标签引入 
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  install,
  ...components
}

 export default API; 