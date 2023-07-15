package handlers

import (
	"fmt"
	dto "landtick/dto/result"
	transactiondto "landtick/dto/transaction"
	"landtick/models"
	"landtick/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
)

var path_file = "http://localhost:5000/uploads/"

type transactionsHandlers struct {
	TransactionRepository repositories.TransactionRepository
}

func HandlersTransactions(TransactionRepository repositories.TransactionRepository) *transactionsHandlers {
	return &transactionsHandlers{TransactionRepository}
}

type dataTrsansaction struct {
	Transaction interface{} `json:"transaction"`
}

func (h *transactionsHandlers) CreateTransaction(c echo.Context) error {
	request := new(transactiondto.TransactionRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	userLogin := c.Get("userLogin")
	userId := userLogin.(jwt.MapClaims)["id"].(float64)
	TicketID, _ := strconv.Atoi(c.FormValue("ticket_id"))
	fmt.Println(userId)

	request.UserID = int(userId)
	request.TicketID = TicketID

	validation := validator.New()

	validationErr := validation.Struct(request)
	if validationErr != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: validationErr.Error()})
	}

	data := models.Transaction{
		UserID:   request.UserID,
		TicketID: request.TicketID,
	}

	data, err := h.TransactionRepository.CreateTransaction(data)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data:   data,
	})
}

func (h *transactionsHandlers) FindTransaction(c echo.Context) error {
	user, err := h.TransactionRepository.FindTransaction()

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: user})
}

func (h *transactionsHandlers) GetTransaction(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	User, err := h.TransactionRepository.GetTransaction(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: User})
}
