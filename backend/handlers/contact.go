package handlers

import (
	"backend/db"
	"backend/models"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ContactRequest(c *gin.Context) {
	fmt.Println("Hitting contact request")
	fmt.Println("This is testing for hot reload")

	var newContact models.Contact
	// body, _ := c.GetRawData()
	// fmt.Println("Raw body: ", string(body))
	err := c.ShouldBindJSON(&newContact)
	if err != nil {
		fmt.Println("Should bind has error: ", newContact)
		fmt.Println("Error: ", err)
		return
	}

	err = db.DB.Ping()
	if err != nil {
		log.Fatalf("Ping to db failed")
	}
	fmt.Println("Ping successful. DB connected")

	fmt.Println("new contact variable", newContact)
	// _, err = db.DB.NamedExec("INSERT INTO contact (name,email,message) VALUES (:name,:email,:message)", newContact)
	_, err = db.DB.Exec("INSERT INTO contact (name,email,message) VALUES ($1, $2, $3)", newContact.Name, newContact.Email, newContact.Message)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to contact"})
		log.Println(err)
		return
	}

	fmt.Println("new contact variable", newContact)

	fmt.Println("Contact created")

	c.IndentedJSON(http.StatusCreated, newContact)

}
