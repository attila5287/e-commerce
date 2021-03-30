# ![ecomm](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/ecommerce.png  "ecomm") E-Commerce Back End 
```
> amazon-like e-commerce website's backend only 
> RESTful CRUD: Perform create, read, update, and delete operations
```

![4] | `eCommSQL`|
|---|---|
 ![h](https://raw.githubusercontent.com/attila5287/img_readme/main/all/h.png  "ecomm") | [ecommsql.herokuapp.com](http://ecommsql.herokuapp.com/)


|![3]|Task|Description
|---|---|---
![1]| `Product` |belongs to `Category`, and `Category` has many `Product` | models, as a category can have multiple products but a product can only belong to one category.
![1]|`Product` |Belongs to many `Tag` models, |
![1]|`Tag` | belongs to many `Product` models. 
![1]|`ProductTag` |products have multiple tags and tags have many products |
![1]|Config DB| Local: `MySQL Workbench`, Deployment: `Jaws DB`
![1]|Seed the DB | run `npm run seed` to seed data to your database so that you can test your routes.
![1]|Sync on Start | `server.js` to sync the Sequelize models to the MySQL database on 


[0]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/checkbox0.png
[1]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/checkbox1.png
[3]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/dbsm.png
[4]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/js.png

| Method | URL | Description | Image |
| --- | --- | --- | --- |
"GET"|/api/categories|find all categories, be sure to include its associated Products|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/cat_get_all.JPG)|
"GET"|/api/categories/:id|find one category by its id value, be sure to include its associated Products|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/cat_get_one.JPG)|
"POST"|/api/categories/|create a new category|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/cat_post.JPG)|
"PUT"|/api/categories/:id|update a category by its id value|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/cat_put.JPG)|
"DELETE"|/api/categories/:id|delete a category by its id value|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/cat_delete.JPG)}]|
  "GET"|/api/tags/|find all tags be sure to include its associated Product data|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/tag_get_all.JPG)|
"GET"|/api/tags/:id|find a single tag by its id be sure to include its associated Product data|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/tag_get_one.JPG)|
"POST"|/api/tags/|create a new tag|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/tag_post.JPG)|
"PUT"|/api/tags/:id|update a tags name by its id value|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/tag_put.JPG)|
"DELETE"|/api/tags/:id| delete on tag by its id value|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/tag_delete.JPG)}|
  "GET"|/api/products/|find all products,be sure to include its associated Category and Tag data|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/pro_get_all.JPG)
|GET"|/api/products/:id|find a single product by its id, be sure to include its associated Category and Tag data|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/pro_get_one.JPG)
|POST"|/api/products/|create new product|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/pro_post.JPG)|
"PUT"|/api/products/:id|update product|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/pro_put.JPG)|
 "DELETE"|/api/products/:id|delete one product by its id value|![img](https://raw.githubusercontent.com/attila5287/e-commerce/main/Assets/pro_delete.JPG)}


| ![dev]( https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg "dev-icon") | About Developer | 
| -------------   | -------------: |
| Repos | [github.com/attila5287 ](https://github.com/attila5287/) |
| Profile | [ attila5287.github.io ](https:///attila5287.github.io/) |
| Email    |  atiturkoz@hotmail.com | 


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

