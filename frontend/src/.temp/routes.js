const c1 = () => import(/* webpackChunkName: "page--src--templates--article-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/src/templates/Article.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/src/templates/Category.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--servicii-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/src/pages/Servicii.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--portofoliu-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/src/pages/Portofoliu.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--despre-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/src/pages/Despre.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/src/pages/Contact.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/src/pages/Blog.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/node_modules/gridsome/app/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/andreicioc/proiecte/2/strapi-gridsome-blog/frontend/src/pages/Index.vue")

export default [
  {
    path: "/article/what-s-inside-a-black-hole/",
    component: c1
  },
  {
    path: "/article/we-love-pizza/",
    component: c1
  },
  {
    path: "/article/the-internet-s-own-boy/",
    component: c1
  },
  {
    path: "/article/this-shrimp-is-awesome/",
    component: c1
  },
  {
    path: "/category/tech/",
    component: c2
  },
  {
    path: "/category/story/",
    component: c2
  },
  {
    path: "/category/nature/",
    component: c2
  },
  {
    path: "/category/news/",
    component: c2
  },
  {
    path: "/article/a-bug-is-becoming-a-meme-on-the-internet-1/",
    component: c1
  },
  {
    path: "/article/a-bug-is-becoming-a-meme-on-the-internet-2/",
    component: c1
  },
  {
    path: "/article/a-bug-is-becoming-a-meme-on-the-internet-3/",
    component: c1
  },
  {
    path: "/article/a-bug-is-becoming-a-meme-on-the-internet-4/",
    component: c1
  },
  {
    path: "/article/a-bug-is-becoming-a-meme-on-the-internet/",
    component: c1
  },
  {
    path: "/category/food/",
    component: c2
  },
  {
    path: "/article/beautiful-picture/",
    component: c1
  },
  {
    path: "/servicii/",
    component: c3
  },
  {
    path: "/portofoliu/",
    component: c4
  },
  {
    path: "/despre/",
    component: c5
  },
  {
    path: "/contact/",
    component: c6
  },
  {
    path: "/blog/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
