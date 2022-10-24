

## NOTES AND REMINDERS

 [Expressjs Docs](https://expressjs.com/en/resources/middleware/cors.html "read docs").



* Enabling CORS Pre-Flight
Certain CORS requests are considered ‘complex’ and require 
an initial OPTIONS request (called the “pre-flight request”). 
An example of a ‘complex’ CORS request is one that uses 
an HTTP verb other than GET/HEAD/POST (such as DELETE) 
or that uses custom headers. To enable pre-flighting, 
you must add a new OPTIONS handler for the route 
you want to support:

 * enable pre-flight request for DELETE request
app.options('/products/:id', cors())

<pre>
<code>
    app.del('/products/:id', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
    })
    </code>
</pre>

--------------------------
