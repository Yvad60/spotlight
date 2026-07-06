import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/store";
import News from "./News";

const mockArticle: Article = {
  author: "John Doe",
  content: "Test content",
  id: "1234",
  title: "The best article ever",
  description: "Descro[t",
  publishedAt: "",
  source: {
    id: "h",
    name: "dad",
  },
  url: "adasf",
  urlToImage: "",
};

type StoryProps = ComponentProps<typeof News>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  parameters: {
    wrapperClassnames: "w-[400px]",
  },
  args: {
    article: mockArticle,
  },
  render: (args) => (
    <Provider store={store}>
      <BrowserRouter>
        <News {...args} />
      </BrowserRouter>
    </Provider>
  ),
};

export const Main: Story = {};

export default meta;
