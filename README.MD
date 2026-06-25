# Shva Transaction Approval Simulator

A full-stack transaction approval simulator built with **React**, **.NET Web API**, and **MSSQL** as part of the Shva Full-stack Developer Interview Task.

The application simulates transaction approvals based on local banking hours in different regions around the world.

---

# Features

## Frontend

* Modern React application
* Fully responsive design
* Figma-based UI implementation
* Transaction simulation form
* Approved transactions carousel
* Loading and error states
* Component-based architecture

## Backend

* RESTful .NET Web API
* Transaction approval business logic
* Time zone conversion by selected region
* MSSQL database integration
* Entity Framework Core

## Database

* Stores all transactions
* Retrieves approved transactions only

---

# Business Logic

A transaction is considered **Approved** only if the selected local time falls between:

08:00 - 18:00

according to the selected region's local time zone.

Supported regions:

* Israel
* France
* USA
* Japan

Otherwise, the transaction is marked as **Rejected**.

---

# Technologies Used

## Frontend

* React
* Vite
* CSS Modules / CSS

## Backend

* ASP.NET Core Web API
* C#
* Entity Framework Core

## Database

* Microsoft SQL Server

---

# Project Structure

```txt
Shva.TransactionSimulator/
│
├── Shva.TransactionSimulator.Api
│
├── shva-transaction-simulator-client
│
└── README.md
```

---

# Backend Setup

## 1. Open the solution

Open:

```txt
Shva.TransactionSimulator.sln
```

using Visual Studio.

---

## 2. Configure SQL Server

Make sure SQL Server is installed and running.

Update the connection string in:

```txt
appsettings.json
```

Example:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=ShvaTransactionSimulatorDb;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

---

## 3. Run Entity Framework Migration

Open Package Manager Console:

```powershell
Update-Database
```

This will create the database and tables automatically.

---

## 4. Run the Backend

Press:

```txt
F5
```

or run:

```powershell
dotnet run
```

Swagger will open automatically.

Example:

```txt
https://localhost:xxxx/swagger
```

---

# Frontend Setup

## 1. Navigate to the client folder

```powershell
cd shva-transaction-simulator-client
```

---

## 2. Install dependencies

```powershell
npm install
```

---

## 3. Run the frontend

```powershell
npm run dev
```

The application will run on:

```txt
http://localhost:5173
```

---

# API Endpoints

## Simulate Transaction

### POST

```txt
/api/transactions/simulate
```

### Request Body

```json
{
  "region": "Japan",
  "submittedUtc": "2026-06-25T10:00:00Z"
}
```

### Response

```json
{
  "status": "Approved",
  "localTime": "2026-06-25T13:00:00"
}
```

---

## Get Approved Transactions

### GET

```txt
/api/transactions/approved
```

Returns all approved transactions from the database.

---

# Responsive Design

The application is fully responsive and supports:

* Desktop
* Tablet
* Mobile devices

---

# Future Improvements

Possible future enhancements:

* Localization (ENG / Hebrew)
* RTL support
* Authentication
* Docker Compose setup
* Advanced transaction filtering

---

# Demo Video

A short demo video is included with the submission.

---

# Author

Developed as part of the Shva Full-stack Developer Interview Task.
