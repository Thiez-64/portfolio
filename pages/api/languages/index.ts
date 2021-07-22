// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import next, { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, language, logo } = req.body;

  try {
    if (req.method === "GET") {
      // get all languages
      const getLanguages = await prisma.language.findMany();
      return res.status(200).json(getLanguages);
    }
    if (req.method === "POST") {
      // create a new language
      const postLanguage = await prisma.language.create({
        data: { language, logo },
      });
      return res.status(201).json(postLanguage);
    }

    if (req.method === "PUT") {
      // update one language
      const putLanguage = await prisma.language.update({
        where: { id },
        data: { language, logo },
      });
      return res.status(204).json(putLanguage);
    }
    if (req.method === "DELETE") {
      // delete one language
      const deleteLanguage = await prisma.language.delete({
        where: { id },
      });
    }
  } catch (error) {
    next(error);
  }
}
