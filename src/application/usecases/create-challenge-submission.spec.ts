import { InMemoryChallengeRepository } from "../../../tests/repositories/in-memory-challenge-repository";
import { InMemoryStudentRepository } from "../../../tests/repositories/in-memory-student-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challenge submission", async () => {
    const studentRepository = new InMemoryStudentRepository();
    const challengeRepository = new InMemoryChallengeRepository();

    const sut = new CreateChallengeSubmission(
      studentRepository,
      challengeRepository
    );

    const response = await sut.execute({
      studentId: "fake-student-id",
      challengeId: "fake-challenge-id",
    });

    expect(response).toBeTruthy();
  });
});
