const dom = []
const invalidated = []
const body = document.getElementsByTagName("body")[0]

function AppendDOM(parent, initialModel, view) {
  let element = {
    Parent: parent,
    Model: initialModel,
    View: view
  }
  dom.push(element)
  return element
}

function isInvalidated(element) {
  return invalidated.indexOf(element) != -1;
}

function invalidate(element) {
  if (isInvalidated(element)) return
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
  invalidated.push(element)
}

function clearInvalid() {
  while (invalidated.length > 0) invalidated.pop()
}

function render() {
  clearInvalid()
  dom.forEach(element => { 
    invalidate(element.Parent)
    element.Parent.appendChild(element.View(element.Model))
  })
}
