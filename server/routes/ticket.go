package routes

import (
	"landtick/handlers"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func TicketRoutes(e *echo.Group) {
	tiketRepository := repositories.RepositoryTicket(mysql.DB)
	h := handlers.HandlerTicket(tiketRepository)

	e.POST("/create-ticket", h.CreateTicket)
	e.GET("/tickets", h.FindTickets)
	e.GET("/ticket/:id", h.GetTicket)
	e.GET("/ticket/", h.FilterTicket)
}
