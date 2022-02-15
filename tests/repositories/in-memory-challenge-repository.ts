import { ChallengeRepository } from "../../src/application/repositories/ChallengeRepository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengeRepository implements ChallengeRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find((challenge) => challenge.id === id);

    if (!challenge) {
      return null;
    }

    return challenge;
  }
}
