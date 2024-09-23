import { format } from 'date-fns'

/**
 * Função para formatar a data no formato "MMMM d, yyyy"
 * Exemplo de saída: "July 14, 2024"
 * @param {string} isoDate - A data no formato ISO "2024-07-11T10:00:00Z"
 * @returns {string} - Data formatada no estilo "July 14, 2024"
 */
export function formatDate(isoDate) {
  try {
    return isoDate ? format(new Date(isoDate), 'MMMM d, yyyy') : ''
  } catch (error) {
    console.error('Erro ao formatar a data:', error)
    return ''
  }
}
