const kafka = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin connected successfully!");

    console.log("Creating topics [rider-updates]...");
    try {
        const result = await admin.createTopics({
            validateOnly: false, 
            waitForLeaders: true,
            topics: [
                {
                    topic: "rider-updates",
                    numPartitions: 2,
                    replicationFactor: 2, 
                },
            ],
        });

        if (result) {
            console.log("Topic 'rider-updates' created successfully!");
        } else {
            console.log("Topic 'rider-updates' already exists or failed to create.");
        }
    } catch (error) {
        console.error("Error creating topic:", error);
    }

    console.log("Disconnecting admin...");
    await admin.disconnect();
}

init().catch(console.error);
