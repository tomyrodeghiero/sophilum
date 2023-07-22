// Importing necessary constants and types from external modules
import {
  ERROR_MESSAGES,
  INTERNAL_SERVER_ERROR,
  METHOD_NOT_ALLOWED,
  OK,
} from "@/utils/constants/httpStatus";
import type { NextApiRequest, NextApiResponse } from "next";

// Defining the request handler function
export default async function handler(
  req: NextApiRequest, // Request object
  res: NextApiResponse // Response object
) {
  // Checking if the request method is POST
  if (req.method === "GET") {
    try {
      // Configure the request options
      var requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(`${process.env.BACKEND_URL}/api/products`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          res.status(OK).json(result);
        })
        .catch((error) => {
          console.error("error", error);
          res
            .status(INTERNAL_SERVER_ERROR)
            .json({ error: ERROR_MESSAGES[INTERNAL_SERVER_ERROR] });
        });
    } catch (error) {
      // Handling any errors that occur during the request
      console.error(error);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ error: ERROR_MESSAGES[INTERNAL_SERVER_ERROR] });
    }
  } else {
    // Sending a response with the METHOD_NOT_ALLOWED status code if the request method is not POST
    res
      .status(METHOD_NOT_ALLOWED)
      .json({ error: ERROR_MESSAGES[METHOD_NOT_ALLOWED] });
  }
}
