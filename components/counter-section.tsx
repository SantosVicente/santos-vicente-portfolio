import { CoffeeCounter } from "./ui/coffee-counter";

export function CounterSection() {
  return (
    <section className="w-full py-20 clipped-divider-top">
      <div className="container mx-auto">
        <CoffeeCounter />
      </div>
    </section>
  );
}
