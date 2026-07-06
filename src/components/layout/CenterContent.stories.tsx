import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";
import { renderChildren } from "../../helpers/storybook";
import CenterContent from "./CenterContent";

type StoryProps = ComponentProps<typeof CenterContent> & {
  numberOfChildren: number;
};
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  component: CenterContent,
  argTypes: {
    size: {
      control: "select",
      options: ["medium", "large"],
    },
    numberOfChildren: {
      control: "number",
      type: "number",
    },
  },
  args: {
    numberOfChildren: 3,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
  render: ({ numberOfChildren, ...args }) => (
    <CenterContent {...args}>
      <div className="flex gap-5 flex-wrap">{renderChildren(numberOfChildren)}</div>
    </CenterContent>
  ),
};

export const Large: Story = {
  args: {
    size: "large",
  },
  render: ({ numberOfChildren, ...args }) => (
    <CenterContent {...args}>
      <div className="flex gap-5 flex-wrap">{renderChildren(numberOfChildren)}</div>
    </CenterContent>
  ),
};

export default meta;
