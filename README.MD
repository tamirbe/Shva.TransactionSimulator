# Shva Transaction Approval Simulator

A full-stack transaction approval simulator built with **React**, **ASP.NET Core Web API**, and **Microsoft SQL Server** as part of the **Shva Full-stack Developer Interview Task**.

The application simulates financial transaction approvals based on banking hours in different regions around the world.

---

# Project Overview

The system allows users to:

* Select a region
* Enter a transaction time
* Simulate a transaction approval request
* Determine whether the transaction is approved or rejected
* Store transactions in MSSQL
* Display approved transactions in a responsive carousel UI

The approval decision is based on the local banking hours of the selected region.

---

# Features

## Frontend

* React + Vite application
* Responsive design (Desktop / Tablet / Mobile)
* Figma-inspired UI implementation
* Region selector with search support
* Transaction simulation form
* Approved transactions carousel
* Loading states
* Empty states
* Error handling
* Localization support (English / Hebrew)
* RTL / LTR layout support
* Component-based architecture

## Backend

* RESTful ASP.NET Core Web API
* Clean scalable architecture
* Business logic for transaction approval
* Time zone conversion by selected region
* Entity Framework Core integration
* MSSQL persistence

## Database

* Stores all submitted transactions
* Retrieves approved transactions only
* SQL Server containerized using Docker

---

# Business Logic

A transaction is considered **Approved** only if the submitted local time falls between:

```txt id="xjfg1s"
08:00 - 18:00
```

according to the selected region's local time zone.

Supported regions:

* Israel
* France
* USA
* Japan

Otherwise, the transaction is marked as:

```txt id="ld0m91"
Rejected
```

---

# Technologies Used

## Frontend

* React
* Vite
* CSS
* Responsive Design

## Backend

* ASP.NET Core Web API
* C#
* Entity Framework Core

## Database

* Microsoft SQL Server

## DevOps

* Docker
* Docker Compose

---

# Project Structure

```txt id="zjlwmk"
Shva.TransactionSimulator/
│
├── Shva.TransactionSimulator.Api
│
├── shva-transaction-simulator-client
│
├── docker-compose.yml
│
└── README.md
```

---

# Running the Project with Docker

## Requirements

Make sure the following are installed:

* Docker Desktop
* .NET SDK
* Node.js

---

## Run the entire application

From the root folder run:

```bash id="6hpf8m"
docker compose up --build
```

This command starts:

* SQL Server
* Backend API
* Frontend client

---

# Application URLs

## Frontend

```txt id="dy5z7s"
http://localhost:5173
```

## Swagger API

```txt id="c7q9mf"
http://localhost:8080/swagger
```

---

# Backend Setup (Without Docker)

## 1. Open the solution

Open:

```txt id="jtx0mf"
Shva.TransactionSimulator.sln
```

using Visual Studio.

---

## 2. Configure SQL Server

Update the connection string inside:

```txt id="u6rpnm"
appsettings.json
```

Example:

```json id="7zqg2u"
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost,1433;Database=ShvaTransactionSimulatorDb;User Id=sa;Password=YourStrong!Pass123;TrustServerCertificate=True;"
}
```

---

## 3. Run Entity Framework Migration

Install Entity Framework tool if needed:

```bash id="4n6m3x"
dotnet tool install --global dotnet-ef
```

Run migration:

```bash id="4sqj2r"
dotnet ef database update
```

This will automatically create the database and tables.

---

## 4. Run the Backend

```bash id="q3zjlwm"
dotnet run
```

Swagger will open automatically.

---

# Frontend Setup (Without Docker)

## 1. Navigate to the client folder

```bash id="5k4m7p"
cd shva-transaction-simulator-client
```

---

## 2. Install dependencies

```bash id="7c5xna"
npm install
```

---

## 3. Run the frontend

```bash id="v3r8fa"
npm run dev
```

The application will run on:

```txt id="1dx8kv"
http://localhost:5173
```

---

# API Endpoints

# Simulate Transaction

## POST

```txt id="h5r4kp"
/api/transactions/simulate
```

## Request Body

```json id="ykq0uz"
{
  "region": "Japan",
  "submittedUtc": "2026-06-25T10:00:00Z"
}
```

## Response

```json id="2m0z6t"
{
  "status": "Approved",
  "localTime": "2026-06-25T13:00:00"
}
```

---

# Get Approved Transactions

## GET

```txt id="mqwhpv"
/api/transactions/approved
```

Returns all approved transactions from the database.

---

# Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Tablet
* Mobile devices

---

# Localization

The application supports:

* English
* Hebrew
* RTL / LTR layout switching

---

# Docker Architecture

The project uses Docker Compose to run:

* Frontend container
* Backend container
* SQL Server container

All services communicate together through Docker networking.

---

# Future Improvements

Possible future enhancements:

* Authentication (Login / Signup)
* Advanced filtering
* Pagination
* Unit tests
* Integration tests
* Role management

---

# Demo Video

A short demo video is included with the submission.

---

# Author

Developed as part of the Shva Full-stack Developer Interview Task.
