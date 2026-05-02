export function useCalculator() {
  const history: string[] = []
  function add(a: number, b: number): number {
    const result = a + b
    history.push(`${a} + ${b} = ${result}`)
    return result
  }

  function subtract(a: number, b: number): number {
    const result = a - b
    history.push(`${a} - ${b} = ${result}`)
    return result
  }

  function multiply(a: number, b: number): number {
    const result = a * b
    history.push(`${a} × ${b} = ${result}`)
    return result
  }

  function getHistory(): string[] {
    return [...history]
  }

  function clearHistory(): void {
    history.length = 0
  }
  

  return { add, subtract, multiply, getHistory, clearHistory }
}