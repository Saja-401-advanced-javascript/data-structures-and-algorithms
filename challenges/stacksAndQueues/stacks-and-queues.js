'use strict'


class Stack {
    constructor() {
        this.stack = new Array();
        this.top = null;
    }

    push(item) {
        this.stack.push(item);
        this.top = item;
    }

    pop() {
        let item = this.stack.pop();
        this.top = !this.stack.length ? null : this.stack[this.stack.length - 1];
        return item;
    }

    peek() {
        return this.top;
    }

    isEmpty() {
        return this.top === 0;
    }
}

//////////////////////////////////////////////////////////////////////

class Queue {
    constructor() {
        this.length = 0;
        this.storage = [];
    }

    enqueue(entry) {
        this.length++;
        return this.storage.unshift(entry);
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    dequeue() {
        this.length && this.length--;
        return this.storage.pop() || null;
    }

    isEmpty() {
        return this.storage[this.storage.length - 1] === 0;
    }
}


module.exports = { Stack, Queue };


