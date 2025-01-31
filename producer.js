const kafka = require('./client');

async function init() {
    const producer = kafka.producer();
    console.log('Connecting Producer..');

    await producer.connect();
    console.log('Connected producer!');

    await producer.send({
        topic: 'rider-updates',
        messages: [
            { key: 'key1', value: 'hello world' },
            { key: 'key2', value: 'hey hey' }
        ],
    });

    console.log('Messages sent successfully!');
    await producer.disconnect();
}

init().catch(console.error);
