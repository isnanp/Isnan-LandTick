package models

type Transaction struct {
	ID       int            `json:"id" gorm:"primaryKey"`
	UserID   int            `json:"user_id" form:"user_id"`
	User     UserResponse   `json:"user" gorm:"foreignKey:UserID"`
	TicketID int            `json:"ticket_id" form:"ticket_id"`
	Ticket   TicketResponse `json:"ticket" gorm:"foreignKey:TicketID"`
	Image    string         `json:"image" form:"image"`
	Status   string         `json:"status" form:"status" gorm:"default:'pending'"`
}
