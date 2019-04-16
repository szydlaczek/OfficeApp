import React from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core';


export default props =>
<AppBar position="static">
        <Toolbar>
        <Typography component="h2" variant="headline" color="inherit">
          Headline
        </Typography>
        </Toolbar>
      </AppBar>