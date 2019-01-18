const minus = require('./minus');
// 2 - 1 เท่ากับ 1
test('2 - 1 เท่ากับ 1', ()=> {
  expect(minus(2,1)).toBe(1);
});

// 3 - 1 เท่ากับ 2
test('3 - 1 เท่ากับ 2', ()=> {
    expect(minus(3,1)).toBe(2);
  });
  
// 4 - 1 เท่ากับ 3
test('4 - 1 เท่ากับ 3', ()=> {
    expect(minus(4,1)).toBe(3);
  });
  
// 5 - 1 เท่ากับ 4
test('5 - 1 เท่ากับ 4', ()=> {
    expect(minus(5,1)).toBe(4);
  });
  
// 6 - 1 เท่ากับ 5
test('6 - 1 เท่ากับ 5', ()=> {
    expect(minus(6,1)).toBe(5);
  });
  
        