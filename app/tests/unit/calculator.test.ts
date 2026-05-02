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

  describe('multiply', () => {
    it('multiplie deux nombres positifs', () => {
      expect(calculator.multiply(3, 4)).toBe(12)
    })

    it('multiplie par zéro', () => {
      expect(calculator.multiply(5, 0)).toBe(0)
    })

    it('multiplie deux nombres négatifs', () => {
      expect(calculator.multiply(-2, -3)).toBe(6)
    })
  })

  describe('historique', () => {
    it('enregistre une opération dans l\'historique', () => {
      calculator.add(2, 3)
      expect(calculator.getHistory()).toContain('2 + 3 = 5')
    })

    it('enregistre plusieurs opérations', () => {
      calculator.add(1, 1)
      calculator.subtract(5, 2)
      calculator.multiply(3, 3)
      expect(calculator.getHistory()).toHaveLength(3)
      
    })

    it('efface l\'historique', () => {
      calculator.add(1, 1)
      calculator.clearHistory()
      expect(calculator.getHistory()).toHaveLength(0)
    })
    
  })

})