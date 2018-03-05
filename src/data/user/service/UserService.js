import ApiClient from '../../common/ApiClient'

export default class UserService {

  constructor() {
    this.baseRequest = ApiClient.BaseRequest
  }

  login(loginParam) {
    return this.baseRequest.post('/login', {
      body: loginParam,
      json: true,
    })
  }
}
