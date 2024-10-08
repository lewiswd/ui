/**
 * TODO Config breakpoints constants
 */
export const breakpointsPrefix = ["sm", "md", "lg", "xl", "2xl"];

/**
 * TODO Config grid constants
 */
type gridObj = Record<string | number, string>;

type gridBreakpointsObj = Record<"sm" | "md" | "lg" | "xl" | "2xl", gridObj>;

export const gridColumn: gridObj = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
};

export const gridColumnBreakpoints: gridBreakpointsObj = {
    sm: {
        1: "sm:grid-cols-1",
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-3",
        4: "sm:grid-cols-4",
        5: "sm:grid-cols-5",
        6: "sm:grid-cols-6",
        7: "sm:grid-cols-7",
        8: "sm:grid-cols-8",
        9: "sm:grid-cols-9",
        10: "sm:grid-cols-10",
        11: "sm:grid-cols-11",
        12: "sm:grid-cols-12",
    },
    md: {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6",
        7: "md:grid-cols-7",
        8: "md:grid-cols-8",
        9: "md:grid-cols-9",
        10: "md:grid-cols-10",
        11: "md:grid-cols-11",
        12: "md:grid-cols-12",
    },
    lg: {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6",
        7: "lg:grid-cols-7",
        8: "lg:grid-cols-8",
        9: "lg:grid-cols-9",
        10: "lg:grid-cols-10",
        11: "lg:grid-cols-11",
        12: "lg:grid-cols-12",
    },
    xl: {
        1: "xl:grid-cols-1",
        2: "xl:grid-cols-2",
        3: "xl:grid-cols-3",
        4: "xl:grid-cols-4",
        5: "xl:grid-cols-5",
        6: "xl:grid-cols-6",
        7: "xl:grid-cols-7",
        8: "xl:grid-cols-8",
        9: "xl:grid-cols-9",
        10: "xl:grid-cols-10",
        11: "xl:grid-cols-11",
        12: "xl:grid-cols-12",
    },
    "2xl": {
        1: "2xl:grid-cols-1",
        2: "2xl:grid-cols-2",
        3: "2xl:grid-cols-3",
        4: "2xl:grid-cols-4",
        5: "2xl:grid-cols-5",
        6: "2xl:grid-cols-6",
        7: "2xl:grid-cols-7",
        8: "2xl:grid-cols-8",
        9: "2xl:grid-cols-9",
        10: "2xl:grid-cols-10",
        11: "2xl:grid-cols-11",
        12: "2xl:grid-cols-12",
    },
};

export const gridRow: gridObj = {
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6",
    7: "grid-rows-7",
    8: "grid-rows-8",
    9: "grid-rows-9",
    10: "grid-rows-10",
    11: "grid-rows-11",
    12: "grid-rows-12",
};

export const gridRowBreakpoints: gridBreakpointsObj = {
    sm: {
        1: "sm:grid-rows-1",
        2: "sm:grid-rows-2",
        3: "sm:grid-rows-3",
        4: "sm:grid-rows-4",
        5: "sm:grid-rows-5",
        6: "sm:grid-rows-6",
        7: "sm:grid-rows-7",
        8: "sm:grid-rows-8",
        9: "sm:grid-rows-9",
        10: "sm:grid-rows-10",
        11: "sm:grid-rows-11",
        12: "sm:grid-rows-12",
    },
    md: {
        1: "md:grid-rows-1",
        2: "md:grid-rows-2",
        3: "md:grid-rows-3",
        4: "md:grid-rows-4",
        5: "md:grid-rows-5",
        6: "md:grid-rows-6",
        7: "md:grid-rows-7",
        8: "md:grid-rows-8",
        9: "md:grid-rows-9",
        10: "md:grid-rows-10",
        11: "md:grid-rows-11",
        12: "md:grid-rows-12",
    },
    lg: {
        1: "lg:grid-rows-1",
        2: "lg:grid-rows-2",
        3: "lg:grid-rows-3",
        4: "lg:grid-rows-4",
        5: "lg:grid-rows-5",
        6: "lg:grid-rows-6",
        7: "lg:grid-rows-7",
        8: "lg:grid-rows-8",
        9: "lg:grid-rows-9",
        10: "lg:grid-rows-10",
        11: "lg:grid-rows-11",
        12: "lg:grid-rows-12",
    },
    xl: {
        1: "xl:grid-rows-1",
        2: "xl:grid-rows-2",
        3: "xl:grid-rows-3",
        4: "xl:grid-rows-4",
        5: "xl:grid-rows-5",
        6: "xl:grid-rows-6",
        7: "xl:grid-rows-7",
        8: "xl:grid-rows-8",
        9: "xl:grid-rows-9",
        10: "xl:grid-rows-10",
        11: "xl:grid-rows-11",
        12: "xl:grid-rows-12",
    },
    "2xl": {
        1: "2xl:grid-rows-1",
        2: "2xl:grid-rows-2",
        3: "2xl:grid-rows-3",
        4: "2xl:grid-rows-4",
        5: "2xl:grid-rows-5",
        6: "2xl:grid-rows-6",
        7: "2xl:grid-rows-7",
        8: "2xl:grid-rows-8",
        9: "2xl:grid-rows-9",
        10: "2xl:grid-rows-10",
        11: "2xl:grid-rows-11",
        12: "2xl:grid-rows-12",
    },
};

