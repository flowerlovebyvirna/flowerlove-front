exports.createPages = async ({ graphql, actions }) => {
  const singleBlogTemplate = require.resolve("./src/templates/single-blog.js")
  const blogListTemplate = require.resolve("./src/templates/blog-list.js")
  const productListTemplate = require.resolve("./src/templates/product-list.js")
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10
  const singleProductTemplate = require.resolve(
    "./src/templates/single-product.js"
  )
  const singleProductCategoryTemplate = require.resolve(
    "./src/templates/single-product-category.js"
  )
  const singleBlogCategory = require.resolve(
    "./src/templates/single-category.js"
  )

  // const allBlogCategory = require.resolve("./src/templates/category-list.js")
  const productsPerPage = 100
  const catPostsPerPage = 100
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityProduct {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityBlogCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityProductCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors

  const blogs = result.data.allSanityBlog.nodes
  const products = result.data.allSanityProduct.nodes
  const blogCategories = result.data.allSanityBlogCategory.nodes
  const productCategories = result.data.allSanityProductCategory.nodes

  blogs.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    })
  })

  products.forEach(product => {
    createPage({
      path: `/products/${product.slug.current}`,
      component: singleProductTemplate,
      context: { id: product.id },
    })
  })

  blogCategories.forEach(blogCat => {
    createPage({
      path: `/blogs/${blogCat.slug.current}`,
      component: singleBlogCategory,
      context: { id: blogCat.id },
    })
  })

  productCategories.forEach(category => {
    createPage({
      path: `/products/${category.slug.current}`,
      component: singleProductCategoryTemplate,
      context: { id: category.id },
    })
  })

  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage)
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/blogs" : `/blogs/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    })
  })

  const totalProductListPages = Math.ceil(products.length / productsPerPage)
  Array.from({ length: totalProductListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/products" : `/products/${index + 1}`,
      component: productListTemplate,
      context: {
        limit: productsPerPage,
        offset: index * productsPerPage,
        numberOfPages: totalProductListPages,
        currentPage: index + 1,
        productsLength: products.length,
      },
    })
  })
}
