package main

import (
	"backend/db"
	"backend/handlers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	db.Connect()

	// err := db.DB.Ping()
	// if err != nil {
	// 	log.Fatalf("Ping to db failed")
	// }
	// fmt.Println("Ping successful. DB is connected")

	r := gin.Default()
	r.Use(corsMiddleware())

	r.POST("/api/contactrequest", handlers.ContactRequest)
	r.GET("/api/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "pong"})
	})

	r.Run(":8080")
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
