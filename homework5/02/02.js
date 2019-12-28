function createTag (tagName) {
    return document.createElement(tagName)
}
function addTag (tagName) {
    document.body.append(createTag(tagName))
}