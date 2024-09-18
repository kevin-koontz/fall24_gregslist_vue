import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { House } from "@/models/House.js"


class HousesService {

  async getHouses() {
    const response = await api.get('api/houses')
    logger.log('GOT HOUSES 🏘️', response.data)

  }

}

export const housesService = new HousesService()