import React from "react";
import MockAdapter from "axios-mock-adapter";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { api } from "../../api";
import { HomePage } from ".";

let mock;
describe("HomePage", () => {
  const createWrapper = () => {
    const history = createMemoryHistory();
    let wrapper;
    act(() => {
      wrapper = render(
        <Router history={history}>
          <HomePage />
        </Router>
      );
    });

    return wrapper;
  };

  beforeEach(() => {
    mock = new MockAdapter(api);
    mock.onGet(/movie\/upcoming/).reply(200, {
      page: 1,
      results: [
        { id: 1, name: "Frozen II", posters: ["123", "1234"] },
        { id: 2, name: "Star wars", posters: ["123", "1234"] }
      ]
    });
  });

  it("should properly set loadings", async () => {
    mock = new MockAdapter(api, { delayResponse: 2000 });
    mock.onGet(/upcoming/).reply(200, {
      page: 1,
      results: [
        { id: 1, name: "Frozen II", posters: ["123", "1234"] },
        { id: 2, name: "Star wars", posters: ["123", "1234"] }
      ]
    });

    const { queryByTestId } = createWrapper();

    expect(queryByTestId("loading")).toBeInTheDocument();
    await act(async () => {
      await waitForElementToBeRemoved(() => queryByTestId("loading"));
    });

    expect(queryByTestId("loading")).not.toBeInTheDocument();
  });

  it("should render a list of movies", async () => {
    const { queryByTestId, queryAllByTestId } = createWrapper();
    await act(async () => {
      await waitForElementToBeRemoved(() => queryByTestId("loading"));
    });

    expect(queryAllByTestId("movie")).toHaveLength(2);
  });

  it("should filter movies by title", async () => {
    const { queryByTestId } = createWrapper();
    const spy = jest.spyOn(api, "get");
    await act(async () => {
      await waitForElementToBeRemoved(() => queryByTestId("loading"));
    });
    userEvent.type(queryByTestId("search-input"), "Frozen");
    act(() => {
      userEvent.click(queryByTestId("search-btn"));
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("/v1/movie/upcoming", {
      params: { limit: 18, name: "Frozen", page: 1 }
    });
  });
});
