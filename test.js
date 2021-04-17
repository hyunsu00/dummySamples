"use strict";

describe("pow", function () {
  describe("x를 세 번 곱합니다.", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  describe("주어진 숫자의 n 제곱", function () {
    it("5를 1 제곱하면 5", function () {
      assert.equal(pow(5, 1), 5);
    });

    it("5를 2 제곱하면 25", function () {
      assert.equal(pow(5, 2), 25);
    });

    it("5를 3 제곱하면 125", function () {
      assert.equal(pow(5, 3), 125);
    });
  });
  // describe와 it을 사용해 이 아래에 더 많은 테스트를 추가할 수 있습니다.
  it("n이 음수일 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, -1));
  });

  it("n이 정수가 아닐 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, 1.5));
  });
});

// describe("test", function () {
//   before(() => alert("테스트를 시작합니다 - 테스트가 시작되기 전"));
//   after(() => alert("테스트를 종료합니다 - 테스트가 종료된 후"));

//   beforeEach(() => alert("단일 테스트를 시작합니다 - 각 테스트 시작 전"));
//   afterEach(() => alert("단일 테스트를 종료합니다 - 각 테스트 종료 후"));

//   it("test 1", () => alert(1));
//   it("test 2", () => alert(2));
// });
