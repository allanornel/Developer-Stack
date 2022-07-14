import { Request, Response } from "express";
import { createAnswer, CreateAnswerData } from "../services/answerService.js";
import {
  createQuestion,
  CreateQuestionData,
  getQuestions,
  getQuestionById,
} from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const questionData: CreateQuestionData = req.body;
  await createQuestion(questionData);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { id } = req.params;
  const answerData: CreateAnswerData = req.body;
  await createAnswer(answerData, +id);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await getQuestions();
  res.send({ questions: questions });
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const question = await getQuestionById(+id);
  delete question.Answer;
  res.send(question);
}
