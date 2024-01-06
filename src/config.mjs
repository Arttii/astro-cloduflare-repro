export const SITE = {
  name: 'ttt',
  origin: import.meta.env.DEV ? 'http://127.0.0.1:3002' : 'http://127.0.0.1:3002',
  basePathname: '/',

  title: 'ttt ',
  description:
    'yolo ',

 
};
export const APP = {
  pathname: 'app',
  disabled: false,
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,

  blog: {
    disabled: false,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: 'posts', // empty for /some-post, value for /pathname/some-post
  },

  category: {
    disabled: false,
    pathname: 'category', // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
};
