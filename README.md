Backend code repository: https://github.com/Damika-Anupama/Bank-Transaction-And-Loan-Processing-System-Backend/tree/main

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CSE-Semester3-Group7-Project/Frontend/">
    <img src="src/assets/uom.png" alt="Logo" width="100" height="100" style = "margin: 0 50px 0 0">
    <img src="src/assets/logo.png" alt="Logo" width="250" height="100" margin="0 10 0">
  </a>

  <h3 align="center">Bank Transaction And Loan Processing System - Frontend</h3>

  <p align="center">
    A Group Project Done by Group No. 7 for Semester 3 Module CS3043 - Database Systems
    <br />
    <a href="https://github.com/CSE-Semester3-Group7-Project/Frontend/blob/main/assets/ProjectDescription.pdf"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CSE-Semester3-Group7-Project/Frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/CSE-Semester3-Group7-Project/Frontend/pulls">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align = center>
  <img src="src/assets/logo1.png" alt="Logo" width="400" height="350" style = "margin: 50px">
</div>
<br>
This is the main group project given by the Computer Science Department, University of Moratuwa in the Semester 3 CS3043 - Database Systems Module. Here contains the Frontend of the Bank Transaction And Loan Processing System. If you want to go to the backend of this application, you can find it by following this <a href="https://github.com/CSE-Semester3-Group7-Project/Backend">link</a>.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With
<br>

