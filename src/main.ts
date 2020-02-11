const userInputelement = document.getElementById('input-element') as HTMLInputElement;

userInputelement.value = 'Hello from main.ts'

interface ErrorContainer {
  [prop: number]: string;
};

const errorBag: ErrorContainer = {
  0: 'someID',
  1: 'string',
};


