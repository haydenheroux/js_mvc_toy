# js_toy

Making a MVC (model-view-controller) Javascript engine.

### examples

A text component with a variable text content can be defined as the following:

```Javascript
let textComponent = AppendDOM(
  // This component will be placed directly into the <body> tag
  document.body,
  // The initial data ("model") of this component 
  { text: "Initial text" },
  // The view will gain access to the component's
  // model through the parameter to this function
  // Make sure this method returns an HTML element
  // that can be safely placed in the parent!!!
  model => {
    return document.createTextElement(model.text)
  }
)
// Render the component
Render()

// Wait for some event to change the text, then re-render
textComponent.Model.text = "New text"
// Re-render to update the view
Render()
```
