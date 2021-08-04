# Filtering with mongoose

Two approaches we could take with this app

`/categories/dairy`
 
`/products?category=dairy`

In both examples, the result we are looking for is all products that match the category. 

**Query strings** are traditionally used for *filtering* or *searching* a subset of information. 
Whereas `/categories/dairy` which potentially elevates `categories` to its own resource, or at least its own path, it might be better to use if `categories` had some features or to view more categories or create new categories on the fly in the application. 

You can't really go wrong as long as you're consistent with your approach. 