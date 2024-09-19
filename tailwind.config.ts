module.exports = {
    theme: {
      extend: {
        typography: (theme: any) => ({
          DEFAULT: {
            css: {
              color: '#fff',
              a: {
                color: '#3182ce',
                '&:hover': {
                  color: '#2c5282',
                },
              },
              h1: {
                color: '#fff',
              },
              h2: {
                color: '#fff',
              },
              h3: {
                color: '#fff',
              },
              strong: {
                color: '#fff',
              },
              code: {
                color: '#fff',
              },
              blockquote: {
                color: '#cbd5e0',
              },
              p: {
                marginTop: theme('spacing.6'),
                marginBottom: theme('spacing.6'),
              },
              ul: {
                li: {
                  marginTop: theme('spacing.4'),
                  marginBottom: theme('spacing.4'),
                },
              },
              ol: {
                li: {
                  marginTop: theme('spacing.4'),
                  marginBottom: theme('spacing.4'),
                },
              },
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
    // Other configurations...
  }