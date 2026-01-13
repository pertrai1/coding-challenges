export interface IEventEmitter {
  on(eventName: string, listener: Function): IEventEmitter;
  off(eventName: string, listener: Function): IEventEmitter;
  emit(eventName: string, ...args: Array<any>): boolean;
}

export class EventEmitter implements IEventEmitter {
  #events;

  constructor() {
    this.#events = new Map();
  }

  on(eventName: string, listener: Function) {
    if (!this.#events.has(eventName)) {
      this.#events.set(eventName, []);
    }
    this.#events.get(eventName).push(listener);
    return this;
  }

  off(eventName: string, listener: Function) {
    if (!this.#events.has(eventName)) {
      return this;
    }
    const listeners = this.#events.get(eventName);
    const index = listeners.findIndex(
      (listenerIdx: Function) => listenerIdx === listener
    );
    if (index < 0) {
      return this;
    }
    listeners.splice(index, 1);
    return this;
  }

  emit(eventName: string, ...args: any[]): boolean {
    if (
      !this.#events.has(eventName) ||
      this.#events.get(eventName).length === 0
    ) {
      return false;
    }
    const listeners = this.#events.get(eventName).slice();
    listeners.forEach((listener: Function) => {
      listener.apply(this, args);
    });
    return true;
  }
}
