import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";
import PublisherRow from "./PublisherRow";

type StoryProps = ComponentProps<typeof PublisherRow> & {
  numberOfChildren: number;
};
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  component: PublisherRow,
};

export const Main: Story = {};

export default meta;
