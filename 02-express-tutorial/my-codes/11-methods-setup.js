const readme = `
In the app.js, we have the router, which actually combines all the common path into a single route
And once, it get into that single route, it finds it's path and handled by express

And also, instead of putting all the req/res handler functions into routes
we can put them in a seperate file and import them into the routes
In that way, we can keep the routes file cleaner and organized

And also, whichever get/post or put/delete having a same route,
we can chain them in a single function call like this ->  Router.route("path").get(<getMethodHandler>).post(<postMethodHandler>)
`;