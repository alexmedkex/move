import { makeStyles } from '@material-ui/styles'

export const getStyle = () => {
    const props = {}

    return makeStyles(theme => ({
        text: {
            fontSize: 20,
            padding: "20px 0"
        }
    }))(props)
}