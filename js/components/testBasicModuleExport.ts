//
export class Person {
  constructor(public name: string, private age: number) {}
}

export class Company {
  constructor(public name: string, private size: number) {}
}

export function testExportFunction() {
  console.log("testExportFunction");
}

export let testExportVariable: string[] = ["1", "2", "3"];


