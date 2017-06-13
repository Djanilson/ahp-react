import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import {blue500, blue700} from 'material-ui/styles/colors';
import AlternativesItem from './alternatives-item'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const Alternatives = (props) => (
  <Paper style={{width: '100%', maxWidth: 400, height: 'auto'}} zDepth={1}>
    <List>
      <div>
        <Subheader>Alternativas
          <FlatButton
            style={{color: "white", float: "right", marginRight: 10}}
            backgroundColor={blue500}
            hoverColor={blue700}
            icon={<ContentAdd />}
            onClick={props.onClickAdicionar}
          />
        </Subheader>
      </div>
      {props.alternatives.map((item, index) =>
        <AlternativesItem
          key={index}
          label={item.name}
          onClickRemove={props.onClickRemoveAlternative.bind(this, index)}
        />
      )}
    </List>
  </Paper>
)

Alternatives.propTypes = {
  alternatives: React.PropTypes.array,
  onClickAdicionar: React.PropTypes.func
}

module.exports = Alternatives
