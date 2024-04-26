import plugin from 'tailwindcss/plugin.js';

export default plugin(({ matchUtilities }) => {
  matchUtilities({
    multi: (value) => {
      const ends = [value[0], value.slice(-1)[0]];
      if (!ends.every((end) => end && [`'`, `"`].includes(end))) {
        throw new Error(
          `Invalid multi value. \`${value}\` must be quoted with single or double quotes (e.g. \`multi-['...']'\`).`
        );
      }

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
