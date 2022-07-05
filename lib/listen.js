JAction.prototype.listen = function (listener, handle) {
    if (!listener || typeof listener !== "string") return;

    this.elems.addEventListener(listener, handle)

    return this
}