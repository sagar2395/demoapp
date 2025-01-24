package models

type Task struct {
	ID        int    `db:"id" json:"id"`
	NAME      string `db:"name" json:"name"`
	Completed bool   `db:"completed" json:"completed"`
}
