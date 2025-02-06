# Publisher-Subscriber Model using Apache Kafka with Docker and Node.js

This guide will help you set up and run a Publisher-Subscriber model using Apache Kafka, Docker, and Node.js.

### Roles Overview

- **Admin**: Handles Kafka infrastructure setup (topic creation, partition decisions, etc.)
- **Client**: Sets up the Apache Kafka client code.
- **Producer**: Produces messages to Kafka topics.
- **Consumer**: Consumes messages from Kafka topics. Consumers can also be grouped to work together.

### Prerequisites

Before we begin, ensure you have the following installed:

- **Docker**
- **Node.js and npm**
- **KafkaJS** (Node.js client for Kafka)

### Step-by-Step Guide

#### Step 1: Run Zookeeper using Docker

In your terminal, run the following Docker command to start Zookeeper:

```sh
docker run -p 2181:2181 zookeeper
```

#### Step 2: Run Zookeeper using Docker

Next, in another terminal, run the following Docker command to start Apache Kafka:

```sh
docker run -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=192.168.45.137:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.45.137:9092 \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka
```

#### Step 3: Set Up Node.js and KafkaJS Client
Make sure you have Node.js and npm installed in your system. If not, please install them first and clone the repo 
Initialize a new Node.js project:
```sh
npm init
```
Install KafkaJS:
```sh
npm install kafkajs
```

#### Step 4: Make sure you have the following JavaScript files in your project:

**admin.js** – For managing Kafka topics and partitions.
**client.js** – For setting up the Kafka client.
**producer.js** – For producing messages to Kafka topics.
**consumer.js** – For consuming messages from Kafka topics

#### Step 4: Run Admin Script
In your first terminal window, run the admin.js script to create the Kafka topic and configure partitions:
```sh
node admin.js
```
#### Step 5: Run Producer Script
In your second terminal window, run the producer.js script to send messages to the Kafka topic:
```sh
node producer.js
```
#### Step 6:Run Consumer Script
In another terminal window, run the consumer.js script to consume messages from the Kafka topic:
```sh
node consumer.js
```
#### Conclusion
1.Admin sets up Kafka topics and partitions. \
2.Producer sends messages to Kafka topics. \
3.Consumer consumes the messages, and multiple consumers can be grouped to scale message consumption. \
4.This setup allows you to easily build and test a Kafka-based Publisher-Subscriber model using Docker and Node.js. Feel free to customize the scripts as needed! 

