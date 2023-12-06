import { buildCollection, buildProperty } from "firecms";

export const showcaseCollection = buildCollection({
  path: "showcase",
  customId: false,
  icon: "ShowChart",
  name: "Showcase",
  hideIdFromForm: true,
  properties: {
    featuredProducts: buildProperty({
      dataType: "array",
      name: "Featured products",
      of: {
        name: "Featured product",
        dataType: "map",
        properties: {
          size: buildProperty({
            dataType: "string",
            name: "Size",
            defaultValue: "smallVertical",
            enumValues: {
              largeVertical: { id: "largeVertical", label: "Large vertical" },
              smallVertical: { id: "smallVertical", label: "Small vertical" },
            },
          }),
          title: {
            name: "Product",
            dataType: "string",
          },
        },
      },
    }),
  },
});
