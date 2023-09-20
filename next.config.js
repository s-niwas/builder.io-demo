const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
// const nextConfig = withBuilderDevTools({});
module.exports={
    env :{
        SHOPIFY_STOREFRONT_TOKEN:process.env.SHOPIFY_STOREFRONT_API_TOKEN,
        SHOPIFY_STORE_DOMAIN:process.env.SHOPIFY_STORE_DOMAIN
    },
    images:{
        domain:['cdn.shopify.com']
    }
}
