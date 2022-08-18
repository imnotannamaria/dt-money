import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useSummary } from '../../hooks/useSummary';
import { priceFormmatter } from '../../utils/formatter';
import { SummaryCard, SummatyContainer } from './styles'

export function Summary() {
  const summary = useSummary();

  return (
    <SummatyContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormmatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>{priceFormmatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormmatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummatyContainer>
  )
}
