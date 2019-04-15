/**
 * 异步方法储存 方法前添加注释 标明用途
 * @example // 获取地标列表
 * @example getLandMarkList ({commit, state}) {
 * @example     if (state.landMarkList.length < 1) {
 * @example         api.getList()
 * @example         .then(res => {
 * @example             commit('setLandMarkList', res.data.data);
 * @example         })
 * @example         .catch(err => {
 * @example             console.log(err)
 * @example         })
 * @example     }
 * @example }
 */

const action = {
    
}

export default action