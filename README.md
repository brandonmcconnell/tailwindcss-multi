<h1>MultiTool for Tailwind CSS</h1>

[![minified size](https://img.shields.io/bundlephobia/min/multitool-for-tailwindcss)](https://bundlephobia.com/package/multitool-for-tailwindcss)
[![license](https://img.shields.io/github/license/brandonmcconnell/multitool-for-tailwindcss?label=license)](https://github.com/brandonmcconnell/multitool-for-tailwindcss/blob/main/LICENSE.txt)
[![version](https://img.shields.io/npm/v/multitool-for-tailwindcss)](https://www.npmjs.com/package/multitool-for-tailwindcss)
[![twitter](https://img.shields.io/twitter/follow/branmcconnell)](https://twitter.com/branmcconnell)

`multitool-for-tailwindcss` is a plugin for Tailwind CSS that introduces the `multi` directive, a utility that allows you to group utility classes together. This simplifies your HTML and improves readability of your Tailwind CSS code.

- [Installation](#installation)
- [Usage](#usage)
- [Why use `multitool-for-tailwindcss`](#why-use-multitool-for-tailwindcss)

## Installation

You can install the plugin via npm:

```bash
npm install multitool-for-tailwindcss
```

Then, include it in your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('multitool-for-tailwindcss'),
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

The directive accepts a semicolon-delimited list of utility classes and applies them to the selected element. A key feature of `multitool-for-tailwindcss` is its support for arbitrary values, which are not limited to predefined classes in Tailwind CSS.

## Why use `multitool-for-tailwindcss`

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

I hope you find `multitool-for-tailwindcss` a valuable addition to your projects. If you have any issues or suggestions, don't hesitate to open an issue or pull request.
