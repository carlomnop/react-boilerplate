import { Rxios } from 'rxios'

import AppService from '../data/service/AppService'
import AppClient from '../data/service/AppClient'
import StorageProvider from '../data/provider/StorageProvider'

export default container => {
  container.singleton('StorageProvider', StorageProvider)

  container.singleton('ApiClient',
    new Rxios({
      baseURL: BASE_URL,
    })
  )

  container.singleton('AppService', AppService, ['ApiClient'])
  container.singleton('AppClient', AppClient, ['AppService', 'StorageProvider'])

  return container
}
