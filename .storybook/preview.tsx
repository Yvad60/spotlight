import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { wrapperClassnames } = context.parameters;
      if (!wrapperClassnames) return <Story />;

      return (
        <div className={wrapperClassnames}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
