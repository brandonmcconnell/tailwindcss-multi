<h1>MultiTool for Tailwind CSS</h1>

![minified size](https://img.shields.io/bundlephobia/min/multitool-for-tailwindcss)
![version](https://img.shields.io/npm/v/multitool-for-tailwindcss)
![license](https://img.shields.io/github/license/brandonmcconnell/multitool-for-tailwindcss)
![twitter](https://img.shields.io/twitter/follow/branmcconnell)

`multitool-for-tailwindcss` is a plugin for Tailwind CSS that introduces the `multi` directive, a utility that allows you to group utility classes together. This simplifies your HTML and improves readability of your Tailwind CSS code.

- [Installation](#installation)
- [Usage](#usage)
- [Why use `multitool-for-tailwindcss`](#why-use-multitool-for-tailwindcss)
- [Examples](#examples)

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
<div class="multi-[bg-red-500;text-white]">
  This text is white and the background is red.
</div>
```

The directive accepts a semicolon-delimited list of utility classes and applies them to the selected element. A key feature of `multitool-for-tailwindcss` is its support for arbitrary values, which are not limited to predefined classes in Tailwind CSS.

## Why use `multitool-for-tailwindcss`

As Tailwind CSS projects scale, HTML can become crowded with long sequences of utility classes. `multitool-for-tailwindcss` is designed to manage this complexity, enhancing code readability and maintainability. 

By employing the `multi` directive, you can group related utility classes, providing clearer insights into your code's function.

## Examples

Below is an example that demonstrates the flexibility of the `multi` directive, demonstrating its ability to support arbitrary values:

```html
<div class="hover:multi-[font-bold;text-[red];[font-family:'Open_Sans',sans-serif]]">
  When hovered, this text will appear bold, red, and in Open Sans font.
</div>
```

---

I hope you find `multitool-for-tailwindcss` a valuable addition to your projects. If you have any issues or suggestions, don't hesitate to open an issue or pull request.
