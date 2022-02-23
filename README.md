# Marketchino API:
it is a REST API for an e-commerce or shopping website (clone copy of [Marketchino.com](https://www.marketchino.com/).)
    
#    Resources
There are 2 main resources:

* products : http://localhost:8000/api/products/
* categories : http://localhost:8000/api/category/


# All available routes

## Products
```
fields:{
    name: String,
    nameAr: String,
    description: String,
    descriptionAr: String,
    price:Number,
    additionalDes: {
            Barcode: String,
            ShortDescription: String,
            ProjectCode: String,
            Material: String,
            Dimension: String,
            ShopByColor: String,
            Weight: Number
    },
    additionalDesAr: {
            Barcode: String,
            ShortDescription: String,
            ProjectCode: String,
            Material: String,
            Dimension: String,
            ShopByColor: String,
            Weight: Number
    },
    countInStock:Number,
    images:[String],
    category:String,
    subCategories:String,
    rating: Number
    }
```

### Get:
* / (get first 5 products)
    
* /?limit=5&skip=2 (limit / skip return results)
*  /categoryName/?sub=subCategoryName &limit=5 &skip=2 (get products by category and *subCategory Name if needed* with limit / skip option)
### Post:
* /add

### Put:

* /1 (update specific product based on id)

### Delete:

* /1 (delete specific product based on id)

## Categories
```
fields:{
    name: String,
    nameAr: String,
    subCategories: [
        {
            name: { type: String },
            nameAr: { type: String },
            image: { type: String }
        }
    ]
}
```


### Get:
* / (get all categories)
    
* /?limit=5&skip=2 (limit / skip return results)

### Post:
* /add

### Put:

* /1 (update specific category based on id)

### Delete:

* /1 (delete specific category based on id)
