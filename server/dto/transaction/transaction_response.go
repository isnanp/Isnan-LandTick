package transactiondto

import "landtick/models"

type TransactionResponse struct {
	ID     int                   `json:"id"`
	User   models.UserResponse   `json:"user"`
	Ticket models.TicketResponse `json:"ticket"`
	Image  string                `json:"image" form:"image"`
}
