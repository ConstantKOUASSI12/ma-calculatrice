<template>
  <div class="calculator-wrapper">
    <div class="calculator">

      <!-- Affichage -->
      <div class="display">
        <div class="display-expression">{{ expression || '0' }}</div>
        <div class="display-result">{{ result !== null ? '= ' + result : '' }}</div>
      </div>

      <!-- Boutons -->
      <div class="buttons">

        <!-- Ligne 1 -->
        <button class="btn btn-clear" @click="clear">C</button>
        <button class="btn btn-history" @click="toggleHistory">📜</button>
        <button class="btn btn-operator" @click="setOperator('×')">×</button>
        <button class="btn btn-operator" @click="setOperator('-')">−</button>

        <!-- Ligne 2 -->
        <button class="btn" @click="appendNumber('7')">7</button>
        <button class="btn" @click="appendNumber('8')">8</button>
        <button class="btn" @click="appendNumber('9')">9</button>
        <button class="btn btn-operator" @click="setOperator('+')">+</button>

        <!-- Ligne 3 -->
        <button class="btn" @click="appendNumber('4')">4</button>
        <button class="btn" @click="appendNumber('5')">5</button>
        <button class="btn" @click="appendNumber('6')">6</button>
        <!-- <button class="btn btn-operator" @click="setOperator('+')">+</button> -->
        <button class="btn btn-operator"></button>

        <!-- Ligne 4 -->
        <button class="btn" @click="appendNumber('1')">1</button>
        <button class="btn" @click="appendNumber('2')">2</button>
        <button class="btn" @click="appendNumber('3')">3</button>
        <button class="btn btn-equals" @click="calculate">=</button>

        <!-- Ligne 5 -->
        <button class="btn btn-zero" @click="appendNumber('0')">0</button>
        <button class="btn" @click="appendNumber('.')">.</button>

      </div>

      <!-- Historique -->
      <div v-if="showHistory" class="history">
        <div class="history-header">
          <span>Historique</span>
          <button class="btn-clear-history" @click="clearHistoryList">🗑️ Effacer</button>
        </div>
        <ul v-if="historyList.length > 0">
          <li v-for="(item, index) in historyList" :key="index">{{ item }}</li>
        </ul>
        <p v-else class="history-empty">Aucun calcul pour l'instant</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCalculator } from '~/composables/useCalculator'

const { add, subtract, multiply, getHistory, clearHistory } = useCalculator()

const expression = ref('')
const result = ref<number | null>(null)
const firstNumber = ref<number | null>(null)
const operator = ref<string | null>(null)
const showHistory = ref(false)
const historyList = ref<string[]>([])

function appendNumber(num: string) {
  if (result.value !== null) {
    expression.value = ''
    result.value = null
  }
  expression.value += num
}

function setOperator(op: string) {
  if (expression.value === '') return
  firstNumber.value = parseFloat(expression.value)
  operator.value = op
  expression.value += ` ${op} `
}

function calculate() {
  if (firstNumber.value === null || operator.value === null) return

  const parts = expression.value.split(' ')
  const secondNumber = parseFloat(parts[parts.length - 1])

  if (isNaN(secondNumber)) return

  let res: number

  if (operator.value === '+') res = add(firstNumber.value, secondNumber)
  else if (operator.value === '-') res = subtract(firstNumber.value, secondNumber)
  else if (operator.value === '×') res = multiply(firstNumber.value, secondNumber)
  else return

  result.value = res
  historyList.value = getHistory()

  firstNumber.value = null
  operator.value = null
}

function clear() {
  expression.value = ''
  result.value = null
  firstNumber.value = null
  operator.value = null
}

function toggleHistory() {
  showHistory.value = !showHistory.value
}

function clearHistoryList() {
  clearHistory()
  historyList.value = []
}
</script>

<style scoped>
.calculator-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1a1a2e;
}

.calculator {
  background: #16213e;
  border-radius: 20px;
  padding: 24px;
  width: 320px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.display {
  background: #0f3460;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  min-height: 80px;
  text-align: right;
}

.display-expression {
  color: #e2e8f0;
  font-size: 1.5rem;
  word-break: break-all;
}

.display-result {
  color: #a0aec0;
  font-size: 1rem;
  margin-top: 4px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.btn {
  background: #1a1a2e;
  color: #e2e8f0;
  border: none;
  border-radius: 10px;
  padding: 18px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn:hover {
  background: #0f3460;
}

.btn-operator {
  background: #e94560;
  color: white;
}

.btn-operator:hover {
  background: #c73652;
}

.btn-equals {
  background: #e94560;
  color: white;
  grid-row: span 2;
}

.btn-equals:hover {
  background: #c73652;
}

.btn-clear {
  background: #533483;
  color: white;
}

.btn-clear:hover {
  background: #3d2563;
}

.btn-history {
  background: #533483;
  color: white;
}

.btn-zero {
  grid-column: span 2;
}

.history {
  margin-top: 16px;
  background: #0f3460;
  border-radius: 12px;
  padding: 16px;
  color: #e2e8f0;
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;
}

.btn-clear-history {
  background: #e94560;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  cursor: pointer;
}

.history ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.history li {
  padding: 6px 0;
  border-bottom: 1px solid #1a1a2e;
  font-size: 0.9rem;
}

.history-empty {
  color: #a0aec0;
  font-size: 0.9rem;
  text-align: center;
}
</style>