JAction.prototype.inline = function (key, value) {
    if (!key || typeof key !== "string") return;

    this.elems.style[key] = value

    return this
}