JAction.prototype.style = function (style) {
    if (!style || typeof style !== "object") return;

    for (key of Object.keys(style)) {
        this.elems.style[key] = style[key]
    }

    return this
}