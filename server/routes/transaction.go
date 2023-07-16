package routes

import (
	"landtick/handlers"
	"landtick/pkg/middleware"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	transactionRepository := repositories.RepositoryStation(mysql.DB)
	h := handlers.HandlersTransactions(transactionRepository)

	e.POST("/transaction", middleware.Auth(h.CreateTransaction))
	e.GET("/transactions", h.FindTransaction)
	e.GET("/transaction/:id", h.GetTransaction)
	e.DELETE("/transaction-delete/:id", h.DeleteTransaction)
}
