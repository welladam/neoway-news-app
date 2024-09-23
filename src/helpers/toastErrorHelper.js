
import { useToast } from 'vue-toastification'

/**
 * Function to display an error toast message using Vue Toastification.
 * It shows a toast with the provided message and options.
 * 
 * @param {string} [message='An error occurred'] - The error message to display.
 * @param {Object} [options={}] - Additional options for customizing the toast.
 */
export function showErrorToast(message = 'An error occurred', options = {}) {
  const toast = useToast()
  toast.error(message, { ...options })
}
