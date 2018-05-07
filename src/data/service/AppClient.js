import ServiceErrorOperator from '../common/operator/ServiceErrorOperator'

export default class AppClient {
  constructor (service, storageProvider) {
    this.service = service
    this.storageProvider = storageProvider
  }
}
