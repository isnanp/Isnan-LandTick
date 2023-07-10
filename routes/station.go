package routes

import (
	"landtick/handlers"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func StationRoute(e *echo.Group) {
	stationRepository := repositories.RepositoryStation(mysql.DB)
	h := handlers.HandlersStation(stationRepository)

	e.POST("/station", h.CreateStation)
	e.GET("/stations", h.FindStation)
	e.GET("/station/:id", h.GetStation)
}
