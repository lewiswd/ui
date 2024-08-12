# Slots

-   base: The main flex slots, it wraps the flex children.
-   content: The content flex slots, it wraps the flex children,

# API

| Attribute   | Type            | Description                                                             | Default |
| ----------- | --------------- | ----------------------------------------------------------------------- | ------- |
| children\*  | ReactNode[]     | The children to render inside the flex.                                 | -       |
| className   | string          | Allows to set custom class names for the flex slots.                    | -       |
| gap         | number          | the size of the gap between the rows and between the columns in flexbox | 16      |
| breakpoints | FlexBreakpoints | The flex appearance style for breakpoints responsive.                   | -       |

```typescript
type FlexDirection = "row" | "row-reverse" | "col" | "col-reverse";

type FlexBreakpoint = {
    direction?: FlexDirection;
    gap?: LwGap;
};

type FlexBreakpoints = {
    sm?: FlexBreakpoint;
    md?: FlexBreakpoint;
    lg?: FlexBreakpoint;
    xl?: FlexBreakpoint;
    "2xl"?: FlexBreakpoint;
};
```
