package repositories

import (
	"landtick/models"

	"gorm.io/gorm"
)

type TicketRepositories interface {
	CreateTicket(ticket models.Ticket) (models.Ticket, error)
	FindTickets() ([]models.Ticket, error)
	GetTicket(ID int) (models.Ticket, error)
	FilterTicket(StartStationID, DestinationStationID int) ([]models.Ticket, error)
}

func RepositoryTicket(db *gorm.DB) *repository {
	return &repository{db}
}

func (r repository) CreateTicket(ticket models.Ticket) (models.Ticket, error) {
	err := r.db.Create(&ticket).Error

	return ticket, err
}

func (r repository) FindTickets() ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Preload("StartStation").Preload("DestinationStation").Find(&tickets).Error

	return tickets, err
}

func (r repository) GetTicket(ID int) (models.Ticket, error) {
	var ticket models.Ticket
	err := r.db.Preload("StartStation").Preload("DestinationStation").First(&ticket, ID).Error

	return ticket, err
}

func (r *repository) FilterTicket(StartStationID, DestinationStationID int) ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Where("start_station_id = ? AND destination_station_id = ?", StartStationID, DestinationStationID).Preload("StartStation").Preload("DestinationStation").Find(&tickets).Error

	return tickets, err
}
