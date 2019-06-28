export default (text = "hello world 1234511!") => {
  const element = document.createElement('div')
  element.innerHTML = text

  return element
}
