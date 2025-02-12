package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect() {
	var err error

	host := fmt.Sprintf("postgres-service.%s.svc.cluster.local", os.Getenv("NAMESPACE"))
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")

	connString := fmt.Sprintf("host=%s port=5432 user=%s password=%s dbname=postgres sslmode=disable", host, user, password)
	fmt.Println("Connection string: ", connString)

	// DB, err = sqlx.Connect("postgres", ")
	DB, err = sql.Open("postgres", connString)

	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	log.Println("Database connected successfully")

	// err = DB.Ping()
	// if err != nil {
	// 	log.Fatalf("Ping to db failed")
	// }
	// fmt.Println("Ping successful.")
}
