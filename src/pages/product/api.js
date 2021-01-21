import request from '@/utils/request'
// 任务列表
export const getTask = params => request.post('/api/admin/taskAdmin/getTaskList', params)
// 获取商品详情
// export const getProductDetail = params => request.post('/api/admin/ProductAdmin/getProductItemDetail', params)
export const getTaskDetail = params => request.post('/api/admin/taskAdmin/getTaskDetail', params)
// 创建商品
export const createTask = params => request.post('/api/admin/taskAdmin/createTask', params)
// 批量上/下架商品
export const operateTask = params => request.post('/api/admin/taskAdmin/updateTask', params)
// 删除商品item
export const deleteTask = params => request.post('/api/admin/ProductAdmin/deleteTask', params) //弃用 改用operateProduct
// 创建商品item
export const createProductItem = params => request.post('/api/admin/ProductAdmin/CreateProductItem', params)
// 获取品牌列表
export const getProductBrandList = params => request.post('/api/admin/ProductAdmin/getProductBrandList', params)
// 编辑商品item
export const updateTask = params => request.post('/api/admin/taskAdmin/updateTask', params)
// 获取品牌列表
export const getProductCategoryList = params => request.post('/api/admin/ProductAdmin/getProductCategoryList', params)
export const getOssSign =  () => request.get('/api/system/aliyun/getOssSign')
// 获取star列表
export const getStarIpList = params => request.post('/api/admin/productAdmin/searchStarIpList', params)
/**
 * @desc 上传图片
 */
export const uploadBase64Image =  (params) => request.post('/api/system/media/uploadBase64Image ', params, {
  timeout: 30000
})

