export class BigClass {
  something() {
    console.log('testing...');
  }

  withParams(one: number, two:number, three:number, four:number, tooMuch:string) {
    one = one + 1;
    two = two + 2;
    three = three + 3;
    four = four + 2;

    tooMuch = tooMuch + 'too much';

    return 0;
  }

  withLogic(a:boolean, b:boolean, c:boolean, d: boolean) {
    if ((a && b && c) != (a || b || c) && !( a || b))
      return 'too much boolean mess';

    return 'x';
  }
}