/**
 * Formats a number as a US dollar currency string.
 * e.g., 12345.67 => "$12,345.67"
 */
export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD' 
    }).format(amount);
  };
  