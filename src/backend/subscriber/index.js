class Publisher {

    publish = (channel, message) => {

    }
}

class Subscriber {

    subscribe = (channel) => {

    }
}

class SubscriberFactory {


}

// SNS exposes a series of channels that you can publish and listen to (Topics)

class SNSPublisher extends Publisher {

}

class SNSubscriber extends Subscriber {

}

// SQS queues can be directly published to or can subscribe to Topicss

class SQSSubscriber extends Subscriber {

}