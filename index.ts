import plugin from 'tailwindcss/plugin';

export default plugin(({ matchUtilities }) => {
  matchUtilities({
    multi: (value) => {
      const escape = (str: string) => {
        return str.replace(/_/g, '\\_').replace(/ /g, '_');
      };
      const utilities = value.split(';').map(escape).join(' ');
      return {
        [`@apply ${utilities}`]: {},
      };
    },
  });
});
