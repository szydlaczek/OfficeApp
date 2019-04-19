import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import GroupMenu from "./GroupMenu";
import {Menus} from './../../store/MenuStore';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  })
  class NestedMenu extends React.Component {
    state = {
      open: true,
    };
    
    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    };
  
    render() {
      const { classes } = this.props;
      const menus = Menus; 
      return (
        <List
          component="nav"
          
          className={classes.root}
        > 
          {
              menus.map((menu)=>{
                   return <GroupMenu name={menu.name} submenus={menu.SubMenus}/>
              })
          }       
          {/* <GroupMenu name={"Administrator"}></GroupMenu>
          <GroupMenu name={"Kadry"}></GroupMenu> */}
        </List>
      );
    }
  }
  
  NestedMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NestedMenu);
