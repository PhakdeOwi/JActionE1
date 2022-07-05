JAction.prototype.text = function (text) {
    if (!text || typeof text !== "string") {
        return this.elems.innerText
    } else {
        this.elems.innerText = text
    }

    return this

}