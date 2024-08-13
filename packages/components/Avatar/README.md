# Slots

-   base: Avatar wrapper, it includes styles for focus ring, position, and general appearance.
-   img: Image element within the avatar, it includes styles for opacity transition and size.
-   fallback: Fallback content when the image fails to load or is not provided, it includes styles for centering the content.
-   name: Initials displayed when the image is not provided or fails to load, it includes styles for font, text alignment, and inheritance.

# API

| Attribute     | Type                                                 | Description                                                          | Default |
| ------------- | ---------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| src           | string                                               | The source URL of the image to be displayed.                         | -       |
| color         | LwColor                                              | Sets the avatar background color.                                    | gray    |
| radius        | LwRadius                                             | Sets the avatar border radius.                                       | full    |
| size?         | number                                               | Sets the avatar size.                                                | 40      |
| name?         | string                                               | Displays the initials if the image is not provided or fails to load. | -       |
| fallback?     | ReactNode                                            | A custom fallback component to display when the image fails to load. | -       |
| isBorder?     | Boolean                                              | If true, adds a border around the avatar.                            | false   |
| isDisabled?   | Boolean                                              | If true, disables the avatar and applies a disabled styling.         | false   |
| showFallback? | Boolean                                              | If true, disables the avatar and applies a disabled styling.         | -       |
| classNames?   | Record<"base"｜ "img"｜ "fallback"｜ "name", string> | Allows to set custom class names for the avatar slots.               | -       |
