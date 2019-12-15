import { formatGenre } from "./format-genre";

describe("format-genre", () => {
  it("Should format genres with , ", () => {
    const genres = [
      { id: 1, name: "adventure" },
      { id: 2, name: "fantasy" }
    ];
    const expected = "fantasy, adventure";
    expect(formatGenre(genres)).toEqual(expected);
  });
  it("Should return empty string when genre is null", () => {
    expect(formatGenre()).toEqual("");
  });
});
