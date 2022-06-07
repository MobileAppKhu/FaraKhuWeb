import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    padding: '0 121px',
    flexDirection: 'row',
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
  leftPart: {
    width: 703,
    height: 703,
    borderRadius: '100%',
    backgroundColor: '#DCE9FF',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  downloadBox: {
    width: 311,
    height: 180,
    borderRadius: 20,
    boxShadow: '4px 6px 8px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '11px 20px',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  platformContainer: {
    display: 'flex',
    columnGap: 38.2,
    padding: '0 16px',
  },
  userInfo: {
    width: 300,
    height: 180,
    borderRadius: 20,
    boxShadow: '4px 6px 8px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 20px',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  userInfoTitle: {
    display: 'flex',
    columnGap: 13,
    alignItems: 'center',
  },
  userInfoTitleIcon: {
    fontSize: 34,
    color: theme.palette.primary.light,
  },
  numberOfUser: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 41.9,
    color: theme.palette.primary.dark,
  },
  application1: {
    height: 527,
    // aspectRatio: '1px',
  },
}))
export default useStyles
