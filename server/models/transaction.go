package models

type Transaction struct {
	ID       int            `json:"id" gorm:"primaryKey"`
	UserID   int            `json:"user_id" form:"user_id"`
	User     UserResponse   `json:"user" gorm:"foreignKey:UserID"`
	TicketID int            `json:"ticket_id" form:"ticket_id"`
	Ticket   TicketResponse `json:"ticket" gorm:"foreignKey:TicketID"`
	Price    int            `json:"price"`
	Qty      int            `json:"qty"`
	Status   string         `json:"status" form:"status" gorm:"default:'pending'"`
}