/**
 * TODO Config gap constants
 */
type gapObj = Record<string | number, string>;
type gapBreakpointsObj = Record<"sm" | "md" | "lg" | "xl" | "2xl", gapObj>;

export const gap: gapObj = {
    0: "gap-0",
    0.5: "gap-0.5",
    1: "gap-1",
    1.5: "gap-1.5",
    2: "gap-2",
    2.5: "gap-2.5",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
    9: "gap-9",
    10: "gap-10",
    11: "gap-11",
    12: "gap-12",
    14: "gap-14",
    16: "gap-16",
    20: "gap-20",
    24: "gap-24",
    28: "gap-28",
    32: "gap-32",
    36: "gap-36",
    40: "gap-40",
    44: "gap-44",
    48: "gap-48",
    52: "gap-52",
    56: "gap-56",
    60: "gap-60",
    64: "gap-64",
    72: "gap-72",
    80: "gap-80",
    96: "gap-96",
};

export const gapBreakpoints: gapBreakpointsObj = {
    sm: {
        0: "sm:!gap-0",
        0.5: "sm:!gap-0.5",
        1: "sm:!gap-1",
        1.5: "sm:!gap-1.5",
        2: "sm:!gap-2",
        2.5: "sm:!gap-2.5",
        3: "sm:!gap-3",
        4: "sm:!gap-4",
        5: "sm:!gap-5",
        6: "sm:!gap-6",
        7: "sm:!gap-7",
        8: "sm:!gap-8",
        9: "sm:!gap-9",
        10: "sm:!gap-10",
        11: "sm:!gap-11",
        12: "sm:!gap-12",
        14: "sm:!gap-14",
        16: "sm:!gap-16",
        20: "sm:!gap-20",
        24: "sm:!gap-24",
        28: "sm:!gap-28",
        32: "sm:!gap-32",
        36: "sm:!gap-36",
        40: "sm:!gap-40",
        44: "sm:!gap-44",
        48: "sm:!gap-48",
        52: "sm:!gap-52",
        56: "sm:!gap-56",
        60: "sm:!gap-60",
        64: "sm:!gap-64",
        72: "sm:!gap-72",
        80: "sm:!gap-80",
        96: "sm:!gap-96",
    },
    md: {
        0: "md:!gap-0",
        0.5: "md:!gap-0.5",
        1: "md:!gap-1",
        1.5: "md:!gap-1.5",
        2: "md:!gap-2",
        2.5: "md:!gap-2.5",
        3: "md:!gap-3",
        4: "md:!gap-4",
        5: "md:!gap-5",
        6: "md:!gap-6",
        7: "md:!gap-7",
        8: "md:!gap-8",
        9: "md:!gap-9",
        10: "md:!gap-10",
        11: "md:!gap-11",
        12: "md:!gap-12",
        14: "md:!gap-14",
        16: "md:!gap-16",
        20: "md:!gap-20",
        24: "md:!gap-24",
        28: "md:!gap-28",
        32: "md:!gap-32",
        36: "md:!gap-36",
        40: "md:!gap-40",
        44: "md:!gap-44",
        48: "md:!gap-48",
        52: "md:!gap-52",
        56: "md:!gap-56",
        60: "md:!gap-60",
        64: "md:!gap-64",
        72: "md:!gap-72",
        80: "md:!gap-80",
        96: "md:!gap-96",
    },
    lg: {
        0: "lg:!gap-0",
        0.5: "lg:!gap-0.5",
        1: "lg:!gap-1",
        1.5: "lg:!gap-1.5",
        2: "lg:!gap-2",
        2.5: "lg:!gap-2.5",
        3: "lg:!gap-3",
        4: "lg:!gap-4",
        5: "lg:!gap-5",
        6: "lg:!gap-6",
        7: "lg:!gap-7",
        8: "lg:!gap-8",
        9: "lg:!gap-9",
        10: "lg:!gap-10",
        11: "lg:!gap-11",
        12: "lg:!gap-12",
        14: "lg:!gap-14",
        16: "lg:!gap-16",
        20: "lg:!gap-20",
        24: "lg:!gap-24",
        28: "lg:!gap-28",
        32: "lg:!gap-32",
        36: "lg:!gap-36",
        40: "lg:!gap-40",
        44: "lg:!gap-44",
        48: "lg:!gap-48",
        52: "lg:!gap-52",
        56: "lg:!gap-56",
        60: "lg:!gap-60",
        64: "lg:!gap-64",
        72: "lg:!gap-72",
        80: "lg:!gap-80",
        96: "lg:!gap-96",
    },
    xl: {
        0: "xl:!gap-0",
        0.5: "xl:!gap-0.5",
        1: "xl:!gap-1",
        1.5: "xl:!gap-1.5",
        2: "xl:!gap-2",
        2.5: "xl:!gap-2.5",
        3: "xl:!gap-3",
        4: "xl:!gap-4",
        5: "xl:!gap-5",
        6: "xl:!gap-6",
        7: "xl:!gap-7",
        8: "xl:!gap-8",
        9: "xl:!gap-9",
        10: "xl:!gap-10",
        11: "xl:!gap-11",
        12: "xl:!gap-12",
        14: "xl:!gap-14",
        16: "xl:!gap-16",
        20: "xl:!gap-20",
        24: "xl:!gap-24",
        28: "xl:!gap-28",
        32: "xl:!gap-32",
        36: "xl:!gap-36",
        40: "xl:!gap-40",
        44: "xl:!gap-44",
        48: "xl:!gap-48",
        52: "xl:!gap-52",
        56: "xl:!gap-56",
        60: "xl:!gap-60",
        64: "xl:!gap-64",
        72: "xl:!gap-72",
        80: "xl:!gap-80",
        96: "xl:!gap-96",
    },
    "2xl": {
        0: "2xl:!gap-0",
        0.5: "2xl:!gap-0.5",
        1: "2xl:!gap-1",
        1.5: "2xl:!gap-1.5",
        2: "2xl:!gap-2",
        2.5: "2xl:!gap-2.5",
        3: "2xl:!gap-3",
        4: "2xl:!gap-4",
        5: "2xl:!gap-5",
        6: "2xl:!gap-6",
        7: "2xl:!gap-7",
        8: "2xl:!gap-8",
        9: "2xl:!gap-9",
        10: "2xl:!gap-10",
        11: "2xl:!gap-11",
        12: "2xl:!gap-12",
        14: "2xl:!gap-14",
        16: "2xl:!gap-16",
        20: "2xl:!gap-20",
        24: "2xl:!gap-24",
        28: "2xl:!gap-28",
        32: "2xl:!gap-32",
        36: "2xl:!gap-36",
        40: "2xl:!gap-40",
        44: "2xl:!gap-44",
        48: "2xl:!gap-48",
        52: "2xl:!gap-52",
        56: "2xl:!gap-56",
        60: "2xl:!gap-60",
        64: "2xl:!gap-64",
        72: "2xl:!gap-72",
        80: "2xl:!gap-80",
        96: "2xl:!gap-96",
    },
};

