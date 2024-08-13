# Slot

-   **base**: Checkbox wrapper, it handles alignment, placement, and general appearance.
-   **wrapper**: An inner container that includes styles for relative positioning, flex properties, overflow handling and managing hover and selected states.
-   **wrapper**: Icon within the checkbox, controlling size, visibility, and changes when checked.
-   **label**: The text associated with the checkbox.

# Data Attributes

-   **data-selected**: When the checkbox is checked. Based on isSelected prop.
-   **data-disabled**: When the checkbox is disabled. Based on isDisabled prop.

# API

| Attribute   | Type                                                  | Description                                                           | Default |
| ----------- | ----------------------------------------------------- | --------------------------------------------------------------------- | ------- |
| children    | ReactNode                                             | The content of the checkbox                                           | -       |
| icon?       | ReactNode                                             | The icon to be displayed when the checkbox is checked.                | -       |
| value?      | string                                                | The value of the checkbox element, used when submitting an HTML form. | -       |
| color?      | LwColor                                               | The color of the checkbox.                                            | gray    |
| size?       | LwFontSize                                            | The size of the checkbox.                                             | base    |
| radius?     | LwFontSize                                            | The radius of the checkbox.                                           | md      |
| isSelected? | Boolean                                               | Whether the element should be selected (controlled).                  | -       |
| isDisabled? | Boolean                                               | Whether the checkbox is disabled.                                     | -       |
| classNames? | Record<"base"｜ "wrapper"｜ "icon"｜ "label", string> | Allows to set custom class names for the checkbox slots               | -       |

# Events

| Attribute | Type                    | Description                                                        |
| --------- | ----------------------- | ------------------------------------------------------------------ |
| onPress   | (CheckboxEvent) => void | Handler that is called when the element's selection state changes. |

```javascript
type CheckboxEvent = {
    isSelected: boolean,
    value: string | undefined,
}
```
