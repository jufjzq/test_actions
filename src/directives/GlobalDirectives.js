const requireComponent = require.context(
  './',
  false,
  /\.js$/
)
const directives = requireComponent.keys().reduce((res, fileName) => {
  const module = requireComponent(fileName)
  if (fileName.includes('GlobalDirectives')) return res;

  const name = fileName.replace(/^.+?(\w+)\.\w+$/, '$1');
  const config = module.default || module;
  if (!config) return res;

  res.push({ name, config })
  return res;
}, [])

export default {
  install(Vue, options) {
    directives.forEach(({ name, config }) => Vue.directive(name, config))
  }
}
