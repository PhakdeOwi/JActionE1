JAction.prototype.html = function (html) {
    if (!html) {
        return this.elems.innerHTML
    } else {
        this.elems.innerHTML = html
    }
    return this
    // return this.elems.innerHTML
}