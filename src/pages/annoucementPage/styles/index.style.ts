import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        margin: '40px 0',
    },
    title: {
        color: '#b1b1b1',
        fontWeight: 'bold',
        fontSize: 32,
    },
    topSeperator: {
        marginTop: 20,
        width: 60,
        height: 2,
        backgroundColor: '#1660a5',
        marginBottom: 38,
    },
    image: {
        width: 600,
        height: 'auto',
        marginBottom: 50,
    },
    description: {
        fontSize: 24,
        color: '#000',
    },
    bottomSeperator: {
        width: 60,
        height: 2,
        backgroundColor: '#73777f',
        marginTop: 48,
    },
}))
export default useStyles
