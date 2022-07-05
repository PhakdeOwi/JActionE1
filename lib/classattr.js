JAction.prototype.addClass = function (classname) {
    if (!classname || typeof classname !== "string") return;
    this.elems.classList.add(classname)
    return this
}

JAction.prototype.removeClass = function (cname) {
    if (!cname || typeof cname !== "string") return;

    this.elems.classList.remove(cname)

    return this
}

JAction.prototype.toggle = function (name) {
    if (!name || typeof name !== "string") return;

    this.elems.classList.toggle(name)
}