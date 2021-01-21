const Task = () => import(/* webpackChunkName: "product" */ '../pages/product/')
const ReleaseTask = () => import(/* webpackChunkName: "release-product" */ '../pages/product/release-product.vue')
const EditTask = () => import(/* webpackChunkName: "edit-product" */ '../pages/product/release-product.vue')

const ProductRoutes = [
  {
    path: '/task',
    name: 'task',
    component: Task,
    meta: {
      title: '任务模版',
      keepAlive: true
    }
  },
  {
    path: '/release-task',
    name: 'Releasetask',
    component: ReleaseTask,
    meta: {
      title: '发布任务',
      keepAlive: true
    }
  },
  {
    path: '/edit-task',
    name: 'EditTask',
    component: EditTask,
    meta: {
      title: '编辑任务',
      keepAlive: true
    }
  }
]

export default ProductRoutes
