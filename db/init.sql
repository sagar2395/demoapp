CREATE TABLE contact (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    message VARCHAR(255)
);