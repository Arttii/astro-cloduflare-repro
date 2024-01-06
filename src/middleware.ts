import { defineMiddleware } from 'astro/middleware';
 

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {

 
	console.log(import.meta.env)
  if (context.request.url.includes('.xml')) {
    const response = await next();
    return new Response(response.body, {
      status: 200,
      headers: response.headers,
    });
  }

  if (context.request.url.includes('/logout')) {
   
    return next();
    
  }

  if (
    context.request.url.includes('/app') ||
    context.request.url.includes('/settings') ||
    context.request.url.includes('/upload') ||
    context.request.url.includes('/login')
  ) {

		return context.redirect('/api/auth/signin');

  
  }

  return next();
});
