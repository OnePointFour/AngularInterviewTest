## Setup

Run `npm i` to install dependencies

Run `ng serve --open` to startup the server

_tip:_ This test relies on your knowledge of Angular, but there are examples within the project that showcase some of the functionality needed to complete the tasks.

## Tasks

- The styles on the buttons are not pulling through.
- Add a new theme to the button called “alert” with a border and background colour of “rgb(208, 0, 0)”, a shadow colour of “rgba(208, 0, 0, 0.38)”, and a text and arrow colour of “rgb(255, 255, 255)”.
- Should fire a click event when enter/space is pressed while the button is focused
- Should add a css class of “button-is-focused” to the button when the button becomes focused (via tabbing), and should remove that class when the button is blurred (most be on the <button/> element).
- Add disabled state to the buttons that adds a css class “button-disabled“ to the button, grays and fades it out (“#b3b3b3”, “0.5”), and makes it **unclickable** as well as **unfocusable**.

## All files must pass “ng lint” and the project must build using “ng build —prod”
