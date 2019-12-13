import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { getStyle } from "./email.style"
import Grid from '@material-ui/core/Grid'

function Email() {
    const classes = getStyle()

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <div className={classes.content}>
                    <h3>Contact us for more information!</h3>
                    <TextField label="Enter your message" className={classes.textBox} variant="outlined" size="medium" fullWidth={true} multiline rows={8} InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}></TextField>
                    <TextField label="Your email" className={classes.emailBox} variant="outlined" fullWidth={true} InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}></TextField>
                    <Button className={classes.button} variant="contained" color="primary" size="large">Submit</Button>
                </div>
            </Grid>
        </div>
    )
}

export default Email