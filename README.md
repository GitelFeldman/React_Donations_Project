
# 🎉 Campaign Website - Final Project in React 🎉

## Project Description
This is a final project built in React. The website's purpose is to manage a fundraising campaign. There will be two main screens: the **Donations** page and the **Donate** page, which are accessible via a NavBar.

## 🚀 Key Features

### 1. Donations Component
This component displays the campaign image on one side and a summary of the campaign on the other side, including:

- The percentage of donations towards the goal 
- A summary of donations up to the current time 
- The target amount for the campaign 
- The number of donors 

Example:

- **Goal:** $5000
- **Donations So Far:** $2500 (50%) 
- **Number of Donors:** 100 

---

### 2. Donation Component
This component displays:

- The name of the donor 
- The dedication message 
- The donation amount 
- Time passed since the donation was made (e.g., "2 hours ago" )

---

### 3. Donation List Component
This component will map over an array of donations, rendering each donation using the **Donation Component**. It will receive the appropriate props, such as:

- Donor Name 
- Dedication Message 
- Donation Amount 
- Time Passed 

---

### 4. Donation Sorting
Allow sorting of donations by:

- Newest/Oldest 🗓
- Highest/Lowest donation amount 

---

### 5. Donation Search
Implement a search feature that allows users to search for donations by:

- Donor Name 
- Dedication Message 

---

### 6. Donate Page
The **Donate** page will display a form to allow users to add a donation. The form will collect:

- The donation amount 
- The donor's name 
- The dedication message 

#### Form Validation:
Use **react-hook-form** for form validation and handle the collection of valid data. 

#### Saving Donations:
Each donation will be saved in an array along with the donation date and time .

---

### 7. Theme Switching
Allow the user to switch the site's theme (light/dark mode)  by clicking a **"Change Theme"** button. This will update both the background color and text color.

---

### 8. Currency Conversion
Allow users to switch between **Shekel (₪)** and **Dollar ($)** currencies .

#### Currency API:
Fetch the current exchange rate from **ExchangeRate API** and update all the screens to reflect the selected currency (either Shekel or Dollar) .

---

### 9. Currency Change Notification
When the user changes the currency, show a notification indicating the change for 3 seconds .

---

### 10. Design with MUI
The site will be styled using **Material-UI (MUI)** for a modern, responsive design.

---

## 🛠️ Technologies and Tools Used

- **React.js**: For building the user interface and components.
- **React Router**: For navigation between the Donation and Donate pages.
- **React Hook Form**: For managing and validating the donation form.
- **Axios**: For making HTTP requests to fetch the exchange rate API.
- **Material-UI (MUI)**: For responsive and modern styling of the UI.
- **Context API**: For theme management (light/dark mode).
- **ExchangeRate API**: To fetch the exchange rate and convert currencies.

