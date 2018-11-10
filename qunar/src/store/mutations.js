export default {
  // 如果没有异步操作,直接跳过actions调用mutations也可以
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
