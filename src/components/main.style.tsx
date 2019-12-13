import { makeStyles } from '@material-ui/styles'

export const getStyle = () => {
    const props = {}

    return makeStyles(theme => ({
        root: {
            padding: 10,
            textAlign: 'center'
        },
        container: {
            justifyContent: "center",
            marginBottom: 40,
        },
        item: {
            width: "20%",
            minWidth: "300px"
        },
        textArea: {
            fontSize: '20px',
            maxWidth: '400px',
            textAlign: 'center',
            display: 'inline-block',
            marginBottom: 40
        },
        text: {
            fontSize: 40,
            display: 'inline-block'
        }
    }))(props)
}