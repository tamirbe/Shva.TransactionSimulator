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

# Database Initialization Issue (Docker)

If the application starts successfully but API requests fail with a database connection error such as:

```txt
Error Number:4060
Cannot open database
```

this means that SQL Server is running, but the database or tables were not created yet.

In this case, run the Entity Framework migration manually.

---

## Step 1 — Configure Docker SQL connection string

Inside:

```txt
appsettings.json
```

use:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost,1433;Database=ShvaTransactionSimulatorDb;User Id=sa;Password=YourStrong!Pass123;TrustServerCertificate=True;"
}
```

---

## Step 2 — Run Entity Framework migration locally

Navigate to:

```txt
Shva.TransactionSimulator.Api
```

then run:

```bash
dotnet ef database update
```

If `dotnet ef` is not installed:

```bash
dotnet tool install --global dotnet-ef
```

---

## Step 3 — Restart Docker containers

From the project root folder run:

```bash
docker compose restart
```

After restarting, the API and database should work correctly.

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

# Running the Project Locally (Without Docker)

## Backend Setup

### 1. Open the solution

Open:

```txt
Shva.TransactionSimulator.sln
```

using Visual Studio.

---

### 2. Configure SQL Server Connection

Inside:

```txt
Shva.TransactionSimulator.Api/appsettings.json
```

set the connection string to:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=ShvaTransactionSimulatorDb;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

---

### 3. Install Entity Framework Tool

```bash
dotnet tool install --global dotnet-ef
```

---

### 4. Run Database Migration

Navigate to:

```bash
cd Shva.TransactionSimulator.Api
```

Run:

```bash
dotnet ef database update
```

This command automatically creates the database and tables.

---

### 5. Run the Backend API

```bash
dotnet run
```

Swagger will open automatically.

Example:

```txt
https://localhost:44396/swagger
```

---

# Frontend Setup

### 1. Navigate to the client folder

```bash
cd shva-transaction-simulator-client
```

---

### 2. Configure API URL

Inside:

```txt
src/services/transactionService.js
```

set:

```javascript
const API_URL = 'https://localhost:44396/api/Transactions';
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Run the frontend

```bash
npm run dev
```

Frontend URL:

```txt
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
