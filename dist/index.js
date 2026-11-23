"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const tweet_routes_1 = __importDefault(require("./routes/tweet.routes"));
const like_routes_1 = __importDefault(require("./routes/like.routes"));
const follow_routes_1 = __importDefault(require("./routes/follow.routes"));
const reply_routes_1 = __importDefault(require("./routes/reply.routes"));
const feed_routes_1 = __importDefault(require("./routes/feed.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const logout_routes_1 = __importDefault(require("./routes/logout.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", user_routes_1.default);
app.use("/users", follow_routes_1.default);
app.use("/tweets", tweet_routes_1.default);
app.use("/tweets", like_routes_1.default);
app.use('/tweets', reply_routes_1.default);
app.use("/feed", feed_routes_1.default);
app.use("/login", login_routes_1.default);
app.use("/logout", logout_routes_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log("API executando...");
});
//# sourceMappingURL=index.js.map