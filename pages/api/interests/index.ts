// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import next, { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, interest, logo } = req.body;

  try {
    if (req.method === "GET") {
      // get all interests
      const getInterests = await prisma.interest.findMany();
      return res.status(200).json(getInterests);
    }
    if (req.method === "POST") {
      // create a new interest
      const postInterest = await prisma.interest.create({
        data: { interest, logo },
      });
      return res.status(201).json(postInterest);
    }

    if (req.method === "PUT") {
      // update one interest
      const putInterest = await prisma.interest.update({
        where: { id },
        data: { interest, logo },
      });
      return res.status(204).json(putInterest);
    }
    if (req.method === "DELETE") {
      // delete one Interest
      const deleteInterest = await prisma.interest.delete({
        where: { id },
      });
      return res.status(204);
    }
  } catch (error) {
    next(error);
  }
}
