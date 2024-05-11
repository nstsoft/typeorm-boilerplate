import 'reflect-metadata';
import 'dotenv/config';

import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// function methodInterceptor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     // Before method execution
//     console.log(`Calling method ${propertyKey} with arguments: ${args}`);

//     // Execute the original method
//     const result = originalMethod.apply(this, args);

//     // After method execution
//     console.log(`Method ${propertyKey} returned: ${result}`);

//     return result;
//   };

//   console.log(`Added interceptor to method ${propertyKey}`);

//   return descriptor;
// }

// class MyClass {
//   @methodInterceptor
//   myMethod(arg1: any, arg2: any) {
//     // Method implementation
//     console.log(`Inside myMethod with args: ${arg1}, ${arg2}`);
//     return arg1 + arg2;
//   }
// }

// const myObj = new MyClass();
// myObj.myMethod(5, 7);
