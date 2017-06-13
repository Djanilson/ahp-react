import React from 'react'
import {Link} from 'react-router'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import {red500} from 'material-ui/styles/colors';

const getIcon = (props) => {
  if (props.title !== 'Home')
    return (
      <Link to='home' >
        <RaisedButton
          label='Ver resultado'
        />
      </Link>
    )
}

// const Topbar = (props) => (
//   <AppBar
//     title={"X" + props.title}
//     titleStyle={{paddingLeft: 215}}
//     style={{position: 'fixed'}}
//     showMenuIconButton={false}
//     iconElementRight={getIcon(props)}
//     iconStyleRight={{display: 'flex', alignItems: 'center', marginTop: 0, }}
//   />
// );

const Topbar = (props) => (
  <Toolbar
    style={{
      backgroundColor: red500,
      paddingTop: "5px",
    }}
  >
    <ToolbarGroup>
        <Link to='home' >
          <MenuItem style={{color: "white"}}primaryText={"Home"} />
        </Link>
        <Link to='preferencias' >
          <MenuItem style={{color: "white"}}primaryText={"Preferências"} />
        </Link>
        <Link to='criterios' >
          <MenuItem style={{color: "white"}}primaryText={"Critérios"} />
        </Link>
    </ToolbarGroup>
  </Toolbar>
)

Topbar.propTypes = {
  items: React.PropTypes.array,
}

Topbar.defaultProps = {
  items: []
}

module.exports = Topbar
