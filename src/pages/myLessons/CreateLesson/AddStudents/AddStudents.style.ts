import { makeStyles } from '@mui/styles'
import bgImg from '../../../../assets/images/khu_env_min.jpg'

const useStyle = makeStyles((theme) => ({
  background: {
    flex: 1,
    background: `#eee url("${bgImg}") no-repeat fixed`,
    backgroundSize: 'cover',

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 20,
      margin: '80px 10%',
      padding: 40,
      position: 'relative',
      borderRadius: 5,
      background: theme.palette.background.paper,
      boxShadow: '0 1px 3px 1px rgba(0, 0, 0, 0.15)',
      fontSize: 18,
      transition: 'all 0.3s',

      '& .top': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,

        '& .modalTitle': {
          fontSize: '1.3em',
          fontWeight: 600,
          color: theme.palette.tertiary.main,
        },
      },

      '& .bottom': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 50,
        justifyContent: 'space-between',
        fontSize: '0.888888em',

        '& .addStudentContainer': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          '& .right': {
            display: 'flex',
            alignItems: 'center',
            columnGap: 10,

            '& .studentIdInput': {
              '& input': {
                padding: '10px 16px',
              },
            },

            '& .addIcon': {
              background: theme.palette.primary.main,
              borderRadius: 5,
              transition: 'all 0.3s',

              '&:hover': {
                opacity: 0.8,
              },

              '& *': {
                color: '#fff',
              },
            },
          },
        },

        '& .studentList': {
          '& table': {
            width: '100%',
            border: '1px solid #aaa',
            borderCollapse: 'collapse',

            '& tr': {
              height: 40,

              '& td': {
                textAlign: 'center',
              },
            },

            '& thead': {
              background: theme.palette.tertiary.main,

              '& *': {
                color: '#fff',
                fontWeight: 400,
              },
            },

            '& tbody': {
              maxHeight: 300,
              overflowY: 'auto',

              '& tr:nth-child(2n)': {
                background: '#dfe2eb',
              },
            },

            '& .deleteStudentBtn': {
              borderRadius: 20,
              fontWeight: 300,
              padding: '4px 20px',
            },
          },
        },

        '& .confirmBtn': {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',

          '& > button': {
            width: '30%',
            fontSize: '1.05em',
            fontWeight: 300,
            borderRadius: 7,
            padding: '5px 20px',
            boxShadow: 'none',
            transition: 'all 0.3s',

            [theme.breakpoints.down(1000)]: {
              width: '50%',
            },
            [theme.breakpoints.down(600)]: {
              width: '70%',
            },
          },
        },
      },
    },
  },
}))

export default useStyle
