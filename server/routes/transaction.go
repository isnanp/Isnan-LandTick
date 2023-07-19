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
	userRepository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlersTransactions(transactionRepository, userRepository)

	e.POST("/transaction", middleware.Auth(h.CreateTransaction))
	e.GET("/transactions", h.FindTransaction)
	e.GET("/transaction/:id", h.GetTransaction)
	e.DELETE("/transaction-delete/:id", h.DeleteTransaction)
	e.GET("/transaction-user", middleware.Auth(h.GetTransactionByUser))
	e.GET("/getpayment/:id", h.GetPayment)
	e.POST("/notification", h.Notification)
}
