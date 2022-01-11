# How to setup

> **Note:** Require node version equal or above to 12.x

Install node packages
```bash
npm install
```
Then active hot-reloading dev server
```
npm run dev
```

# Dev notes:

- **How can i add a new page?**<br>
Go to `vite.config.js` and add a new input in `rolloupOptions`, for example:
```js
rollupOptions: {
    input: {
        main: resolve(__dirname, "index.html"),
        kahkow: resolve(__dirname, "kahkow.html"),
        cancercare: resolve(__dirname, "cancercare.html"),
        alphaexpress: resolve(__dirname, "alpha-express.html"),
        
        // EXAMPLE PAGE:
        pageName: resolve(__dirname, "pageName.html"
    }
}
```

- **How can i build for production?**<br>
Just use this command `npm run build` in the console. This will make you a folder with your statics.


- **How can i href to a new page?**
Simply add the path of your `.html` file without the extension, for example:
```html
<a href="/kahkow">
    <button class="font-medium whitespace-nowrap">
        See case study
    </button>
</a>

<!-- EXAMPLE HREF -->
<a href="/pages/about">
  Click here to see info about the company
</a>
```
