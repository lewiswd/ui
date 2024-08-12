# Slots

-   base: The main grid slots, it wraps the grid children.
-   content: The content grid slots, it wraps the grid children,

# API

| Attribute   | Type            | Description                                                         | Default |
| ----------- | --------------- | ------------------------------------------------------------------- | ------- |
| children\*  | ReactNode[]     | The children to render inside the grid.                             | -       |
| className   | string          | Allows to set custom class names for the grid slots.                | -       |
| variant     | GridVariant     | The grid appearance style.                                          | column  |
| breakpoints | GridBreakpoints | The grid appearance style for breakpoints responsive.               | -       |
| width(px)   | number          | The max-width grid for auto-fit or auto-fill value of grid variant. | 384     |

```typescript
type GridVariant = "column" | "auto-fit" | "auto-fill";
type GridBreakpoint = {
    cols?: number;
    rows?: number;
};

type GridBreakpoints = {
    sm?: GridBreakpoint;
    md?: GridBreakpoint;
    lg?: GridBreakpoint;
    xl?: GridBreakpoint;
    "2xl"?: GridBreakpoint;
};
```
