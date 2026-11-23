"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedController = void 0;
const feed_service_1 = require("../services/feed.service");
const error_handler_1 = require("../config/error.handler");
class FeedController {
    async list(req, res) {
        try {
            const idUser = res.locals.idUser;
            const result = await feed_service_1.feedService.list(idUser);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
}
exports.feedController = new FeedController();
//# sourceMappingURL=feed.controller.js.map