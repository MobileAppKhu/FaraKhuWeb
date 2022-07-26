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
  famousPeople: {
    padding: '3rem 0',
    // height: 1000,
    position: 'relative',
    backgroundColor: theme.palette.surface.variant,

    '& .title': {
      color: theme.palette.primary.onContainer,
      position: 'absolute',
      marginTop: 50,
      width: '15%',
      fontSize: 30,
      lineHeight: 1.4,
      transition: 'all 0.3s',
      [theme.breakpoints.down(1395)]: {
        position: 'initial',
        width: 'initial',
        marginTop: 30,
        marginBottom: 40,
      },
      [theme.breakpoints.down(530)]: {
        fontSize: 25,
      },
      [theme.breakpoints.down(450)]: {
        fontSize: 20,
        textAlign: 'center',
      },
      [theme.breakpoints.down(370)]: {
        fontSize: 18,
      },
    },

    '& .pics': {
      [theme.breakpoints.down(1395)]: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      },

      '& .famousPerson': {
        display: 'flex',
        width: 'min-content',
        overflow: 'hidden',
        position: 'relative',
        float: 'right',
        transform: 'scale(0.8)',
        transition: 'all 0.3s',

        [theme.breakpoints.down(1395)]: {
          float: 'none',
          margin: '0 !important',
          transform: 'scale(1)',
        },

        '&.derakhshesh': {
          marginRight: 250,
          marginTop: 20,
          [theme.breakpoints.down(1520)]: {
            marginRight: 220,
          },
        },
        '&.mosaheb': {
          marginRight: 10,
          [theme.breakpoints.down(1520)]: {
            marginRight: -20,
          },
        },
        '&.behzad': {
          marginTop: 30,
          marginRight: 10,
          [theme.breakpoints.down(1520)]: {
            marginRight: -20,
          },
        },
        '&.shokoohi': {
          marginTop: 20,
          marginRight: 20,
          [theme.breakpoints.down(1520)]: {
            marginRight: -20,
          },
        },
        '&.gorgani': {
          marginRight: 80,
          marginTop: -60,
          [theme.breakpoints.down(1520)]: {
            marginRight: 20,
          },
          [theme.breakpoints.down(1445)]: {
            marginRight: -30,
          },
        },
        '&.jalal': {
          marginRight: -10,
          marginTop: -40,
        },
        '&.rajaee': {
          marginTop: -20,
        },
        '&.parvin': {
          marginTop: -50,
        },
        '&.khansari': {
          marginTop: -20,
          marginRight: 15,
          [theme.breakpoints.down(1520)]: {
            marginRight: 0,
          },
        },
        '&.enayat': {
          marginTop: -65,
          marginRight: 50,
          [theme.breakpoints.down(1520)]: {
            marginRight: -10,
          },
          [theme.breakpoints.down(1445)]: {
            marginRight: -40,
          },
        },
        '&.mojtabyani': {
          marginTop: -20,
          [theme.breakpoints.down(1520)]: {
            marginRight: -20,
          },
        },
        '&.tavassoli': {
          marginTop: -30,
          [theme.breakpoints.down(1520)]: {
            marginRight: -20,
          },
        },
        '&.sarookhani': {
          marginTop: -20,
          [theme.breakpoints.down(1520)]: {
            marginRight: -20,
          },
        },

        '& .pic': {
          [theme.breakpoints.down(1395)]: {
            width: 250,
            height: 250,
            objectPosition: 'top',
            objectFit: 'cover',
          },
        },

        '&:hover > .name': {
          transform: 'translate3d(0, 0, 0)',
        },

        '& .name': {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          padding: 10,
          background: 'rgba(0,0,0,0.65)',
          transform: 'translate3d(0, 100%, 0)',
          transition: 'all 0.2s',

          [theme.breakpoints.down(450)]: {
            transform: 'translate3d(0, 0, 0)',
          },

          '& span': {
            fontWeight: 400,
          },
        },
      },
    },
  },
  copyRight: {
    background: '#f1f0f4',
    height: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& span': {
      color: theme.palette.primary.onContainer,
      fontWeight: 500,

      '& a': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        padding: '0 10px',
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
