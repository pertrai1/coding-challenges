/* eslint-disable max-lines-per-function */
import { describe, it, expect, vi } from 'vitest';
import { EventEmitter, IEventEmitter } from './event-emitter';

describe('EventEmitter', () => {
  describe('on()', () => {
    it('should register a listener for an event', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      emitter.emit('test');

      expect(listener).toHaveBeenCalledTimes(1);
    });

    it('should register multiple listeners for the same event', () => {
      const emitter = new EventEmitter();
      const listener1 = vi.fn();
      const listener2 = vi.fn();

      emitter.on('test', listener1);
      emitter.on('test', listener2);
      emitter.emit('test');

      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).toHaveBeenCalledTimes(1);
    });

    it('should register listeners for different events', () => {
      const emitter = new EventEmitter();
      const listener1 = vi.fn();
      const listener2 = vi.fn();

      emitter.on('event1', listener1);
      emitter.on('event2', listener2);

      emitter.emit('event1');

      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).not.toHaveBeenCalled();
    });

    it('should support method chaining', () => {
      const emitter = new EventEmitter();
      const listener1 = vi.fn();
      const listener2 = vi.fn();

      const result = emitter.on('event1', listener1).on('event2', listener2);

      expect(result).toBe(emitter);
      expect(result).toBeInstanceOf(EventEmitter);
    });

    it('should allow the same listener to be registered multiple times', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      emitter.on('test', listener);
      emitter.emit('test');

      expect(listener).toHaveBeenCalledTimes(2);
    });
  });

  describe('off()', () => {
    it('should remove a registered listener', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      emitter.off('test', listener);
      emitter.emit('test');

      expect(listener).not.toHaveBeenCalled();
    });

    it('should only remove the specified listener', () => {
      const emitter = new EventEmitter();
      const listener1 = vi.fn();
      const listener2 = vi.fn();

      emitter.on('test', listener1);
      emitter.on('test', listener2);
      emitter.off('test', listener1);
      emitter.emit('test');

      expect(listener1).not.toHaveBeenCalled();
      expect(listener2).toHaveBeenCalledTimes(1);
    });

    it('should handle removing a listener that was registered multiple times', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      emitter.on('test', listener);
      emitter.off('test', listener);
      emitter.emit('test');

      expect(listener).toHaveBeenCalledTimes(1);
    });

    it('should handle removing a non-existent listener gracefully', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      expect(() => emitter.off('test', listener)).not.toThrow();
    });

    it('should handle removing a listener from a non-existent event gracefully', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      expect(() => emitter.off('nonexistent', listener)).not.toThrow();
    });

    it('should support method chaining', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      const result = emitter.off('test', listener);

      expect(result).toBe(emitter);
      expect(result).toBeInstanceOf(EventEmitter);
    });

    it('should not affect other events when removing a listener', () => {
      const emitter = new EventEmitter();
      const listener1 = vi.fn();
      const listener2 = vi.fn();

      emitter.on('event1', listener1);
      emitter.on('event2', listener2);
      emitter.off('event1', listener1);

      emitter.emit('event2');

      expect(listener1).not.toHaveBeenCalled();
      expect(listener2).toHaveBeenCalledTimes(1);
    });
  });

  describe('emit()', () => {
    it('should call registered listeners with no arguments', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      emitter.emit('test');

      expect(listener).toHaveBeenCalledWith();
    });

    it('should call registered listeners with a single argument', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      emitter.emit('test', 'arg1');

      expect(listener).toHaveBeenCalledWith('arg1');
    });

    it('should call registered listeners with multiple arguments', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      emitter.emit('test', 'arg1', 'arg2', 'arg3');

      expect(listener).toHaveBeenCalledWith('arg1', 'arg2', 'arg3');
    });

    it('should call registered listeners with various data types', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();
      const obj = { key: 'value' };
      const arr = [1, 2, 3];

      emitter.on('test', listener);
      emitter.emit('test', 42, 'string', obj, arr, null, undefined);

      expect(listener).toHaveBeenCalledWith(
        42,
        'string',
        obj,
        arr,
        null,
        undefined
      );
    });

    it('should call all registered listeners in order', () => {
      const emitter = new EventEmitter();
      const callOrder: number[] = [];
      const listener1 = vi.fn(() => callOrder.push(1));
      const listener2 = vi.fn(() => callOrder.push(2));
      const listener3 = vi.fn(() => callOrder.push(3));

      emitter.on('test', listener1);
      emitter.on('test', listener2);
      emitter.on('test', listener3);
      emitter.emit('test');

      expect(callOrder).toEqual([1, 2, 3]);
    });

    it('should return true when at least one listener is called', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      const result = emitter.emit('test');

      expect(result).toBe(true);
    });

    it('should return false when no listeners are registered', () => {
      const emitter = new EventEmitter();
      const result = emitter.emit('test');

      expect(result).toBe(false);
    });

    it('should return false when all listeners have been removed', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      emitter.off('test', listener);
      const result = emitter.emit('test');

      expect(result).toBe(false);
    });

    it('should not fail if a listener throws an error', () => {
      const emitter = new EventEmitter();
      const listener1 = vi.fn(() => {
        throw new Error('Listener error');
      });
      const listener2 = vi.fn();

      emitter.on('test', listener1);
      emitter.on('test', listener2);

      expect(() => emitter.emit('test')).toThrow('Listener error');
      // Note: listener2 won't be called because listener1 throws
    });

    it('should handle listeners being removed during emit', () => {
      const emitter = new EventEmitter();
      const listener2 = vi.fn();
      const listener1 = vi.fn(() => {
        emitter.off('test', listener2);
      });

      emitter.on('test', listener1);
      emitter.on('test', listener2);
      emitter.emit('test');

      // listener2 should still be called because emit uses a copy of listeners
      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).toHaveBeenCalledTimes(1);

      // But listener2 should not be called on subsequent emits
      emitter.emit('test');
      expect(listener2).toHaveBeenCalledTimes(1);
    });

    it('should handle listeners being added during emit', () => {
      const emitter = new EventEmitter();
      const listener2 = vi.fn();
      const listener1 = vi.fn(() => {
        emitter.on('test', listener2);
      });

      emitter.on('test', listener1);
      emitter.emit('test');

      // listener2 should not be called on this emit (added during emit)
      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).not.toHaveBeenCalled();

      // But should be called on the next emit
      emitter.emit('test');
      expect(listener2).toHaveBeenCalledTimes(1);
    });
  });

  describe('Integration scenarios', () => {
    it('should support typical pub-sub pattern', () => {
      const emitter = new EventEmitter();
      const messages: string[] = [];

      const subscriber1 = (msg: string) => messages.push(`Sub1: ${msg}`);
      const subscriber2 = (msg: string) => messages.push(`Sub2: ${msg}`);

      emitter.on('message', subscriber1);
      emitter.on('message', subscriber2);

      emitter.emit('message', 'Hello');
      emitter.emit('message', 'World');

      expect(messages).toEqual([
        'Sub1: Hello',
        'Sub2: Hello',
        'Sub1: World',
        'Sub2: World'
      ]);
    });

    it('should handle complex event-driven workflow', () => {
      const emitter = new EventEmitter();
      const workflow: string[] = [];

      emitter.on('start', () => {
        workflow.push('started');
        emitter.emit('processing', 'data');
      });

      emitter.on('processing', (data: string) => {
        workflow.push(`processing-${data}`);
        emitter.emit('complete', data);
      });

      emitter.on('complete', (data: string) => {
        workflow.push(`completed-${data}`);
      });

      emitter.emit('start');

      expect(workflow).toEqual([
        'started',
        'processing-data',
        'completed-data'
      ]);
    });

    it('should implement the IEventEmitter interface', () => {
      const emitter: IEventEmitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);
      const emitted = emitter.emit('test', 'arg');
      emitter.off('test', listener);

      expect(listener).toHaveBeenCalledWith('arg');
      expect(emitted).toBe(true);
    });

    it('should handle rapid successive events', () => {
      const emitter = new EventEmitter();
      const listener = vi.fn();

      emitter.on('test', listener);

      for (let i = 0; i < 100; i++) {
        emitter.emit('test', i);
      }

      expect(listener).toHaveBeenCalledTimes(100);
    });
  });
});
