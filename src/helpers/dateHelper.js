import { format } from 'date-fns'

/**
 * Function to format the date in the "MMMM d, yyyy" format
 * Example output: "July 14, 2024"
 * @param {string} isoDate - The date in ISO format "2024-07-11T10:00:00Z"
 * @returns {string} - Formatted date in the "July 14, 2024" style
 */
export function formatDate(isoDate) {
  return isoDate ? format(new Date(isoDate), 'MMMM d, yyyy') : ''
}
