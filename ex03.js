class MyEventEmitter {
    constructor() {
        console.log('EventEmitter was created!');
        this.events = {}
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)

        return () => {
            this.events[eventName] = undefined;
        }
    }

    emit(eventName, ...data) {
        const callbackArr = this.events[eventName];
        if (callbackArr) {
            callbackArr.forEach(callback => {
                if (callback.length === data.length) {
                    callback(...data);
                }
            });
        }
    }
}

module.exports = {
    MyEventEmitter
}