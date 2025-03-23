import fetch from 'auth/FetchInterceptor'
import { env } from 'configs/EnvironmentConfig'

const RoomCategoryService = {}

RoomCategoryService.getCategories = () => {
  return fetch({
    url: `${env.API_ENDPOINT_URL}admin/room-categories-all`,
    method: 'get'
  })
}


RoomCategoryService.deleteCategory = (id) => {
  return fetch({
    url: `${env.API_ENDPOINT_URL}admin/room-categories/${id}`,
    method: 'delete',
  });
};





export default RoomCategoryService