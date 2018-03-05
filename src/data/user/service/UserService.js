export default class UserService {

  constructor(baseRequest) {
    this.baseRequest = baseRequest;
  }

  login(loginParam) {
    return this.baseRequest.post('/login', {
      body: loginParam,
      json: true,
    })
  }
}
