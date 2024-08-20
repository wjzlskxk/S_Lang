// print
export const 하고싶다 = (content: string) => {
  console.log(content);
};

//if
export const 조건만남 = (con1: any, con2: any, arith: string, result1: any, result2?: any) => {
  if (arith === ">") {
    if (con1 > con2) {
      return result1;
    } else {
      return result2;
    }
  }
};

//산술 연산자
export const 결혼 = (n: number, m: number) => {
  return n + m;
};

export const 이혼 = (n: number, m: number) => {
  if (n > m) {
    return n - m;
  } else {
    return m - n;
  }
};

export const 갱뱅 = (n: number, m: number) => {
  return n * m;
};

export const 두집살림 = (n: number, m: number) => {
  if (n > m) {
    return n % m;
  } else {
    return m % n;
  }
};

//map()
export const 틴더 = (arr: any[]) => {
  return arr.map((item, idx) => {
    console.log(item);
  });
};

//forEach()
export const 잉꼬만남 = (arr: any[]) => {
  return arr.forEach((item, idx) => {
    console.log(item);
  });
};

console.log(잉꼬만남([1, 2]));
