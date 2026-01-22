class Logger {
  messageMap = new Map<string, number>();

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (this.messageMap.has(message)) {
      const lastTimestamp = this.messageMap.get(message);
      if (timestamp >= lastTimestamp + 10) {
        this.messageMap.set(message, timestamp);
        return true;
      }
      return false;
    } else {
      this.messageMap.set(message, timestamp);
      return true;
    }
  }
}
