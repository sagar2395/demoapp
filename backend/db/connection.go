package db

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect() {
	var err error
	// DB, err = sqlx.Connect("postgres", ")
	DB, err = sql.Open("postgres", "host=localhost port=5432 user=postgres password=Welcome@123 dbname=postgres sslmode=disable")

	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	log.Println("Database connected successfully")

	err = DB.Ping()
	if err != nil {
		log.Fatalf("Ping to db failed")
	}
	fmt.Println("Ping successful.")
}
