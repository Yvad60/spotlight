import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";
import NewsCard from "./NewsCard";

type StoryProps = ComponentProps<typeof NewsCard> & {
  numberOfChildren: number;
};
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  component: NewsCard,
};

export const Main: Story = {
  parameters: {
    wrapperClassnames: "max-w-[440px]",
  },
};

export default meta;
