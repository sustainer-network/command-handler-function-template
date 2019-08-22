const commandHandler = require("@sustainer-network/TODO=<some-command>-command-handler");
const tokensFromReq = require("@sustainer-network/tokens-from-req");

exports.http = (req, res) => {
  commandHandler({ body: req.body, tokens: tokensFromReq(req) })
    .then(response => res.send(response))
    .catch(e => res.status(e.statusCode).send(e));
};
