// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import next, { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, stack, logo } = req.body;

  try {
    if (req.method === "GET") {
      // get all stacks
      const getStacks = await prisma.stack.findMany();
      return res.status(200).json(getStacks);
    }
    if (req.method === "POST") {
      // create a new stack
      const postStack = await prisma.stack.create({
        data: { stack, logo },
      });
      return res.status(201).json(postStack);
    }

    if (req.method === "PUT") {
      // update one stack
      const putStack = await prisma.stack.update({
        where: { id },
        data: { stack, logo },
      });
      return res.status(204).json(putStack);
    }
    if (req.method === "DELETE") {
      // delete one stack
      const deleteStack = await prisma.stack.delete({
        where: { id },
      });
    }
  } catch (error) {
    next(error);
  }
}
