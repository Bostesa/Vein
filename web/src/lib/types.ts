// This file defines the shape of our core data structures.

export interface Account {
    id: number;
    name: string;
    provider: string;
    balance: number;
  }
  
  export interface Invoice {
    id: string;
    vendor: string;
    amount: number;
    dueDate: string;
    status: 'Paid' | 'Pending Approval' | 'Scheduled' | 'Rejected' | 'Processing';
    risk: number;
  }
  
  export interface CashFlowData {
      name: string;
      flow: number;
  }
  
  export interface ForecastData {
      date: string;
      median: number;
  }
  