- [![AngularCLI](https://img.shields.io/badge/AngularCLI-15-red.svg?logo=angular)](https://angular.io/)
- [![TypeScript](https://img.shields.io/badge/TypeScript-3.9-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
- [![ECMAScript](https://img.shields.io/badge/ECMAScript-2020-yellow.svg?logo=javascript)](https://www.ecma-international.org/ecma-262/11.0/index.html)
- [![jQuery](https://img.shields.io/badge/jQuery-3.6-green.svg?logo=jquery)](https://jquery.com/)
- [![HTML5](https://img.shields.io/badge/HTML5-5.2-orange.svg?logo=html5)](https://www.w3.org/TR/html52/)
- [![Sass](https://img.shields.io/badge/Sass-1.26-pink.svg?logo=sass)](https://sass-lang.com/)
- [![CSS3](https://img.shields.io/badge/CSS3-3.0-purple.svg?logo=css3)](https://www.w3.org/TR/css-2018/)
- [![Bootstrap](https://img.shields.io/badge/Bootstrap-4.6-yellowgreen.svg?logo=bootstrap)](https://getbootstrap.com/)
- [![AdminLTE3](https://img.shields.io/badge/AdminLTE3-3.0-lightgrey.svg?logo=adminlte&logoColor=white)](https://adminlte.io/)
- [![Webpack](https://img.shields.io/badge/Webpack-5.5-blue.svg?logo=webpack)](https://webpack.js.org/)
- [![Git](https://img.shields.io/badge/Git-2.28-lightblue.svg?logo=git)](https://git-scm.com/)
- [![JWT Tokens](https://img.shields.io/badge/JWT%20Tokens-0.2-lightpurple.svg?logo=jwt&logoColor=white)](https://jwt.io/)
- [![Node](https://img.shields.io/badge/Node-14.12-lightgreen.svg?logo=node.js)](https://nodejs.org/)
- [![npm](https://img.shields.io/badge/npm-7.0-lightred.svg?logo=npm)](https://www.npmjs.com/)
- [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-1.52-blue.svg?logo=visual-studio-code)](https://code.visualstudio.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CSE-Semester3-Group7-Project/Frontend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Prerequisites

Before running the frontend, ensure you have:
1. **Node.js** (v14.x or higher) and **npm** installed
2. **Backend server** running on `http://localhost:3000` (see Backend README)
3. **MySQL database** with imported data (see Backend README for Docker setup)

### Step 1: Install Dependencies

From the Frontend directory, run:
```sh
npm install
```

This will install all required packages including:
- Angular 15
- Bootstrap 5.2
- AdminLTE 3.2
- Chart.js
- ngx-toastr
- and other dependencies

### Step 2: Start the Development Server

```sh
npm start
```

Or use Angular CLI directly:
```sh
ng serve
```

The application will:
- Compile and build the Angular application
- Start a development server at `http://localhost:4200`
- Watch for file changes and auto-reload

### Step 3: Access the Application

1. **Open your browser** and navigate to: `http://localhost:4200`

2. **You will see the Welcome page** with two options:
   - Sign In
   - Sign Up

3. **Click "Sign In"** to access the login page

### Step 4: Login with Test Accounts

The system has **three user types** with different dashboards and permissions:

#### 1. Customer Dashboard
- **Email:** damikaanupama@gmail.com
- **Password:** 1234

**Features Available:**
- View account balance and details
- Transfer money to other accounts
- Withdraw cash
- Apply for loans online (with fixed deposit collateral)
- Create and manage fixed deposits
- View transaction history
- Update profile settings

#### 2. Employee Dashboard
- **Email:** nimalnimal@gmail.com
- **Password:** 4567

**Features Available:**
- Register new customers
- Create manual loans for customers
- Process customer withdrawals
- View employee statistics
- Update profile settings

#### 3. Manager Dashboard
- **Email:** jkesoni@alexa.com
- **Password:** Jewelle

**Features Available:**
- Approve or reject loan applications
- Add new employees to the system
- View loan approval statistics
- Monitor branch performance
- Update profile settings

### Application Routes

Once logged in, the application uses role-based routing:

- **Customer:** `/dashboard/*`
  - `/dashboard/home` - Account overview
  - `/dashboard/transaction` - Transfer money
  - `/dashboard/loan` - Apply for loans
  - `/dashboard/fixed-deposit` - Manage FDs
  - `/dashboard/settings` - Profile settings

- **Employee:** `/employee-dashboard/*`
  - `/employee-dashboard/employee-home` - Dashboard overview
  - `/employee-dashboard/employee.register.customer` - Register customers
  - `/employee-dashboard/employee.create.loan` - Create loans
  - `/employee-dashboard/employee.withdrawal` - Process withdrawals
  - `/employee-dashboard/employee.settings` - Profile settings

- **Manager:** `/manager-dashboard/*`
  - `/manager-dashboard/manager-home` - Dashboard overview
  - `/manager-dashboard/manager.loan.approval` - Approve loans
  - `/manager-dashboard/manager.add.employee` - Add employees
  - `/manager-dashboard/manager.settings` - Profile settings

### Environment Configuration

The application connects to the backend API using configuration in:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

**Default Backend URL:** `http://localhost:3000/api/v1/`

To change the backend URL, edit `environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1/'
};
```

### Building for Production

To create a production build:
```sh
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

### Troubleshooting

**Port 4200 already in use:**
```sh
ng serve --port 4201
```

**Backend connection errors:**
- Ensure backend is running on `http://localhost:3000`
- Check CORS is enabled on backend
- Verify MySQL container/database is running

**Authentication issues:**
- JWT tokens are stored in localStorage
- Tokens expire after 2 hours
- Clear localStorage and login again if needed

### Stopping the Application

Press `Ctrl+C` in the terminal to stop the development server.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/customBranch`)
3. Commit your Changes (`git commit -m 'Add some item'`)
4. Push to the Branch (`git push origin feature/customBranch`)
5. Open a Pull Request
6. Buying a Coffee <br>
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-black?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/damiBauY)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [Node Icons](https://Node-icons.github.io/Node-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/CSE-Semester3-Group7-Project/Frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/CSE-Semester3-Group7-Project/Frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CSE-Semester3-Group7-Project/Frontend.svg?style=for-the-badge
[forks-url]: https://github.com/CSE-Semester3-Group7-Project/Frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/CSE-Semester3-Group7-Project/Frontend.svg?style=for-the-badge
[stars-url]: https://github.com/CSE-Semester3-Group7-Project/Frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/CSE-Semester3-Group7-Project/Frontend.svg?style=for-the-badge
[issues-url]: https://github.com/CSE-Semester3-Group7-Project/Frontend/issues
[license-shield]: https://img.shields.io/github/license/CSE-Semester3-Group7-Project/Frontend.svg?style=for-the-badge
[license-url]: https://github.com/CSE-Semester3-Group7-Project/Frontend/LICENSE
