function createToggleableInput(parent, placeholder) {
  return AppendDOM(
    parent,
    { text: placeholder, isFocused: false },
    m => {
      if (m.isFocused) {
        let input = document.createElement("INPUT")
        input.value = m.text
        input.onblur = () => {
          m.isFocused = false
          Render()
        }
        input.onchange = () => {
          m.text = input.value
        }
        return input
      } else {
        let text = document.createElement("P")
        text.innerText = m.text
        text.onclick = () => {
          m.isFocused = true
          Render()
        }
        return text
      }
    }
  )
}

let text_one = createToggleableInput(document.body, "Input #1")
let text_two = createToggleableInput(document.body, "Input #2")
Render()
