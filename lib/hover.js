JAction.prototype.hover = function (handle1, handle2) {
    this.elems.addEventListener("mouseover", handle1)
    this.elems.addEventListener("mouseleave", handle2)
    return this
}