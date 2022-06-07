import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    dispaly: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    padding: '0 121px',
  },
  rightPart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '110px !important',
    color: `${theme.palette.primary.contrastText} !important`,
    marginBottom: 1,
  },
  description: {
    color: '#73777f !important',
    fontSize: '41.9px !important',
    fontWeight: 'normal !important',

  },
  downloadButton: {
    marginTop: '90px !important',
    width: 492,
    height: 110,
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.5) !important',
    display: 'flex !important',
    flexDirection: 'row',
    columnGap: 21,
    borderRadius: '15px !important',
  },
  downloadButtonIcon: {
    color: '#FFF',
    fontSize: '42px !important',
  },

}))
export default useStyles
