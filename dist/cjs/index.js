"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
exports.default = (0, plugin_1.default)(({ matchUtilities }) => {
    matchUtilities({
        multi: (value) => {
            const escape = (str) => str.replace(/_/g, '\\_').replace(/ /g, '_');
            const delimiter = /;(?![^[]*\])/;
            const utilities = value.slice(1, -1).split(delimiter).map(escape).join(' ');
            return !utilities.trim()
                ? {}
                : {
                    [`@apply ${utilities}`]: {},
                };
        },
    });
});
