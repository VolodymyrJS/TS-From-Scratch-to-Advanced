const userInputelement = document.getElementById('input-element') as HTMLInputElement;

userInputelement.value = 'Hello from main.ts'

interface ErrorContainer {
  [prop: number]: string;
};

const errorBag: ErrorContainer = {
  0: 'someID',
  1: 'string',
};

const names: Array<string> = [];

names.toString();

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('It\'s success!!');
  }, 2000)
});

console.log(promise);

function merge<T extends object, U extends object>(objec_1: T, object_2: U) {
  return Object.assign(object_2, objec_1);
};

const mergedObject = merge({name: 'Vlad'}, {age: 8});

console.log(mergedObject);

