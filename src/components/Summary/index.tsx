import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { SummaryCard, SummatyContainer } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  
  return (
    <SummatyContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummatyContainer>
  )
}
