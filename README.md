<h1 align="center">Multi for Tailwind CSS</h1>

<div align="center">

[![minified size](https://img.shields.io/bundlephobia/min/tailwindcss-multi)](https://bundlephobia.com/package/tailwindcss-multi)
[![license](https://img.shields.io/github/license/brandonmcconnell/tailwindcss-multi?label=license)](https://github.com/brandonmcconnell/tailwindcss-multi/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/tailwindcss-multi)](https://www.npmjs.com/package/tailwindcss-multi)
[![twitter](https://img.shields.io/twitter/follow/branmcconnell)](https://twitter.com/branmcconnell)

</div>

`tailwindcss-multi` is a plugin for Tailwind CSS that introduces the `multi` directive, a utility that allows you to group utility classes together. This simplifies your HTML and improves readability of your Tailwind CSS code.

### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Why use `tailwindcss-multi`](#why-use-tailwindcss-multi)
- [New syntax explanation](#new-syntax-explanation)
- [What's next?](#whats-next)

> [!IMPORTANT]
> ### New name
> The plugin was previously named `tailwindcss-multitool`, but has been renamed to `tailwindcss-multi` to simplify reference.
>
> ### New syntax due to breaking changes
> The value between the brackets in the `multi` directive must now be quoted. This is due to a breaking change introduced in Tailwind CSS v3.3.6.
>
> ```
> ❌ hover:multi-[bg-red-500;text-white]
> ✅ hover:multi-['bg-red-500;text-white']
> ```
>
> See the [New syntax explanation](#new-syntax-explanation) section for more information.

## Installation

You can install the plugin via npm:

```bash
npm install tailwindcss-multi
```

Then, include it in your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('tailwindcss-multi'),
  ]
}
```

## Usage

The plugin provides a `multi` directive, allowing you to group multiple utility classes:

```html
<div class="hover:multi-['bg-red-500;text-white']">
  When hovered, this text is white and the background is red.
</div>
```
<sup>[View this example on Tailwind Play](https://play.tailwindcss.com/CvOivRIO6w)</sup>

The directive accepts a semicolon-delimited list of utility classes and applies them to the selected element. A key feature of `tailwindcss-multi` is its support for arbitrary values, which are not limited to predefined classes in Tailwind CSS.

## Why use `tailwindcss-multi`

In some cases, you may need to apply several utilities to a long or convoluted variant or even chain of variants, which can start to look like this:

```html
<div class="hover:font-bold hover:text-[red] hover:[font-family:times]">
  When hovered, this text will appear bold, red, and in `times` font.
</div>
```
<sup>[View this example on Tailwind Play](https://play.tailwindcss.com/5FoahbwV9z)</sup>

This can be difficult to read and understand, especially when the number of utilities increases.

By employing the `multi` directive, you can group related utility classes by variant, providing clearer insights into your code's function. Below is an example that demonstrates the flexibility of the `multi` directive, demonstrating its ability to support not only multiple utilities, but partially and fully arbitrary values:

```html
<div class="hover:multi-['font-bold;text-[red];[font-family:times]']">
  When hovered, this text will appear bold, red, and in `times` font.
</div>
```
<sup>[View this example on Tailwind Play](https://play.tailwindcss.com/65uxKgzliP)</sup>

This is…

✨ GREAT for consolidating utilities under long & ideally unique variants 👏🏼

😬 NOT great for keeping the compile size small if you use it with commonly used variants 👀

## New syntax explanation

```html
<!-- ❌ before -->
<div class="hover:multi-[bg-red-500;text-white]">...</div>

<!-- ✅ after -->
<div class="hover:multi-['bg-red-500;text-white']">...</div>
```

<sup>[View a similar example on Tailwind Play](https://play.tailwindcss.com/BlZhVpTNyn)</sup>

The release of [Tailwind CSS v3.3.6](https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.3.6) (on Dec 4, 2023) introduced breaking changes that broke the original syntax of Multi for Tailwind CSS and several other plugins. 

See [tailwindcss/#13473](https://github.com/tailwindlabs/tailwindcss/issues/13473) for the discussion that led to this new syntax.

This change required a slight tweak to the syntax of the `multi` directive. Instead of `multi-[...]`, use `multi-['...']` (with a quoted value between the brackets) to pass the grouped utilities together as a string.

Versions of Tailwind CSS thereafter (v3.3.6+) are now incompatible with versions of the original unquoted syntax for this plugin (pre-v0.2.0). Update to `@latest` to ensure compatibility. This new version syntax is reverse-compatible with versions of Tailwind CSS prior to v3.3.6 as well.

Passing the joined strings together as a string allows the Tailwind CSS parser (again, in Tailwind CSS v3.3.6+) to see the value as a valid CSS value and process it as expected.

## What's next?

I think the next natural step in the evolution of Multi for Tailwind CSS is to refactor the plugin as a vite/postcss plugin, as either a supplementary or alternate version of the current Tailwind plugin.

This would allow the plugin to…
* once again use a custom syntax, without quotes
* split any joined utilities into separate classes before the Tailwind CSS parser processes them

If such a plugin could effectively split classes used with the `multi` directive, it would radically reduce the compile size of the CSS output, as the Tailwind CSS parser would only process the classes used within the `multi`, not the `multi` itself.

For example, consider the following markup:

```html
<div class="sm:hover:bg-red-500 sm:hover:text-white">...</div>
<div class="sm:hover:multi-['bg-red-500;text-white']">...</div>
<div class="sm:hover:multi-['text-white;bg-red-500']">...</div>
```

This generates all of these rules:
```css
@media (min-width: 640px) {
  .sm\:hover\:bg-red-500:hover {
    /* 2 lines */
  }
  .sm\:hover\:text-white:hover {
    /* 2 lines */
  }
  .sm\:hover\:multi-\[\'bg-red-500\;text-white\'\]:hover {
    /* 4 lines */
  }
  .sm\:hover\:multi-\[\'text-white\;bg-red-500\'\]:hover {
    /* 4 lines */
  }
}
```

As a vite plugin, that markup would be split into individual utilities like this:

```html
<div class="sm:hover:bg-red-500 sm:hover:text-white">...</div>
<div class="sm:hover:bg-red-500 sm:hover:text-white">...</div>
<div class="sm:hover:text-white sm:hover:bg-red-500">...</div>
```

This post-split example would only generates these rules:

```css
@media (min-width: 640px) {
  .sm\:hover\:bg-red-500:hover {
    /* 2 lines */
  }
  .sm\:hover\:text-white:hover {
    /* 2 lines */
  }
}
```

That's down from 22 lines of output CSS to 10 lines of code, and the same minimal output that would be generated without using the `multi` directive at all.

The strongest argument against using `multi` is output CSS bloat. This is I caution strongly against throughout this README and provide tips for avoiding. It's also something @adamwathan, the creator of Tailwind CSS, discussed at length in [this legendary thread](https://x.com/adamwathan/status/1461519820411789314) when he and his team explored the same idea from a different approach.

Notice the nicer syntax in that linked thread. Something like that *could* be possible with a vite/postcss plugin.

This…
```html
<div class="hover:multi-['text-black;dark:text-white']">...</div>
```

…could become something like this:
```html
<div class="hover:(text-black,dark:text-white)">...</div>
```

---

I hope you find `tailwindcss-multi` a valuable addition to your projects. If you have any issues or suggestions, don't hesitate to open an issue or pull request.

If you liked this, you might also like my other Tailwind CSS plugins:
* [tailwindcss-signals](https://github.com/brandonmcconnell/tailwindcss-signals): Declarative API for applying styles based on parent or ancestor state
* [tailwindcss-selector-patterns](https://github.com/brandonmcconnell/tailwindcss-selector-patterns): Dynamic CSS selector patterns
* [tailwindcss-jstool](https://github.com/brandonmcconnell/tailwindcss-jstool): Effortless build-time JS script injection
* [tailwindcss-directional-shadows](https://github.com/brandonmcconnell/tailwindcss-directional-shadows): Supercharge your shadow utilities with added directional support (includes directional `shadow-border` utilities too ✨)
* [tailwindcss-default-shades](https://github.com/brandonmcconnell/tailwindcss-default-shades): Default shades for simpler color utility classes
* [tailwind-lerp-colors](https://github.com/brandonmcconnell/tailwind-lerp-colors): Expand your color horizons and take the fuss out of generating new—or expanding existing—color palettes
