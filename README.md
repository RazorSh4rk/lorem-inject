# lorem-inject

You ever just want to quickly throw a prototype webpage together, only to realize, you have a lot of unnecessary placeholder text in your HTML? Me neither.

Just include the file in your page:

`<script src="https://cdn.rawgit.com/RazorSh4rk/lorem-inject/72c07c26/lorem.min.js"></script>`

Or use [npm](https://www.npmjs.com/package/lorem-inject):

`npm install lorem-inject`

And you are set to replace blocks of text with these:

```html
<lorem></lorem>
<lorem />
<lorem length="1" /> <!-- or "short" for 1 paragraph -->
<lorem length="2" /> <!-- or "medium" for 2 paragraphs -->
<lorem length="3" /> <!-- or "long" for 3 paragraphs -->
<lorem length="420"><lorem> <!-- for exactly 420 characters -->

<!-- use <lorem></lorem> when it's not nested inside any DOM elements -->
```

---

## You:

![img](https://i.imgur.com/yRBnXxel.png)

## The guy she tells you not to worry about:

![img](https://i.imgur.com/qbQPuchl.png)
