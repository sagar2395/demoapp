package handlers

// import (
// 	"backend/db"
// 	"backend/models"
// 	"net/http"

// 	"github.com/gin-gonic/gin"
// )

// func GetTasks(c *gin.Context) {
// 	var tasks []models.Task
// 	// err := db.DB.Select(&tasks, "SELECT * FROM tasks")
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch tasks"})
// 	}
// 	c.JSON(http.StatusOK, tasks)
// }

// func CreateTask(c *gin.Context) {
// 	var task models.Task

// 	if err := c.ShouldBindJSON(&task); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Request Body"})
// 		return
// 	}

// 	// _, err := db.DB.NamedExec("INSERT INTO tasks (name, completed) VALUES (:name, :completed)", task)

// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create task"})
// 		return
// 	}

// 	c.JSON(http.StatusCreated, task)
// }
