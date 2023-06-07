const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ matchUtilities }) => {
  matchUtilities({
    multi: (value) => {
      const escape = (str) => {
        return str.replaceAll('_', '\\_').replaceAll(' ', '_')
      }
      const utilities = value.split(';').map(escape).join(' ')
      return {
        [`@apply ${utilities}`]: {},
      }
    },
  })
});
