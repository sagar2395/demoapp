package models

type Contact struct {
	Name    string `db:"name" json:"name" binding:"required"`
	Email   string `db:"email" json:"email" binding:"required"`
	Message string `db:"message" json:"message" binding:"required"`
}
