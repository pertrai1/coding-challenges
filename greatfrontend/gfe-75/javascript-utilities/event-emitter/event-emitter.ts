export type EventListener = (...args: Array<any>) => void;

export interface IEventEmitter {
  on(eventName: string, listener: EventListener): IEventEmitter;
  off(eventName: string, listener: EventListener): IEventEmitter;
  emit(eventName: string, ...args: Array<any>): boolean;
}

export class EventEmitter implements IEventEmitter {
  #events: Map<string, EventListener[]> = new Map();

  on(eventName: string, listener: EventListener) {
    if (!this.#events.has(eventName)) {
      this.#events.set(eventName, []);
    }
    this.#events.get(eventName)?.push(listener);
    return this;
  }

  off(eventName: string, listener: EventListener) {
    if (!this.#events.has(eventName)) {
      return this;
    }
    const listeners = this.#events.get(eventName);
    const index = listeners?.indexOf(listener) ?? -1;
    if (index < 0) {
      return this;
    }
    listeners?.splice(index, 1);
    this.cleanupEvent(eventName);

    return this;
  }

  emit(eventName: string, ...args: any[]): boolean {
    if (
      !this.#events.has(eventName) ||
      this.#events.get(eventName)?.length === 0
    ) {
      return false;
    }
    const listeners = this.#events.get(eventName)?.slice();
    listeners?.forEach((listener: EventListener) => {
      listener.apply(this, args);
    });
    return true;
  }

  private cleanupEvent(eventName: string): void {
    if (
      this.#events.has(eventName) &&
      this.#events.get(eventName)?.length === 0
    ) {
      this.#events.delete(eventName);
    }
  }
}
