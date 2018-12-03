export const changeLoginStatus = (context, isLogin) => {
  context.commit('changeLogin', isLogin)
}