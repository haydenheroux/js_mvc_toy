const DOM = []
const INVALIDATED = []

function AppendDOM(parent, initialModel, view) {
  let element = {
    Parent: parent,
    Model: initialModel,
    View: view
  }
  DOM.push(element)
  return element
}

function isInvalidated(htmlElement) {
  return INVALIDATED.indexOf(htmlElement) != -1
}

function invalidate(htmlElement) {
  if (isInvalidated(htmlElement)) return
  while (htmlElement.firstChild) {
    htmlElement.removeChild(htmlElement.firstChild)
  }
  INVALIDATED.push(htmlElement)
}

function resetInvalidated() {
  while (INVALIDATED.length > 0) INVALIDATED.pop()
}

function render() {
  resetInvalidated()
  DOM.forEach(element => { 
    invalidate(element.Parent)
    element.Parent.appendChild(element.View(element.Model))
  })
}
