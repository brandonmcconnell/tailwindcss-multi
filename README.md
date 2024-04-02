<h1 align="center">MultiTool for Tailwind CSS</h1>

<div align="center">

[![minified size](https://img.shields.io/bundlephobia/min/tailwindcss-multitool)](https://bundlephobia.com/package/tailwindcss-multitool)
[![license](https://img.shields.io/github/license/brandonmcconnell/tailwindcss-multitool?label=license)](https://github.com/brandonmcconnell/tailwindcss-multitool/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/tailwindcss-multitool)](https://www.npmjs.com/package/tailwindcss-multitool)
[![twitter](https://img.shields.io/twitter/follow/branmcconnell)](https://twitter.com/branmcconnell)

</div>

`tailwindcss-multitool` is a plugin for Tailwind CSS that introduces the `multi` directive, a utility that allows you to group utility classes together. This simplifies your HTML and improves readability of your Tailwind CSS code.

- [Installation](#installation)
- [Usage](#usage)
- [Why use `tailwindcss-multitool`](#why-use-tailwindcss-multitool)

## Installation

You can install the plugin via npm:

```bash
npm install tailwindcss-multitool
```

Then, include it in your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('tailwindcss-multitool'),
  ]
}
```

## Usage

The plugin provides a `multi` directive, allowing you to group multiple utility classes:

```html
<div class="hover:multi-[bg-red-500;text-white]">
  This text is white and the background is red.
</div>
```

The directive accepts a semicolon-delimited list of utility classes and applies them to the selected element. A key feature of `tailwindcss-multitool` is its support for arbitrary values, which are not limited to predefined classes in Tailwind CSS.

## Why use `tailwindcss-multitool`

In some cases, you may need to apply several utilities to a long or convoluted variant or even chain of variants, which can start tio look like this:

```html
<div class="sm:[&>div]:hover:active:font-bold sm:[&>div]:hover:active:text-[red] sm:[&>div]:hover:active:font-family:['Open_Sans',sans-serif]">
  When hovered, this text will appear bold, red, and in Open Sans font.
</div>
```

This can be difficult to read and understand, especially when the number of utilities increases.

By employing the `multi` directive, you can group related utility classes by variant, providing clearer insights into your code's function. Below is an example that demonstrates the flexibility of the `multi` directive, demonstrating its ability to support not only multiple utilities, but partially and fully arbitrary values:

```html
<div class="sm:[&>div]:hover:active:multi-[font-bold;text-[red];[font-family:'Open_Sans',sans-serif]]">
  When hovered, this text will appear bold, red, and in Open Sans font.
</div>
```

This is…

✨ GREAT for consolidating utilities under long & ideally unique variants 👏🏼

😬 NOT great for keeping the compile size small if you use it with commonly used variants 👀

---

I hope you find `tailwindcss-multitool` a valuable addition to your projects. If you have any issues or suggestions, don't hesitate to open an issue or pull request.

If you liked this, you might also like my other Tailwind CSS plugins:
* [tailwindcss-signals](https://github.com/brandonmcconnell/tailwindcss-signals): Declarative API for applying styles based on parent or ancestor state
* [tailwindcss-selector-patterns](https://github.com/brandonmcconnell/tailwindcss-selector-patterns): Dynamic CSS selector patterns
* [tailwindcss-jstool](https://github.com/brandonmcconnell/tailwindcss-jstool): Effortless build-time JS script injection
* [tailwindcss-directional-shadows](https://github.com/brandonmcconnell/tailwindcss-directional-shadows): Supercharge your shadow utilities with added directional support (includes directional `shadow-border` utilities too ✨)
* [tailwindcss-default-shades](https://github.com/brandonmcconnell/tailwindcss-default-shades): Default shades for simpler color utility classes
* [tailwind-lerp-colors](https://github.com/brandonmcconnell/tailwind-lerp-colors): Expand your color horizons and take the fuss out of genertaing new—or expanding existing—color palettes
