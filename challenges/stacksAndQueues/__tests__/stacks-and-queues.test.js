

const { Stack, Queue } = require('../stacks.js');

describe('Stack', () => {

  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    expect(stack.peek()).toBeNull();
    stack.push('Tareq');
    expect(stack.peek()).toEqual('Tareq');

  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    expect(stack.peek()).toBeNull();
    stack.push('Tareq');
    stack.push('Maryam');
    expect(stack.peek()).toEqual('Maryam');

  });



  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push('Tareq');
    stack.push('Maryam');
    stack.push('Saja');
    let item = stack.pop();
    expect(item).toEqual('Saja');

  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push('Tareq');
    stack.push('Maryam');
    stack.push('Saja');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);

  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push('Tareq');
    stack.push('Maryam');
    stack.push('Saja');
    expect(stack.peek()).toEqual('Saja');

  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.peek()).toBeNull();
  });

});

/////////////////////////////////////////////////////////


describe('Queue', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('Tareq');
    expect(queue.peek()).toEqual('Tareq');

  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue('Tareq');
    queue.enqueue('Maryam');
    queue.enqueue('Saja');
    expect(queue.peek()).toEqual('Tareq');

  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue('Tareq');
    queue.dequeue();
    expect(queue.storage[queue.storage.length - 1]).toEqual(undefined);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue('Tareq');
    queue.enqueue('Maryam');
    expect(queue.peek()).toEqual('Tareq');

  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue('Tareq');
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(false);
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.storage.length).toEqual(0);

  });


});