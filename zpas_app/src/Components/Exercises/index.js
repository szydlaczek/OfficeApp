import React from 'react';
import {Grid, Paper} from '@material-ui/core';
export default props  =>
<Grid container sm={12}>
    <Grid item sm>
        <Paper>
            Left pane
        </Paper>
    </Grid>
    <Grid item sm>
        <Paper>
            Right pane
        </Paper>
    </Grid>
</Grid>