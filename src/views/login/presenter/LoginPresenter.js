import LoginInteractor from '../../../domain/user/interactor/LoginInteractor'
import UserService from '../../../data/user/service/UserService'
import UserDataRepository from '../../../data/user/repository/UserDataRepository'

export default class LoginPresenter {

  constructor() {
    this.loginInteractor = new LoginInteractor(new UserDataRepository(new UserService()))
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
