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
})