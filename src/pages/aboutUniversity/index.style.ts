import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  historyContainer: {
    background: '#f1f0f4',

    '& .history': {
      padding: '9rem 0',
      display: 'flex',
      transition: 'all 0.3s',

      [theme.breakpoints.down(600)]: {
        flexDirection: 'column-reverse',
        padding: '5rem 0',
      },

      '& .timeline': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 50,
        width: '80%',

        [theme.breakpoints.down(600)]: {
          width: '100%',
        },

        '& .timelineItem': {
          display: 'flex',
          alignItems: 'center',
          columnGap: 80,
          transition: 'all 0.3s',

          [theme.breakpoints.down(960)]: {
            columnGap: 50,
          },
          [theme.breakpoints.down(450)]: {
            flexDirection: 'column',
          },

          '& .year > img': {
            width: 350,
            transition: 'all 0.3s',

            [theme.breakpoints.down(1110)]: {
              width: '250px !important',
            },
            [theme.breakpoints.down(1050)]: {
              width: '230px !important',
            },
            [theme.breakpoints.down(990)]: {
              width: '210px !important',
            },
            [theme.breakpoints.down(960)]: {
              width: '180px !important',
            },
            [theme.breakpoints.down(850)]: {
              width: '160px !important',
            },
            [theme.breakpoints.down(650)]: {
              width: '140px !important',
            },
          },

          '& .desc': {
            '& .title': {
              color: theme.palette.primary.onContainer,
              fontSize: 24,
              marginBottom: 50,
              transition: 'all 0.3s',

              [theme.breakpoints.down(850)]: {
                fontSize: 20,
              },
              [theme.breakpoints.down(750)]: {
                fontSize: 18,
              },
              [theme.breakpoints.down(450)]: {
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 25,
              },
              [theme.breakpoints.down(370)]: {
                fontSize: 15,
                fontWeight: 500,
              },
            },

            '& p': {
              color: theme.palette.primary.onContainer,
              fontWeight: 400,
              lineHeight: 1.7,
              textAlign: 'justify',
              transition: 'all 0.3s',

              [theme.breakpoints.down(850)]: {
                fontSize: 14,
              },
              [theme.breakpoints.down(750)]: {
                fontSize: 12,
              },
            },
          },
        },
        '& .timelineItemReverse': {
          flexDirection: 'row-reverse',
        },
      },

      '& > .sideTitle': {
        width: '20%',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'start',
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        paddingBottom: 50,

        [theme.breakpoints.down(600)]: {
          width: '100%',
          writingMode: 'initial',
          transform: 'rotate(0deg)',
        },

        '& > h2': {
          fontSize: 100,
          wordSpacing: 110,
          transition: 'all 0.3s',

          [theme.breakpoints.down(1110)]: {
            fontSize: 80,
            wordSpacing: 120,
          },
          [theme.breakpoints.down(960)]: {
            fontSize: 70,
            wordSpacing: 100,
          },
          [theme.breakpoints.down(850)]: {
            fontSize: 60,
          },
          [theme.breakpoints.down(750)]: {
            fontSize: 56,
          },
          [theme.breakpoints.down(650)]: {
            fontSize: 64,
          },
          [theme.breakpoints.down(600)]: {
            fontSize: 30,
            wordSpacing: 'initial',
          },
          [theme.breakpoints.down(530)]: {
            fontSize: 25,
          },
          [theme.breakpoints.down(450)]: {
            width: '100%',
            fontSize: 20,
            textAlign: 'center',
          },
          [theme.breakpoints.down(370)]: {
            fontSize: 17,
          },

          tansition: 'all 0.3s',
        },
      },
    },
  },
  container: {
    padding: '0 124px !important', // to align with the edges of the header
    [theme.breakpoints.down('lg')]: {
      padding: '0 74px !important',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 24px !important',
    },
  },
}))
export default useStyles
