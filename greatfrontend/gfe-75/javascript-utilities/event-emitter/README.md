# Event Emitter

In the observer pattern (also commonly known as the publish-subscribe model), we can observe/subscribe to events emitted by publishers and execute code whenever an event happens.

Implement an [`EventEmitter` class](https://nodejs.org/api/events.html#class-eventemitter) similar to the one in [Node.js](https://nodejs.org/api/events.html) that follows such an observer pattern.

Example usage of the EventEmitter class:

```javascript
const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5);
// > "The sum is 7"

emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off('foo', addTwoNumbers);
emitter.emit('foo', -3, 9);
// > "The product is -27"
```
