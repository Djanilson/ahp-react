import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import {withRouter} from 'react-router'
import PreferencesItem from './preferences-item'

class Preferences extends React.Component {
  onChangePreferenceComparison() {

  }

  render() {
    const {alternatives, preferences} = this.props

    return (
      <div>
        {preferences.data.map((item, index) =>
          <PreferencesItem
            key={index}
            preference={item}
            preferenceIndex={index}
            alternatives={alternatives.data}
            onChangePreferenceValue={this.props.onChangePreference}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  alternatives: state.alternatives,
  preferences: state.preferences
})

const mapDispatchToProps = (dispatch) => ({
  onChangePreference: (comparison, index) => {
    dispatch(actions.updatePreference(comparison, index))
  },
  onWillMount: () => {
    dispatch(actions.fetchCriteria())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preferences))
