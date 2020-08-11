const enhancer = require("./enhancer.js");
// test away!

describe("tests functionality of game's system", () => {
  const item = { name: "The Thing", durability: 8, enhancement: 20 };

  it("restores the durability to 100", () => {
    const final = { ...item, durability: 100 };
    expect(enhancer.repair(item)).toEqual(final);
  });

  it("successfully returns an enhanced object", () => {
    const final = { ...item, enhancement: 20 };
    expect(enhancer.success(item)).toEqual(final);
  });

  it("a fail?", () => {
    const testThis = { name: "Fail This", durability: 15, enhancement: 17 };
    const final = { ...testThis, durability: 25, enhancement: 16 };
    expect(enhancer.fail(testThis)).toEqual(final);
  });
});
