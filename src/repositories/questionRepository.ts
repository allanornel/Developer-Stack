import { CreateQuestionData } from "../services/questionService.js";
import { prisma } from "./../config/database.js";

export async function getById(id: number) {
  const result = await prisma.question.findUnique({ where: { id } });
  return result;
}

export async function insert(questionData: CreateQuestionData) {
  await prisma.question.create({ data: questionData });
}

export async function findAll() {
  const result = await prisma.question.findMany();
  return result;
}

export async function findById(id: number) {
  const result = await prisma.question.findUnique({
    where: { id },
    select: { id: true, question: true, Answer: { select: { answer: true } } },
  });
  return result;
}
