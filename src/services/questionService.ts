import { Question } from "@prisma/client";
import {
  insert,
  findAll,
  findById,
} from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id">;

export async function createQuestion(questionData: CreateQuestionData) {
  await insert(questionData);
}

export async function getQuestions() {
  const questions = await findAll();
  return questions;
}

export async function getQuestionById(id: number) {
  const question = await findById(id);
  return { ...question, answers: question.Answer };
}
