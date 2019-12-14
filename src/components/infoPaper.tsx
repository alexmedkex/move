import React from 'react'
import { Grid } from '@material-ui/core'
import { getStyle } from "./infoPaper.style"

interface InfoPaperProps {
    order: boolean,
    image: any,
    title: string,
    text: string
}

function InfoPaper(props: InfoPaperProps) {
    const classes = getStyle()
    
    const imageSection = (
        <img src={props.image} width="200px"></img>
    )
    const textSection = (
        <div className={classes.text}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )

    let firstElement
    let secondElement

    if (props.order) {
        firstElement = imageSection
        secondElement = textSection
    } else {
        firstElement = textSection
        secondElement = imageSection
    }

    return (
        <React.Fragment>
            <Grid item xs={6}>
                {firstElement}
            </Grid>
            <Grid item xs={6}>
                {secondElement}
            </Grid>
        </React.Fragment>
    )
}

export default InfoPaper