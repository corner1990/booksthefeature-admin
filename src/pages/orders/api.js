import request from '@/utils/request'
// 订单列表
export const getOrderList = params => request.post('/api/admin/taskOrderAdmin/queryTaskOrderList', params)
// 审核任务
export const checkTaskOrder = params => request.post('/api/admin/taskOrderAdmin/checkTaskOrder', params)
// 任务完成的认定结果审核
export const checkTaskOrderSign = params => request.post('/api/admin/taskOrderAdmin/checkTaskOrderSign', params)
/**
 * @desc 获取任务详情
 * @param {*} params 
 */
export const getTaskDetail = params => request.post('/api/admin/taskAdmin/queryTaskDetail', params)
