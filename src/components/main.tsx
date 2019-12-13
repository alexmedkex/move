import React from 'react'
import { getStyle } from "./main.style"
import Grid from '@material-ui/core/Grid'
import InfoPaper from "./infoPaper";

function Main() {
    const classes = getStyle()
    //const [greeting, setGreeting] = useState('Hello function component!')

    return (
        <div className={classes.root}>
            <div className={classes.textArea}>
                <p className={classes.text}>Hassle-free, quick and reliable.</p>
            </div>
            <Grid className={classes.container} container spacing={5}>
                <Grid className={classes.item} item>
                    <InfoPaper title="Tax services" text="We will help you find the optimal solution."></InfoPaper>
                </Grid>
                <Grid className={classes.item} item>
                    <InfoPaper title="NHR" text="We can assist you in all matters regarding your NHR application."></InfoPaper>
                </Grid>
                <Grid className={classes.item} item>
                    <InfoPaper title="Recommendations" text="Etc"></InfoPaper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Main