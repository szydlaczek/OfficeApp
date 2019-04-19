import React , {Fragment} from 'react';
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
  class GroupMenu extends React.Component {
    state = {
      open: true,
      name: this.props.name,
      submenus: this.props.submenus
    };
  
    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    };
  
    render() {
      const { classes } = this.props; 
      console.log(this.props.location);     
      return (          
        <Fragment>     
            <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={this.state.name} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {this.state.submenus.map((submenu)=>{
                    return <Fragment key={submenu.id}>
                              <ListItem  button className={classes.nested} component={Link} to={submenu.url} >                          
                                <ListItemText inset primary={submenu.name} />
                              </ListItem>
                            </Fragment>
                  })}                  
                </List>
            </Collapse> 
        </Fragment>       
      );
    }
  }
  
  GroupMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(GroupMenu);

