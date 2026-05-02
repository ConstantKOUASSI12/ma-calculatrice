import { describe, it, expect, beforeEach } from 'vitest'
import { useCalculator } from '../../composables/useCalculator'

describe('useCalculator', () => {
  let calculator: ReturnType<typeof useCalculator>

  beforeEach(() => {
    calculator = useCalculator()
  })

  
  describe('add', () => {
    it('additionne deux nombres positifs', () => {
      expect(calculator.add(2, 3)).toBe(5)
    })

    it('additionne un nombre négatif', () => {
      expect(calculator.add(-2, 3)).toBe(1)
    })

    it('additionne deux zéros', () => {
      expect(calculator.add(0, 0)).toBe(0)
    })
  })

  describe('subtract', () => {
    it('soustrait deux nombres positifs', () => {
      expect(calculator.subtract(5, 3)).toBe(2)
    })

    it('soustrait et donne un résultat négatif', () => {
      expect(calculator.subtract(3, 5)).toBe(-2)
    })

    it('soustrait deux zéros', () => {
      expect(calculator.subtract(0, 0)).toBe(0)
    })
  })

})