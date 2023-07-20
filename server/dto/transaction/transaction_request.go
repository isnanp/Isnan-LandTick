package transactiondto

type TransactionRequest struct {
	UserID   int `json:"user_id" form:"user_id"`
	TicketID int `json:"ticket_id" form:"ticket_id"`
	Qty      int `json:"qty" form:"qty"`
	Price    int `json:"price" form:"price"`
}
