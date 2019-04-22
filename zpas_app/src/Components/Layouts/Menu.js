import React, {Fragment} from 'react';
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
import { browserHistory } from 'react-router';
import {Menus} from './../../store/MenuStore';
import { Link } from "react-router-dom";


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
  class Menu extends React.Component {
    state = {
      currentMenu: window.location.pathname.split('/')[1].toLowerCase(),
      
    };
    
    handleClick = (menu) => {
      console.log(this.state.currentMenu);
      this.setState({currentMenu: menu.toLowerCase()})      
    };
    
    checkIsSelected = (menu,submenu) => {
       const url = window.location.pathname.toLowerCase();
       console.log(url)
       if (url.includes(menu.toLowerCase()) && url.includes(submenu.toLowerCase()))
             
          return true;
       
          
      else
        return false;
    }

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
                  
                  return (
                    <Fragment>     
                      <ListItem button onClick={()=>this.handleClick(menu.name)}>
                          <ListItemIcon>
                          <InboxIcon />
                          </ListItemIcon>
                          <ListItemText inset primary={menu.displayName} />
                          {this.state.currentMenu==menu.name ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={this.state.currentMenu==menu.name} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {menu.subMenus.map((submenu)=>{
                              return <Fragment key={submenu.id}>
                                        <ListItem  button className={classes.nested} component={Link} to={submenu.url} selected={this.checkIsSelected(menu.name, submenu.name)}>                          
                                          <ListItemText inset primary={submenu.displayName} />
                                        </ListItem>
                                      </Fragment>
                            })}                  
                          </List>
                      </Collapse> 
                    </Fragment>
                  );
              })
          }       
          
        </List>
      );
    }
  }
  
  Menu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Menu);
