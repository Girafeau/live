const NodeMediaServer = require('node-media-server');
const express = require("express");
const server = express();
const path = require("path");
const port = process.env.PORT || 8080;
const stream = process.env.STREAM || 8000;
const rtmp = process.env.RTMP || 1935;
server.use(express.static("build"));
server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});


const config = {
    rtmp: {
        port: rtmp,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: stream,
        allow_origin: '*'
    }
};

const nms = new NodeMediaServer(config)
server.listen(port);
nms.run();

