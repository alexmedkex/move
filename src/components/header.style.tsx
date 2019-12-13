import { makeStyles } from '@material-ui/styles'
import image from '../../assets/dis.jpg'

export const getStyle = () => {
    const props = {}

    return makeStyles((theme: any) => ({
        header: {
            backgroundImage: `url(${image})`,
            padding: '5%',
            margin: '0px',
            color: 'white',
            textAlign: 'center',
        },
        textArea: {
            fontSize: '20px',
            maxWidth: '400px',
            textAlign: 'center',
            justifyContent: 'center',
            display: 'inline-block'
        }
    }))(props)
}