import { prisma } from "./../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";

export async function insert(answerData: CreateAnswerData, questionId: number) {
  await prisma.answer.create({ data: { ...answerData, questionId } });
}
