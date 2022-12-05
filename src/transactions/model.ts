type Transaction = {
  id?: number;
  type: string;
  value: number;
  payd: boolean;
  dateTransaction: string;
  category: string;
  description: string;
  user_id: number;
};

export default Transaction;
