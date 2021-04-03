import { rest } from "msw";

export const handlers = [
  rest.get("/shopping_list/:shoppingListId", (req, res, ctx) => {
    console.log(req);
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            name: "Avocado",
            category: "vegetables",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Chicken 1kg",
            category: "meat",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Banana",
            category: "fruit",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Salmon 1kg",
            category: "fish",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
        ],
      })
    );
  }),

  rest.get("/items", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            name: "Avocado",
            category: "vegetables",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Chicken 1kg",
            category: "meat",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Banana",
            category: "fruit",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Salmon 1kg",
            category: "fish",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Watermelon",
            category: "fruit",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Beef",
            category: "meat",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Tuna",
            category: "fish",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
          {
            name: "Carrotes",
            category: "vegetables",
            furtherInformation: "Lorem ipsum",
            image: "imageUrl",
          },
        ],
      })
    );
  }),

  rest.post("/items", (req, res, ctx) => {
    console.log(req);
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
