// 04 - moods

export type Mood = "sleepy" | "hungry" | "playful" | "grumpy";

export type CatEvent =
  | { kind: "fed"; grams: number }
  | { kind: "petted"; seconds: number }
  | { kind: "ignored" }
  | { kind: "vacuum" };

export function sound(mood: Mood): string {
  switch (mood) {
    case "sleepy":
      return "purr";
    case "hungry":
      return "MEOW";
    case "playful":
      return "chirp";
    case "grumpy":
      return "hiss";
  }
}

export function next(mood: Mood, event: CatEvent): Mood {
  switch (event.kind) {
    case "fed":
      return event.grams >= 50 ? "sleepy" : "hungry";
    case "petted":
      if (mood === "grumpy") {
        return "grumpy";
      }
      return event.seconds <= 3 ? "playful" : "grumpy";
    case "ignored":
      return mood === "playful" ? "grumpy" : mood;
    case "vacuum":
      return "grumpy";
  }
}

export function day(start: Mood, events: CatEvent[]): Mood[] {
  const moods: Mood[] = [];
  let current = start;
  for (const event of events) {
    current = next(current, event);
    moods.push(current);
  }
  return moods;
}

export function parseMood(input: unknown): Mood | null {
  if (typeof input !== "string") {
    return null;
  }
  const value = input.trim().toLowerCase();
  switch (value) {
    case "sleepy":
    case "hungry":
    case "playful":
    case "grumpy":
      return value;
    default:
      return null;
  }
}
