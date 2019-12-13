import React from 'react'
import { Paper } from '@material-ui/core'
import { getStyle } from "./infoPaper.style"

interface InfoPaperProps {
    title: string,
    text: string
}

function InfoPaper(props: InfoPaperProps) {
    const classes = getStyle()

    return (
        <div>
            <Paper className={classes.paper}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </Paper>
        </div>
    )
}

export default InfoPaper