import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import {withRouter, Link} from 'react-router'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class NewAlternativeModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.initialState
  }

  componentWillMount() {
      this.setState(this.initialState)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newAlternative.showModal !== this.props.newAlternative.showModal ||
      nextProps.criteria.data !== this.props.criteria.data) {
      if (nextProps.newAlternative.showModal !== this.props.newAlternative.showModal) {
        this.setState(this.initialState)
      }
    }
  }

  get initialState() {
    return ({
      form: {
        name: '',
        criteria: this.props.criteria.data.map((criterion) => {
          criterion.value = ''
          return criterion
        })
      }
    })
  }

  handleChangeName = (name) => {
    let {form} = this.state

    form.name = name
    this.setState({form})
  }

  handleChangeCriterion = (value, index) => {
    let {form} = this.state

    form.criteria[index].value = value
    this.setState({form})
  }

  hasValue(item) {
    return item.value !== ''
  }

  handleClickSalvar = () => {
    const form = {...this.state.form}
    const {criteria, name} = this.state.form

    if (name.trim() !== '')
      this.props.onCreateAlternative(form)
  }

  handleKeyPress = ({key}) => key === 'Enter'
    ? this.handleClickSalvar()
    : null

  render() {
    return (
      <Dialog
        title="Adicionar Alternativa"
        actions={[
          <FlatButton
            label="Cancelar"
            primary={true}
            onClick={this.props.handleClose}
          />,
          <FlatButton
            label="Salvar"
            primary={true}
            onClick={this.handleClickSalvar}
          />,
        ]}
        modal={false}
        open={this.props.newAlternative.showModal}
        onRequestClose={() => 1}
        autoScrollBodyContent={true}
      >
        <TextField
          autoFocus
          style={{width: '100%'}}
          floatingLabelText='Nome'
          floatingLabelFixed={true}
          value={this.state.form.name}
          onChange={(evt) => this.handleChangeName(evt.target.value)}
          onKeyPress={this.handleKeyPress}
        />
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  criteria: state.criteria,
  newAlternative: state.newAlternative,
})

const mapDispatchToProps = (dispatch) => ({
  onCreateAlternative: (data) => {
    dispatch(actions.createAlternative(data))
  },
  onRequestCloseModal: () => {
    dispatch(actions.setNewAlternativeShowModal(false))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewAlternativeModal))
