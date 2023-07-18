package handlers

import (
	"fmt"
	dto "landtick/dto/result"
	"landtick/models"
	"landtick/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type TicketHandlers struct {
	TicketRepositories repositories.TicketRepositories
}

func HandlerTicket(TicketRepositories repositories.TicketRepositories) *TicketHandlers {
	return &TicketHandlers{TicketRepositories}
}

func (h *TicketHandlers) CreateTicket(c echo.Context) error {
	StartStationID, _ := strconv.Atoi(c.FormValue("start_station_id"))
	DestinationStationID, _ := strconv.Atoi(c.FormValue("destination_station_id"))
	Price, _ := strconv.Atoi(c.FormValue("price"))
	Qty, _ := strconv.Atoi(c.FormValue("qty"))

	request := models.Ticket{
		NameTrain:            c.FormValue("name_train"),
		TypeTrain:            c.FormValue("type_train"),
		StartDate:            c.FormValue("start_date"),
		StartTime:            c.FormValue("start_time"),
		ArrivalTime:          c.FormValue("arrival_time"),
		StartStationID:       StartStationID,
		DestinationStationID: DestinationStationID,
		Price:                Price,
		Qty:                  Qty,
	}
	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: "Validator error"})
	}

	fmt.Println(Price)
	data, err := h.TicketRepositories.CreateTicket(request)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: "Failed", Message: "Goblok"})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data:   data,
	})
}

func (h *TicketHandlers) FindTickets(c echo.Context) error {
	ticket, err := h.TicketRepositories.FindTickets()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: ticket})
}

func (h *TicketHandlers) GetTicket(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	ticket, err := h.TicketRepositories.GetTicket(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data:   ticket,
	})

}

func (h *TicketHandlers) FilterTicket(c echo.Context) error {
	startStationIDParam := c.QueryParam("start_station_id")
	destinationStationIDParam := c.QueryParam("destination_station_id")

	var startStationID int
	if startStationIDParam != "" {
		var err error
		startStationID, err = strconv.Atoi(startStationIDParam)
		if err != nil {
			return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Error", Message: "Invalid start_station_id"})
		}
	}

	var destinationStationID int
	if destinationStationIDParam != "" {
		var err error
		destinationStationID, err = strconv.Atoi(destinationStationIDParam)
		if err != nil {
			return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Error", Message: "Invalid destination_Error_id"})
		}
	}

	ticket, err := h.TicketRepositories.FilterTicket(startStationID, destinationStationID)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Error", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: ticket})
}
