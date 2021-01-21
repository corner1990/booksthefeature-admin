const Orders = () => import('../pages/orders')
const OrderOver = () => import('../pages/orders/order-over')
const OrdersRoutes = [
  {
    path: '/orders/index',
    name: 'orders',
    component: Orders,
    meta: {
      title: '任务清单管理',
      keepAlive: true
    },
    
  },
  {
    path: '/orders/task-over',
    name: 'orders',
    component: OrderOver,
    meta: {
      title: '任务结束审核',
      keepAlive: true
    },
    
  }
]

export default OrdersRoutes
