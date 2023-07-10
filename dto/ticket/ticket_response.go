package ticketdto

type TicketResponse struct {
	NameTrain            string `json:"name_train"`
	TypeTrain            string `json:"type_train"`
	StartDate            string `json:"start_date"`
	StartTime            string `json:"start_time"`
	ArrivalTime          string `json:"arrival_time"`
	StartStationID       int    `json:"start_station_id"`
	DestinationStationID int    `json:"destination_station_id" `
	Price                int    `json:"price"`
	Qty                  int    `json:"qty"`
	UserID               int    `json:"user_id"`
}
