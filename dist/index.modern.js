import t from"tailwindcss/plugin";const i=t(({matchUtilities:t})=>{t({multi:t=>{const i=t.slice(1,-1).split(/;(?![^[]*\])/).map(t=>t.replace(/_/g,"\\_").replace(/ /g,"_")).join(" ");return i.trim()?{[`@apply ${i}`]:{}}:{}}})});export{i as default};
//# sourceMappingURL=index.modern.js.map
