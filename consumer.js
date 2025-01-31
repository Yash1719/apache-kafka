const kafka=require('./client')

async function init() {
    const group = 'my-consumer-group';
    const consumer = kafka.consumer({ groupId: group });
    await consumer.connect()

    await consumer.subscribe({topics:["rider-updates"],fromBeginning:true});

    await consumer.run({
        eachMessage:async({topic,partition,message,heartbeat,pause})=>{
            console.log(
                `${group}:[${topic}]:PART:${partition}:`,
                message.value.toString()
            )
        }
    })

    // await consumer.disconnect();

}

init();