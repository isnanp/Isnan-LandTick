package handlers

import (
	dto "landtick/dto/result"
	ticketdto "landtick/dto/ticket"
	"landtick/models"
	"landtick/repositories"
	"net/http"

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
	request := new(ticketdto.TicketRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: "Validator error"})
	}

	ticket := models.Ticket{
		NameTrain:            request.NameTrain,
		TypeTrain:            request.TypeTrain,
		StartDate:            request.StartDate,
		StartTime:            request.StartTime,
		ArrivalTime:          request.ArrivalTime,
		StartStationID:       request.StartStationID,
		DestinationStationID: request.DestinationStationID,
		Price:                request.Price,
		Qty:                  request.Qty,
	}

	data, err := h.TicketRepositories.CreateTicket(ticket)
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
