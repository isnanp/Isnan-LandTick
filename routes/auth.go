package routes

import (
	"landtick/handlers"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func AuthRoutes(e *echo.Group) {
	AuthRepository := repositories.RepositoryAuth(mysql.DB)
	h := handlers.HandlerAuth(AuthRepository)

	e.POST("/register", h.Register)
	e.POST("/login", h.Login)
}
