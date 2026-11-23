"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
function handleError(error, res) {
    return res.status(500).send({
        ok: false,
        message: error.toString()
    });
}
//# sourceMappingURL=error.handler.js.map