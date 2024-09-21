# Project Setup Guide

This guide provides detailed instructions for setting up the necessary software and configurations for your project. Follow these steps carefully to ensure everything is installed and configured correctly.

---

## Table of Contents

1. [Installing LibreOffice](#1-installing-libreoffice)
2. [Installing GraphicsMagick](#2-installing-graphicsmagick)
3. [Installing GhostScript](#3-installing-ghostscript)
4. [Installing ImageMagick](#4-installing-imagemagick)
5. [Setting Up SSL with Nginx](#5-setting-up-ssl-with-nginx)
6. [Configuring Git on Ubuntu](#6-configuring-git-on-ubuntu)
7. [Installing Node.js on Ubuntu 18.04 LTS (AWS)](#7-installing-nodejs-on-ubuntu-1804-lts-aws)
8. [Installing PM2](#8-installing-pm2)

---

## 1. Installing LibreOffice

To install LibreOffice on Ubuntu 16.04, open a terminal and run the following commands:

```bash
sudo add-apt-repository ppa:libreoffice/ppa
sudo apt update
sudo apt install libreoffice
```

For more details, refer to the [installation guide](https://www.liquidweb.com/kb/installing-libreoffice-on-ubuntu-16-04/).

---

## 2. Installing GraphicsMagick

GraphicsMagick is essential for image processing. To install it along with the necessary dependencies, follow these steps:

1. Update your system:

    ```bash
    sudo apt-get update
    sudo apt-get install libpng12-0 libjpeg-dev ghostscript libtiff5-dev libfreetype6
    ```

2. Download and install GraphicsMagick:

   You can either:

   - Download directly using:

    ```bash
    wget ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/1.3/GraphicsMagick-1.3.30.tar.gz
    ```

   - Alternatively, download the file from the `lib` folder of this repository and upload it to your server via FTP.

   Then run the following commands:

    ```bash
    tar xzvf GraphicsMagick-1.3.30.tar.gz
    cd GraphicsMagick-1.3.30
    ./configure
    sudo apt-get install build-essential
    make
    sudo make install
    ```

3. Verify the installation:

    ```bash
    gm version
    ```

For more information, check out this [detailed guide](https://gist.github.com/neoneye/00fad388e38f5b0361f66cc1a3b2f57e).

---

## 3. Installing GhostScript

GhostScript is essential for handling PDF files. Install it using the following command:

```bash
sudo apt-get update
sudo apt -y install ghostscript
```

---

## 4. Installing ImageMagick

ImageMagick is a powerful tool for image manipulation. Follow these steps to install and configure it for handling PDFs:

1. Install ImageMagick:

    ```bash
    sudo apt update
    sudo apt install imagemagick
    identify -version
    ```

2. Update the ImageMagick PDF policy:

    ```bash
    sudo nano /etc/ImageMagick-6/policy.xml
    ```

   Change:

   ```xml
   <policy domain="coder" rights="none" pattern="PDF" />
   ```

   To:

   ```xml
   <policy domain="coder" rights="read|write" pattern="PDF" />
   ```

   Save the changes by pressing `Ctrl + X`, then `Y`, and `Enter`.

---

## 5. Setting Up SSL with Nginx

To secure your Nginx server using a Let's Encrypt SSL certificate, follow this [DigitalOcean guide](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04).

### Step 1: Install Nginx

1. Update the package list:

    ```bash
    sudo apt update
    ```

2. Install Nginx:

    ```bash
    sudo apt install nginx
    ```

3. Configure the firewall to allow Nginx traffic:

    ```bash
    sudo ufw app list
    sudo ufw allow 'Nginx FULL'
    sudo ufw status
    ```

4. If the firewall is inactive, enable it:

    ```bash
    sudo ufw enable
    ```

5. Check firewall status:

    ```bash
    sudo ufw status verbose
    ```

6. Allow specific ports:

    ```bash
    sudo ufw allow ssh
    sudo ufw allow 22/tcp
    sudo ufw allow 443/tcp
    sudo ufw allow 80/tcp
    sudo ufw allow 9000/tcp
    ```

7. Reload Nginx:

    ```bash
    sudo systemctl reload nginx
    ```

### Step 2: Configure Nginx for Your Domain

1. Edit the Nginx default site configuration:

    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```

2. Update the server block:

    ```nginx
    server {
        server_name <your_domain>.com www.<your_domain>.com <your_domain>.in www.<your_domain>.in; # Add domains

        location / {
            proxy_pass http://localhost:9000;
        }
    }
    ```

3. Test the Nginx configuration:

    ```bash
    sudo nginx -t
    ```

4. Restart Nginx:

    ```bash
    sudo systemctl restart nginx
    ```

### Step 3: Install and Configure SSL Certificates

1. Install Certbot and set up the symbolic link:

    ```bash
    sudo snap install --classic certbot
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    ```

2. Obtain SSL certificates for your domain:

    ```bash
    sudo certbot --nginx -d <your_domain>.com -d www.<your_domain>.com -d <your_domain>.in -d www.<your_domain>.in
    ```

3. Test the certificate renewal process:

    ```bash
    sudo certbot renew --dry-run
    ```

4. Update Nginx configuration and restart:

    Edit the default site configuration:

    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```

    Update the server block:

    ```nginx
    server {
        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;

        server_name <your_domain>.com www.<your_domain>.com <your_domain>.in www.<your_domain>.in;

        location / {
            proxy_pass http://localhost:9000;
        }
    }
    ```

    Test the configuration and restart Nginx:

    ```bash
    sudo nginx -t
    sudo systemctl restart nginx
    ```

---

## 6. Configuring Git on Ubuntu

Configure Git by setting your name and email:

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --list
```

Clone your repository:

```bash
git clone https://github.com/hritwij-shrivastava/MERN_Stack_Portfolio.git
```

---

## 7. Installing Node.js on Ubuntu 18.04 LTS (AWS)

Install Node.js on your AWS Ubuntu instance:

1. Update the system and check Node.js policies:

    ```bash
    sudo apt update
    sudo apt policy nodejs
    ```

2. Install Node.js from NodeSource:

    ```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install nodejs
    node -v
    ```

Alternatively, install Node.js using NVM (Node Version Manager):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 16.14.2
nvm list
```

After installation, navigate to your backend folder:

```bash
cd /home/ubuntu/jenkins/workspace/backend
npm install
```

---

## 8. Create a `.env` File

To configure your backend environment, create a `.env` file in the backend folder with the following variables:

```plaintext
SECRET_KEY_FOR_REGISTRATION=
SECRET_KEY_FOR_GOOGLE=
GOOGLE_API_URL=
SECRET_OR_KEY=
MONGO_URI=
```

Ensure to replace the placeholders with your actual values before running your application. This file is crucial for securely managing sensitive information and configuration settings.

---

## 9. Installing PM2

PM2 is a production process manager for Node.js applications. To install it globally, use:

```bash
sudo npm install pm2@3.1.0 -g
```

Finally, start your Node.js app with PM2:

```bash
cd /home/ubuntu/backend
pm2 start src/index.js
pm2 restart src/index.js
```

### Troubleshooting PM2

If you encounter difficulties or errors with PM2, consider installing `forever` as an alternative:

1. **Install `forever` globally:**

    ```bash
    sudo npm install -g forever
    ```

2. **Start the application with Forever:**

    ```bash
    forever start backend/dist/frontend/server/server.mjs
    ```

---

### Useful Forever Commands

- **List running forever processes:**

    ```bash
    forever list
    ```

- **Stop the application:**

    ```bash
    forever stop backend/dist/frontend/server/server.mjs
    ```

---

By following this guide, you will have a fully functional setup for your project, ready for development and deployment. If you encounter any issues, consult the documentation for each tool or reach out to the community for assistance.