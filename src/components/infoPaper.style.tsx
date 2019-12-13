import { makeStyles } from '@material-ui/styles'

export const getStyle = () => {
    const props = {}

    return makeStyles(theme => ({
        paper: {
            padding: "5%",
            justifyContent: 'center',
            textAlign: 'center',
            height: '150px',
            fontSize: '16px'
        }
    }))(props)
}