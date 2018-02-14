import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SampleActions } from '../actions'

const mapStateToProps = (state) => {
 return {
  samples: state.samples,
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions:  {
      sampleActions: bindActionCreators(SampleActions, dispatch),
    }
  }
}

export default function BaseViewComponent(WrappedView) {
  class BaseViewComponent extends WrappedView {

    constructor() {
      super()
    }

    render() {
      return (
        <div>
          { super.render() }
        </div>
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(BaseViewComponent)
}
