## Setup

Run `npm i` to install dependencies

Run `ng serve --open` to startup the server

_tip:_ This test relies on your knowledge of Angular, but there are examples within the project that showcase some of the functionality needed to complete the tasks.

## Tasks

- The styles on the buttons are not pulling through. You need to figure out why and fix it.
- Add a new theme to the button called “alert” with a border and background colour of “rgb(208, 0, 0)”, a shadow colour of “rgba(208, 0, 0, 0.38)”, and a text and arrow colour of “rgb(255, 255, 255)”.
- Add a css class of “button-is-focused” to the button when the button becomes focused (via tabbing). This should remove the class when the button is blurred (must be on the <button/> element).
- When enter/space key is pressed while the button is focused, it should fire a native click event.
- Add a disabled state to the buttons (css class “button-disabled“), it should turn gray (“#b3b3b3”) and change opacity (“0.5”), and makes it **unclickable** as well as **unfocusable** (via tabbing).

---

- All files must pass `ng lint` and the project must build using `ng build —prod`
- No external libraries are to be used
- Try to not overwrite/rewrite functionality that already exist in the project. Reuse or extend the code that has been provided (where you can)
