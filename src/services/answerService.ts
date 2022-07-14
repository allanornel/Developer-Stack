import { Answer } from "@prisma/client";
import { insert } from "../repositories/answerRepository.js";
import { getById } from "../repositories/questionRepository.js";

export type CreateAnswerData = Omit<Answer, "id">;

export async function createAnswer(
  answerData: CreateAnswerData,
  questionId: number
) {
  const question = await getById(questionId);
  if (!question) throw { type: "not_found" };
  await insert(answerData, questionId);
}
