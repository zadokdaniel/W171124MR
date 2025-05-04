const { v4: uuidV4 } = require("uuid");

let messages = [
  //   {
  //     id: uuidV4(),
  //     to: "shalom",
  //     from: "avi",
  //     message: "hello",
  //     createdAt: new Date(),
  //   },
];

function sendMessage(from, to, message) {
  const newMessage = {
    id: uuidV4(),
    from,
    to,
    message,
    createdAt: new Date(),
  };
  messages = [...messages, newMessage];

  return newMessage;
}

function getMessages(to) {
  if (!to) {
    return messages;
  }

  return messages.filter((message) => message.to === to);
}

function deleteMessages(to) {
  const deletedMessages = messages.filter((message) => message.to === to);

  messages = messages.filter((message) => message.to !== to);

  return deletedMessages;
}

module.exports = {
  sendMessage,
  getMessages,
  deleteMessages,
};
