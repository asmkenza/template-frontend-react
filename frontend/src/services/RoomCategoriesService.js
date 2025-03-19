import fetch from 'auth/FetchInterceptor'
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const RoomCategoryService = {}

RoomCategoryService.getCategories = () => {
  return fetch({
    url: `${APP_PREFIX_PATH}/room-categories-all`,
    method: 'get'
  })
}

export default RoomCategoryService