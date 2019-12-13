import { makeStyles } from '@material-ui/styles'

export const getStyle = () => {
    const props = {}

    return makeStyles((theme: any) => ({
        root: {
            padding: "40px"
        },
        container: {
            justifyContent: "center",
        },
        content: {
            textAlign: "center",
            fontSize: '16px',
            width: '500px'
        },
        textBox: {
            margin: '20px'
        },
        emailBox: {
            margin: '20px'
        },
        button: {
            fontSize: 16
        },
        resize: {
            fontSize: 16
        }
    }))(props)
}