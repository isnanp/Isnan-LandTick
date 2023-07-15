package models

type Ticket struct {
	ID                   int             `json:"id"`
	NameTrain            string          `json:"name_train"`
	TypeTrain            string          `json:"type_train"`
	StartDate            string          `json:"start_date"`
	StartStationID       int             `json:"start_stations_id"`
	StartStation         StationResponse `json:"start_stations" gorm:"foreignKey:StartStationID"`
	StartTime            string          `json:"start_time" `
	ArrivalTime          string          `json:"arrival_time" `
	DestinationStationID int             `json:"destination_stations_id" `
	DestinationStation   StationResponse `json:"destination_stations" gorm:"foreignKey:DestinationStationID"`
	Price                int             `json:"price"`
	Qty                  int             `json:"qty"`
}

type TicketResponse struct {
	ID                   int             `json:"id"`
	NameTrain            string          `json:"name_train"`
	TypeTrain            string          `json:"type_train"`
	StartDate            string          `json:"start_date"`
	StartStationID       int             `json:"start_station_id"`
	StartStation         StationResponse `json:"start_station"`
	StartTime            string          `json:"start_time" `
	DestinationStationID int             `json:"destination_station_id"`
	DestinationStation   StationResponse `json:"destination_station"`
	ArrivalTime          string          `json:"arrival_time" `
	Price                int             `json:"price"`
	Qty                  int             `json:"qty"`
}

func (TicketResponse) TableName() string {
	return "tickets"
}
