const commandHandler = require("@sustainer-network/TODO=<some-command>-command-handler");
const tokensFromReq = require("@sustainer-network/tokens-from-req");
const eventStore = require("@sustainer-network/event-store-js");
const eventBus = require("@sustainer-network/event-bus");

exports.command = (req, res) => {
  commandHandler({
    body: req.body,
    tokens: tokensFromReq(req),
    publishEventFn: event => {
      eventStore.add(event);
      eventBus.publish(event);
    }
  })
    .then(response => res.send(response))
    .catch(e => res.status(e.statusCode).send(e));
};
