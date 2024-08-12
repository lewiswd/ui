import type { Meta, StoryObj } from "@storybook/react";

import Grid from "./Grid";

const meta: Meta<typeof Grid> = {
    title: "Layouts/Grid",
    component: Grid,
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
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>1</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>2</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>3</p>
            </div>,
        ],
    },
};

export const Column: Story = {
    args: {
        children: [
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>1</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>2</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>3</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>4</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>5</p>
            </div>,
        ],
        breakpoints: {
            md: {
                cols: 2,
            },
            lg: {
                cols: 3,
            },
        },
    },
};

export const AutoFit: Story = {
    args: {
        children: [
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>1</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>2</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>3</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>4</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>5</p>
            </div>,
        ],
        variant: "auto-fit",
        width: 150,
    },
};

export const AutoFill: Story = {
    args: {
        children: [
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>1</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>2</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>3</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>4</p>
            </div>,
            <div className="min-h-9 flex justify-center items-center border border-gray-500">
                <p>5</p>
            </div>,
        ],
        variant: "auto-fill",
        width: 150,
    },
};
