## Installation

* Fork the repository `https://github.com/minical/minical` or clone it locally.
* Install the stable version of PHP 7.3.0, MySQL 5.0.4, and OS-specific dependency tools.
* Create a MySql database with any name.
* Do the basic [configuration updates](https://github.com/minical/minical/wiki/configuration) on the public->build.json file.
* Create a new file named ".env" by copying the .env.example file which is located in the root. 
* Update database credentials in .env file in .env file
* Set Environment variable to either 'development' or 'production' in .env file
* Update Project URL (Url pointing to public folder in minical project like http://localhost/minical/public) in .env file
* Update API Url (Url pointing to api folder in minical project like http://localhost/minical/api) in .env file, for more details check the [.env example](https://github.com/minical/minical/wiki/.env-example).
* Install composer dependencies by running the "composer install" command on your project root.
* Install miniCal Database by going to `http://localhost/minical/public/install.php` in your browser, follow the installation steps and create an admin account.
* That's it. You are done! Visit miniCal at `http://localhost/minical/public`