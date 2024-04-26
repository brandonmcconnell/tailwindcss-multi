import plugin from 'tailwindcss/plugin.js';

export default plugin(({ matchUtilities }) => {
  matchUtilities({
    multi: (value) => {
      const escape = (str: string) => str.replace(/_/g, '\\_').replace(/ /g, '_');
      const delimiter = /;(?![^[]*\])/;
      const utilities = value
        .slice(1, -1)
        .split(delimiter)
        .filter((str) => str.trim().length)
        .map(escape)
        .join(' ');
      return !utilities.trim()
        ? {}
        : {
            [`@apply ${utilities}`]: {},
          };
    },
  });
});
