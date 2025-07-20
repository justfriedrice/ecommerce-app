const SHOPIFY_DOMAIN = 'raeteststore1.myshopify.com'; // Replace with your store's domain
const STOREFRONT_ACCESS_TOKEN = '01020d74d638414f23983204e8a57563'; // Paste your token here

const shopifyFetch = async (query) => {
  const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-10/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch from Shopify');
  }

  return response.json();
};

export const getProducts = async () => {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch(query);
  return response.data.products.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    price: parseFloat(node.variants.edges[0]?.node.price.amount || 0),
    image: node.images.edges[0]?.node.originalSrc || 'https://via.placeholder.com/150',
    handle: node.handle,
  }));
};
