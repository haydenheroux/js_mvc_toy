let text = AppendDOM(
  document.body, 
  { n: 0 }, 
  m => {
    return document.createTextNode(m.n)
  }
)

let button = AppendDOM(
  document.body, 
  { }, 
  m => {
    let btn = document.createElement("button")
    btn.innerText = "Click me!"
    btn.onclick = () => {
      text.Model.n++
      render()
    }
    return btn
  }
)

render()
