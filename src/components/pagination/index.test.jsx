import React from "react";
import { render } from "@testing-library/react";
import { Pagination } from ".";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Pagination", () => {
  it("Should go to next page", () => {
    let page = 1;
    const handlePageChange = newPage => (page = newPage);
    const { getByTestId } = render(
      <Pagination onPageChange={handlePageChange} page={page} />
    );
    act(() => {
      userEvent.click(getByTestId("next-page"));
    });
    expect(page).toEqual(2);
  });
  it("Should go to previous page", () => {
    let page = 3;
    const handlePageChange = newPage => (page = newPage);
    const { getByTestId } = render(
      <Pagination onPageChange={handlePageChange} page={page} />
    );
    act(() => {
      userEvent.click(getByTestId("previous-page"));
    });
    expect(page).toEqual(2);
  });

  it("Should stay on same page because there is no previous page", () => {
    let page = 1;
    const handlePageChange = newPage => (page = newPage);
    const { getByTestId } = render(
      <Pagination onPageChange={handlePageChange} page={page} />
    );
    act(() => {
      userEvent.click(getByTestId("previous-page"));
    });
    expect(page).toEqual(1);
  });
});
