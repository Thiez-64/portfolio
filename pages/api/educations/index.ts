// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import next, { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    id,
    education,
    logo,
    year,
    school,
    description,
    beginDate,
    finishDate,
  } = req.body;

  try {
    if (req.method === "GET") {
      // get all educations
      const getEducations = await prisma.education.findMany();
      return res.status(200).json(getEducations);
    }
    if (req.method === "POST") {
      // create a new education
      const postEducation = await prisma.education.create({
        data: {
          education,
          logo,
          year,
          school,
          description,
          beginDate,
          finishDate,
        },
      });
      return res.status(201).json(postEducation);
    }

    if (req.method === "PUT") {
      // update one education
      const putEducation = await prisma.education.update({
        where: { id },
        data: {
          education,
          logo,
          year,
          school,
          description,
          beginDate,
          finishDate,
        },
      });
      return res.status(204).json(putEducation);
    }
    if (req.method === "DELETE") {
      // delete one Education
      const deleteEducation = await prisma.education.delete({
        where: { id },
      });
      return res.status(204);
    }
  } catch (error) {
    next(error);
  }
}
