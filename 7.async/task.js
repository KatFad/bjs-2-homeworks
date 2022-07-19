class AlarmClock {
    constructor(alarmCollection,timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock (time, callback, id) {
        if (isNaN(id)) {
            throw new Error('ID не задан');
        }
        if (this.alarmCollection.find(item=> item.id === id)) {
            return console.error('Такой ID существует')
        }
        this.alarmCollection.push({id, time, callback})
    }

    removeClock (delId) {
        let del = this.alarmCollection.findIndex(item=> item.id === delId);
        if (del !== -1) {
            this.alarmCollection.splice(del, 1)[0]
            return true;
        }
        else {
            return false;
        }
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    start(){
        const checkClock = (clock) => {
            if (this.getCurrentFormattedTime() === clock.time) {
                return clock.callback();
            }
        }

        if (this.timerId === null) {
            return this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }

    }

    printAlarms() {
        return this.alarmCollection.forEach(clock => {
            console.log(`Будильник № ${clock.id} заведен на ${clock.time}`);
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let bud = new AlarmClock();
    bud.addClock('06:50', () => console.log('Работа'), 1);
    bud.addClock('07:00', () => {
        console.log('Вставай, проспишь');
        bud.removeClock(2);
    }, 2);
    bud.addClock("07:15", () => {
        console.log('С собакой не гуляешь');
    }, 3);
    bud.printAlarms();
    bud.start();
}

testCase();