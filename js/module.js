// module.js
// 定義一個函數並導出
export function functionName(from) {
    console.log("從 "+ from +" 呼叫 Function 來自 module");
}

// 你也可以導出變量或類
export const someVariable = 123;
export class SomeClass {
    constructor() {
        console.log('使用模塊導出另一個模塊的 Class');
    }
}
