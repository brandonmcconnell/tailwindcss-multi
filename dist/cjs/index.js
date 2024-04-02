"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
exports.default = (0, plugin_1.default)(({ matchUtilities }) => {
    matchUtilities({
        multi: (value) => {
            const escape = (str) => {
                return str.replace(/_/g, '\\_').replace(/ /g, '_');
            };
            const utilities = value.split(';').map(escape).join(' ');
            return {
                [`@apply ${utilities}`]: {},
            };
        },
    });
});
