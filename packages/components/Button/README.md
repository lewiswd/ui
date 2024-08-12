# Slots

-   button: The button slots, it wraps the children.

# API

| Attribute  | Type          | Description                                                  | Default   |
| ---------- | ------------- | ------------------------------------------------------------ | --------- |
| children\* | ReactNode     | The children to render inside the button.                    | -         |
| className  | string        | Allows to set custom class names for the button slots.       | -         |
| variant    | ButtonVariant | The button appearance style.                                 | contained |
| color      | LwColor       | The button color theme.                                      | -         |
| size       | LwFontSize    | The button size.                                             | base      |
| radius     | LwRadius      | The button size.                                             | md        |
| spinner    | ReactNode?    | Spinner to display when loading.                             | -         |
| icon       | ReactNode?    | The icon with content inside the button.                     | -         |
| fullWidth  | Boolean       | Whether the button should take the full width of its parent. | false     |
| isDisabled | Boolean       | Whether the button is disabled.                              | false     |
| isLoading  | Boolean       | Whether the button is loading.                               | false     |

# Events

| Attribute | Type       | Description                                                             |
| --------- | ---------- | ----------------------------------------------------------------------- |
| onClick   | () => void | The native button click event handler (Deprecated) use onPress instead. |
