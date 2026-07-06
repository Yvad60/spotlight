import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";
import FeaturedNewsCard from "./FeaturedNewsCard";

type StoryProps = ComponentProps<typeof FeaturedNewsCard> & {
  numberOfChildren: number;
};
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  parameters: {
    wrapperClassnames: "relative h-[600px] w-[800px]",
  },
  component: FeaturedNewsCard,
};

export const Big: Story = {
  args: {
    variant: "big",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
  },
};

export const Wide: Story = {
  args: {
    variant: "wide",
  },
};

export default meta;
