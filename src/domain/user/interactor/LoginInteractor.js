export default class LoginInteractor {

  constructor(userService) {
    this.userService = userService
  }

  execute(loginParam) {
    return this.userService.login(loginParam)
  }
}
