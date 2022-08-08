import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  background: {
    flex: 1, // to fill the remaining height
    background: theme.palette.background.paper,
    color: theme.palette.secondary.dark,

    '& .container': {
      display: 'flex',
      justifyContent: 'space-between',
      color: theme.palette.secondary.dark,
      padding: '50px 10%',
      columnGap: '10%',
      fontSize: 18,

      [theme.breakpoints.down(900)]: {
        flexDirection: 'column-reverse',
        rowGap: 30,
      },

      '& .details': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20,

        '& div,span,p': {
          color: 'inherit',
          fontWeight: 400,
        },

        '& .firstSection': {
          display: 'flex',
          flexDirection: 'column',
          rowGap: 15,

          '& .title': {
            fontSize: '1.7em',
            fontWeight: 600,
            color: theme.palette.primary.onContainer,
            overflowWrap: 'anywhere',
          },

          '& .type': {
            width: 'max-content',
            fontSize: '0.9em',
            fontWeight: 400,
            borderRadius: 7,
            padding: '0 15px',
            border: `1px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
          },

          '& .contactInfo': {
            '& button': {
              fontWeight: 300,
              fontSize: '1em',
              borderRadius: 7,
              padding: '3px 16px',
              boxShadow: 'none',
            },
          },
        },

        '& .secondSection': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          '& .price': {
            display: 'flex',
            alignItems: 'center',
            columnGap: 5,
          },
        },

        '& .thirdSection': {
          display: 'flex',
          flexDirection: 'column',
          rowGap: 15,

          '& .desc': {
            overflowWrap: 'anywhere',
          },
        },

        '& .separator': {
          width: '100%',
          height: 1,
          background: theme.palette.surface.variant,
        },

        '& .sectionTitle': {
          fontWeight: 500,
        },
      },

      '& .img': {
        flex: 1,
        height: 'min-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.5px solid rgba(112, 112, 112, 0.4)',
        overflow: 'hidden',
        background: theme.palette.surface.variant,

        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },

        '&.noImg': {
          height: 'initial',

          [theme.breakpoints.down(900)]: {
            aspectRatio: 2,
          },
        },
      },
    },
  },
}))

export default useStyle
