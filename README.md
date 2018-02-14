# ssr-media-queries

This is a test repo to demonstrate server-side rendering while using `window.matchMedia` (using [react-media](https://github.com/ReactTraining/react-media))
to perform media queries.

## Running it

```
yarn install

yarn ssr
open localhost:3000
```

## Explanation

### Server side

The app will render on the server first, and send the resulting markup to the client. Because `window` is not available 
on the server, the media query will not be able to execute. So, the best we can do is choose a default for each use of the 
media query component. 

### Client side

Then, the client will hydrate the app, causing `window.matchMedia` to be executed. Now, the media queries are able to be 
applied, which can cause the client side markup to differ from what was rendered on the server.

### The result 

In this example, the server is "guessing" that the client is a small screen. When opening the web page in your browser on 
large screen, you will notice a brief flash of content as the markup is patched by React. You will also see a warning
in the console.  

This is a toy example, so the flash happens VERY quickly. But, you can imagine what would happen if the connection was slow
and/or the example was a large application with a lot of markup, JS, and styles.

## References

* https://reactjs.org/docs/react-dom.html#hydrate
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
