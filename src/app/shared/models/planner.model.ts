export class Planner {
  constructor(
    public id: number,
    public name: string,
    public portionSize: string,
    public image: string,
    public ingredients: { name: string; unit: string; amount: number }[],
  ) {}
}
