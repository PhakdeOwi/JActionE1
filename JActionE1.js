const j = (function (window) {
    var JAction = function (selector) {
        if (selector == "document" || selector === document) {
            this.elems = [document]
        } else if (selector == "window") {
            this.elems = [window]
        } else {
            this.raw = selector
            this.elems = document.querySelector(selector);
        }
    }

    var instantiate = function (selector) {
        return new JAction(selector);
    }

    JAction.prototype.each = function (cb) {
        if (!cb || typeof cb !== "function") return;

        let element = document.querySelectorAll(this.raw)

        for (var i = 0; i < element.length; i++) {
            cb(element[i], i)
        }

        return this
    }

    JAction.prototype.ready = (cb) => {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            setTimeout(cb, 1)
        } else {
            document.addEventListener("DOMContentLoaded", cb)
        }
    }


    window.JAction = JAction

    return instantiate
}(window))