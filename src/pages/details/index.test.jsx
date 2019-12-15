import React from "react";
import MockAdapter from "axios-mock-adapter";
import { Router } from "react-router";
import { Route } from "react-router-dom";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MovieDetails } from ".";
import { api } from "../../api";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

let mock;
describe("MovieDetails", () => {
  beforeEach(() => {
    mock = new MockAdapter(api);
    mock
      .onGet(/movie\/[1-9]+/)
      .reply(200, { id: 1, name: "Frozen II", posters: ["123", "1234"] });
  });

  const createWrapper = () => {
    const history = createMemoryHistory({
      initialEntries: ["/movie/1"],
      initialIndex: 0
    });

    return render(
      <Router history={history}>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
      </Router>
    );
  };

  it("Should properly handle loading", async () => {
    const { queryByTestId } = createWrapper();
    expect(queryByTestId("loading")).toBeVisible();
    await waitForElementToBeRemoved(() => queryByTestId("loading"));
    expect(queryByTestId("loading")).not.toBeInTheDocument();
  });

  it("Should render Movie details", async () => {
    const { getByTestId, queryByText } = createWrapper();
    await waitForElementToBeRemoved(() => getByTestId("loading"));
    expect(queryByText("Frozen II")).toBeVisible();
  });

  it("Should return to movielist when clicking on list", async () => {
    const { getByTestId } = createWrapper();
    await waitForElementToBeRemoved(() => getByTestId("loading"));
    act(() => {
      userEvent.click(getByTestId("go-to-list"));
    });
    expect(window.location.href).toBe("http://localhost/");
  });
});
