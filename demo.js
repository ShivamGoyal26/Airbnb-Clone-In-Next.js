const demo = [
  {
    id: "gid://shopify/Metaobject/4201185593",
    handle:
      "https-cdn-shopify-com-s-files-1-0776-5275-4745-files-4ban-jpg-v-1685946739",
    type: "banners",
    fields: [
      {
        key: "image",
        value:
          "https://cdn.shopify.com/s/files/1/0776/5275/4745/files/4ban.jpg?v=1685946739",
        type: "single_line_text_field",
      },
      {
        key: "offer_products",
        value: '["gid://shopify/Product/8349521248569"]',
        type: "list.product_reference",
      },
    ],
    displayName:
      "https://cdn.shopify.com/s/files/1/0776/5275/4745/files/4ban.jpg?v=1685946739",
    definition: {
      id: "gid://shopify/MetaobjectDefinition/362479929",
      name: "banners",
      type: "banners",
      metaobjectsCount: 2,
      description: null,
      displayNameKey: "image",
    },
  },
  {
    id: "gid://shopify/Metaobject/4201218361",
    handle:
      "https-cdn-shopify-com-s-files-1-0776-5275-4745-files-2ban-webp-v-1685946762",
    type: "banners",
    fields: [
      {
        key: "image",
        value:
          "https://cdn.shopify.com/s/files/1/0776/5275/4745/files/2ban.webp?v=1685946762",
        type: "single_line_text_field",
      },
      {
        key: "offer_products",
        value: '["gid://shopify/Product/8349521248569"]',
        type: "list.product_reference",
      },
    ],
    displayName:
      "https://cdn.shopify.com/s/files/1/0776/5275/4745/files/2ban.webp?v=1685946762",
    definition: {
      id: "gid://shopify/MetaobjectDefinition/362479929",
      name: "banners",
      type: "banners",
      metaobjectsCount: 2,
      description: null,
      displayNameKey: "image",
    },
  },
];

console.log(
  demo
    .map((item) => {
      let arr = item.fields.map((item) => {
        return {
          value: item.value,
        };
      });

      return arr;
    })
    .flat()
);
