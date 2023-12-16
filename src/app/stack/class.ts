class Stack {
  public items: any[];
  constructor() {
    this.items = [];
  }

  // Push element onto the stack
  push(element: any) {
    this.items.push(element);
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // Get the size of the stack
  size() {
    return this.items.length;
  }
  // Print the stack elements
  print() {
    console.log(this.items.join(" "));
  }
  // Clear the stack
  clear() {
    this.items = [];
  }
}

export default Stack;