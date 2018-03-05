import { RxHR } from '@akanass/rx-http-request'

export default {
    BaseRequest: RxHR.defaults({
    baseUrl: 'https://api-uat.unionbankph.com/ubp/uat/hr/benefits/v1/',
    headers: {
      'X-IBM-Client-Id': '5a52c99a-1303-42f5-9871-9e3844f1fd9f',
      'X-IBM-Client-Secret': 'sJ2sU2mJ4eE2oI6wM7rY3mG6jT1mS2eT1wY3pR8qP7jL2uC5iT',
    }
  })
}
