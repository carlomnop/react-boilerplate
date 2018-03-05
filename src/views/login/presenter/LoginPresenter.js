import LoginInteractor from '../../../domain/user/interactor/LoginInteractor'
import UserService from '../../../data/user/service/UserService'

export default class LoginPresenter {

  constructor() {
    this.loginInteractor = new LoginInteractor(new UserService())
  }

  setView(view) {
    this.view = view
  }

  login(loginParam) {
    this.view.showLoading('')

    this.loginInteractor.execute(loginParam)
      .subscribe(
        data => {
          this.view.hideLoading()
          console.log(data)
        },
        error => {
          this.view.hideLoading()
          console.log(error)
        }
      )
  }
}