/**
 * TODO Config flex direction constants
 */
type flexDirectionObj = Record<string, string>;
type flexDirectionBreakpointsObj = Record<
    "sm" | "md" | "lg" | "xl" | "2xl",
    gapObj
>;

export const flexDirection: flexDirectionObj = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    col: "flex-col",
    "col-reverse": "flex-col-reverse",
};

export const flexDirectionBreakpoints: flexDirectionBreakpointsObj = {
    sm: {
        row: "sm:flex-row",
        "row-reverse": "sm:flex-row-reverse",
        col: "sm:flex-col",
        "col-reverse": "sm:flex-col-reverse",
    },
    md: {
        row: "md:flex-row",
        "row-reverse": "md:flex-row-reverse",
        col: "md:flex-col",
        "col-reverse": "md:flex-col-reverse",
    },
    lg: {
        row: "lg:flex-row",
        "row-reverse": "lg:flex-row-reverse",
        col: "lg:flex-col",
        "col-reverse": "lg:flex-col-reverse",
    },
    xl: {
        row: "xl:flex-row",
        "row-reverse": "xl:flex-row-reverse",
        col: "xl:flex-col",
        "col-reverse": "xl:flex-col-reverse",
    },
    "2xl": {
        row: "2xl:flex-row",
        "row-reverse": "2xl:flex-row-reverse",
        col: "2xl:flex-col",
        "col-reverse": "2xl:flex-col-reverse",
    },
};
