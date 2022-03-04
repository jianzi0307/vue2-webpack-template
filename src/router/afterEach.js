// 路由后置守卫
const afterEach = async (to, from) => {
  console.log(to, from, "< afterEach");
};
export default afterEach;
