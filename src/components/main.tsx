import React from 'react'
import { getStyle } from "./main.style"
import Grid from '@material-ui/core/Grid'
import InfoPaper from "./infoPaper"
import boxImage from '../../assets/box.png'
import coinImage from '../../assets/coin.png'
import thumbsupImage from '../../assets/thumbs-up.png'

function Main() {
    const classes = getStyle()
    //const [greeting, setGreeting] = useState('Hello function component!')

    const title1 = 'Tax services'
    const text1 = 'We will guide you through the Portuguese tax laws, and find the optimal solution for your situation.'
    const title2 = 'NHR'
    const text2 = 'Want to apply for NHR status? We\'ll help you find out if you are eligible, and then apply for you.'
    const title3 = 'Other immigration services'
    const text3 = 'Visa applications, starting your business, accounting services, general guidance and more.'

    return (
        <div className={classes.root}>
            <div className={classes.textArea}>
                <p className={classes.text}>Make your move to Lisbon a hassle-free experience.</p>
            </div>
            <Grid className={classes.container} container spacing={10} direction="row">
                <InfoPaper order={true} image={boxImage} title={title1} text={text1}></InfoPaper>
                <InfoPaper order={false} image={coinImage} title={title2} text={text2}></InfoPaper>
                <InfoPaper order={true} image={thumbsupImage} title={title3} text={text3}></InfoPaper>
            </Grid>
        </div>
    )
}

export default Main