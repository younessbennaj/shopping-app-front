import { rest } from "msw";
import { shoppingList, itemsList } from "./data";

export const handlers = [
  rest.get("/shopping_list/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: shoppingList,
      })
    );
  }),

  rest.post("/shopping_list", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: shoppingList,
      })
    );
  }),

  rest.patch("/shopping_list", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: shoppingList,
      })
    );
  }),

  rest.get("/items", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: itemsList,
      })
    );
  }),

  rest.get("/items/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: itemsList.find((item) => item.id === req.params.id),
      })
    );
  }),

  rest.post("/items", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Item successfully added",
      })
    );
  }),

  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      ctx.status(200),
      ctx.json({
        message: "Successfully signed up",
      })
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
