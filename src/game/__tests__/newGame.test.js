import newGame from "../newGame";
import * as mocks from "../__mocks__/newGame.mock";

describe("game/newGame", () => {
  it("predictably creates a new game structure", () => {
    expect(newGame()).toEqual(mocks.newGame);
  });
});
