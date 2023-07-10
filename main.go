package main

import (
	"landtick/database"
	"landtick/pkg/mysql"
	"landtick/routes"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	mysql.DatabaseInit()
	database.RunMigrations()

	routes.RouteInit(e.Group("/api/v1"))
	e.Static("/uploads", "./uploads")

	e.Logger.Fatal(e.Start("localhost:5000"))

}
