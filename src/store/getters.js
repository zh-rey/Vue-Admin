const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  language: state => state.app.language, // 语言切换
  cachedViews: state => state.app.cachedViews, // 缓存页面数组
  visitedViews: state => state.tagsView.visitedViews // 当前访问页面数组
}
export default getters
