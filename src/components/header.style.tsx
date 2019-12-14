import { makeStyles } from '@material-ui/styles'
import image from '../../assets/dis.jpg'

export const getStyle = () => {
    const props = {}

    return makeStyles((theme: any) => ({
        header: {
            backgroundImage: `url(${image})`,
            filter: 'blur(3px)',
            height: 400,
            WebkitFilter: 'blur(3px)',
            padding: '5%',
            margin: '0px',
            color: 'white',
            textAlign: 'center',
        },
        textArea: {
            backgroundColor: 'rgba(0,0,0, 0.2)', /* Black w/opacity/see-through */
            fontWeight: 'bold',
            color: 'white',
            border: '3px solid #f1f1f1',
            zIndex: 2,
            fontSize: '20px',
            fontStyle: 'italic',
            maxWidth: '400px',
            textAlign: 'center',
            justifyContent: 'center',
            display: 'inline-block',
            position: 'absolute',
            transform: 'translate(180%, -150%)',
        }
    }))(props)
}