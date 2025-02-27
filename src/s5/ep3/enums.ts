import { Direction, vecteurDirection } from "../ep2/enums";

export function deplacer(
  point: [number, number],
  direction: Direction
): [number, number] {
  const [dx, dy] = vecteurDirection(direction);
  return [point[0] + dx, point[1] + dy];
}
