import type { Meta, StoryObj } from "@storybook/react";

import Flex from "./Flex";

const meta: Meta<typeof Flex> = {
    title: "Layouts/Flex",
    component: Flex,
    parameters: {
        // layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: [
            <div className="border border-gray-500 p-2">1</div>,
            <div className="border border-gray-500 p-2">2</div>,
            <div className="border border-gray-500 p-2">3</div>,
            <div className="border border-gray-500 p-2">4</div>,
        ],
    },
};

export const RowReverse: Story = {
    args: {
        children: [
            <div className="border border-gray-500 p-2">1</div>,
            <div className="border border-gray-500 p-2">2</div>,
            <div className="border border-gray-500 p-2">3</div>,
            <div className="border border-gray-500 p-2">4</div>,
        ],
        direction: "row-reverse",
    },
};

export const Col: Story = {
    args: {
        children: [
            <div className="border border-gray-500 p-2">1</div>,
            <div className="border border-gray-500 p-2">2</div>,
            <div className="border border-gray-500 p-2">3</div>,
            <div className="border border-gray-500 p-2">4</div>,
        ],
        direction: "col",
    },
};

export const ColReverse: Story = {
    args: {
        children: [
            <div className="border border-gray-500 p-2">1</div>,
            <div className="border border-gray-500 p-2">2</div>,
            <div className="border border-gray-500 p-2">3</div>,
            <div className="border border-gray-500 p-2">4</div>,
        ],
        direction: "col-reverse",
    },
};

export const Breakpoint: Story = {
    args: {
        children: [
            <div className="border border-gray-500 p-2">1</div>,
            <div className="border border-gray-500 p-2">2</div>,
            <div className="border border-gray-500 p-2">3</div>,
            <div className="border border-gray-500 p-2">4</div>,
        ],
        breakpoints: {
            sm: {
                direction: "col-reverse",
                gap: 5,
            },
            md: {
                direction: "col",
                gap: 6,
            },
            lg: {
                direction: "row",
                gap: 7,
            },
            xl: {
                direction: "row-reverse",
                gap: 8,
            },
        },
    },
};
