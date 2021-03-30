const landing = [
	{
		"api/categories" : [
			{
				method: "GET",
				route: "/api/categories",
				description:
					"find all categories, be sure to include its associated Products",
				img_url: ""
			},
			{
				method: "GET",
				route: "/api/categories/:id",
				description:
					"find one category by its id value, be sure to include its associated Products",
				img_url: ""
			},
			{
				method: "POST",
				route: "/api/categories/",
				description: "create a new category",
				img_url: ""
			},
			{
				method: "PUT",
				route: "/api/categories/:id",
				description: "update a category by its id value",
				img_url: ""
			},
			{
				method: "DELETE",
				route: "/api/categories/:id",
				description: "delete a category by its id value",
				img_url: ""
			}
		]
	},
	{
		"api/tags": [
			{
				method: "GET",
				route: "/api/tags/",
				description:
					"find all tags be sure to include its associated Product data",
				img_url: ""
			},
			{
				method: "GET",
				route: "/api/tags/:id",
				description:
					"find a single tag by its id be sure to include its associated Product data",
				img_url: ""
			},
			{
				method: "POST",
				route: "/api/tags/",
				description: "create a new tag",
				img_url: ""
			},
			{
				method: "PUT",
				route: "/api/tags/:id",
				description: "update a tags name by its id value",
				img_url: ""
			},
			{
				method: "DELETE",
				route: "/api/tags/:id",
				description: " delete on tag by its id value",
				img_url: ""
			}
		]
	},
	{
		"api/products": [
			{
				method: "GET",
				route: "/api/products/",
				description:
					"find all products,be sure to include its associated Category and Tag data",
				img_url: ""
			},
			{
				method: "GET",
				route: "/api/products/:id",
				description:
					"find a single product by its id, be sure to include its associated Category and Tag data",
				img_url: ""
			},
			{
				method: "POST",
				route: "/api/products/",
				description: "create new product",
				img_url: ""
			},
			{
				method: "PUT",
				route: "/api/products/:id",
				description: "update product",
				img_url: ""
			},
			{
				method: "DELETE",
				route: "/api/products/:id",
				description: "delete one product by its id value",
				img_url: ""
			}
		]
	}
];

module.exports = landing;
