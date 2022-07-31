import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  container: {
    background: theme.palette.background.paper,

    '& .header': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '50px 0',
      borderBottom: `1px solid ${theme.palette.surface.variant}`,
      fontSize: 18,
      transition: 'all 0.3s',

      [theme.breakpoints.down(768)]: {
        fontSize: 16,
      },
      [theme.breakpoints.down(710)]: {
        flexDirection: 'column',
        padding: '30px 0 20px 0',
        rowGap: 15,
      },
      [theme.breakpoints.down(390)]: {
        fontSize: 14,
      },

      '& .search': {
        flex: 2,
        display: 'flex',
        alignItems: 'stretch',
        columnGap: 20,
        color: '#5c616e',
        fontSize: '1em',

        [theme.breakpoints.down(380)]: {
          flexDirection: 'column',
          rowGap: 15,
        },

        '& .filterSwitchContainer': {
          display: 'flex',
          background: 'transparent',
          position: 'relative',

          [theme.breakpoints.down(380)]: {
            height: 40,
            width: 'max-content',
          },

          '& .filterSwitchBtn': {
            display: 'flex',
            border: '0.5px solid #5c616e',
            borderRadius: 7,
            cursor: 'pointer',

            '& .filterIcon': {
              display: 'flex',
              alignItems: 'center',
            },

            '& .currentFilter': {
              display: 'flex',
              alignItems: 'center',
              padding: 4,
              userSelect: 'none',

              '& span': {
                fontWeight: 300,
                fontSize: '1em',
                color: 'inherit',
              },
            },

            '& .menuArrow': {
              display: 'flex',
              alignItems: 'center',
            },
          },

          '& .filterMenu': {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            width: '100%',
            top: '110%',
            zIndex: 1,
            background: theme.palette.background.paper,
            borderRadius: 5,
            transform: 'rotateX(90deg)',
            perspective: '500px',
            transformOrigin: 'top center',
            boxShadow: '1px 1px 3px 0 rgb(0 0 0 / 28%)',
            transition: 'all 0.25s',
            overflow: 'hidden',

            '&.open': {
              transform: 'rotateX(0)',
            },

            '& button': {
              borderRadius: 0,
              padding: '10px 0',
              fontSize: '0.9em',
            },
          },
        },

        '& .searchBox': {
          flex: 0.7,
          display: 'flex',
          transition: 'all 0.3s',

          [theme.breakpoints.down(710)]: {
            flex: 1,
          },

          '& .searchInput': {
            width: '100%',
            backgroundColor: '#dfe2eb',
            borderRadius: 7,
            fontWeight: 500,
            border: 0,

            '& > input': {
              paddingRight: 5,
            },
            '& > fieldset': {
              border: 0,
            },

            '& .searchIcon': {
              transform: 'scaleX(-1)',
            },
          },
        },
      },

      '& .buttons': {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        columnGap: 10,

        '& button': {
          fontSize: '1em',
          fontWeight: 400,
          borderRadius: 6,
        },
      },
    },

    '& .content': {
      padding: '20px 0',

      '& .gridItem': {
        transition: 'all 0.3s',
      },
    },
  },
}))

export default useStyle
