const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.156.137:9092"], //my laptop ipv4 addresss
});

module.exports = kafka; 

