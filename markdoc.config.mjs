import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document,
      render: undefined,
    },
    link: {
      ...nodes.link,
      render: component("./src/components/Link.astro"),
    },
    fence: {
      ...nodes.fence,
      attributes: {
        content: {
          type: String,
        },
        language: {
          type: String,
        },
      },
      render: component("./src/components/Code.astro"),
      transform: undefined,
    },
  },
});
