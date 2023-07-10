package handlers

import (
	dto "landtick/dto/result"
	"landtick/repositories"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

type userHandlers struct {
	UserRepository repositories.UserRepository
}

func HandlersUser(UserRepository repositories.UserRepository) *userHandlers {
	return &userHandlers{UserRepository}
}

func (h *userHandlers) FindUser(c echo.Context) error {
	user, err := h.UserRepository.FindUser()

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: user})

}

func (h *userHandlers) GetUser(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	User, err := h.UserRepository.GetUser(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: User})
}
