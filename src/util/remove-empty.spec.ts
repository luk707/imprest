import { removeEmpty } from "./removeEmpty";

describe("removeEmpty", () => {
  it("Removes key from an object which has value of object of no keys", () => {
    expect(Object.keys(removeEmpty({ foo: {} })).length).to.be(0);
  });
  it("Removes key from an object which has an undefined value", () => {
    expect(Object.keys(removeEmpty({ foo: undefined })).length).to.be(0);
  });
})
