package main

import (
	"landtick/database"
	"landtick/pkg/mysql"
	"landtick/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE},
		AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization"},
	}))

	mysql.DatabaseInit()
	database.RunMigrations()

	routes.RouteInit(e.Group("/api/v1"))

	e.Static("/uploads", "./uploads")

	e.Logger.Fatal(e.Start(":5000"))

}
