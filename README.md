# Craft CMS + Tailwind CSS Boilerplate

A Craft CMS boilerplate configured together with TailwindCSS

## Requirements

- PHP 8.0.2+
- MySQL 5.7.8+ or PostgreSQL 10+
- Nodejs

## Installation

1.  Clone this repository
2.  Install the dependencies.

```sh
cd project-folder
composer install
npm install
```

3. Copy .env.example.\* to .env

```sh
cp .env.example.dev .env
```

4. Run craft setup

```sh
./craft setup
```

5. Run development server

```sh
npm run dev
```

6. For production release

```sh
npm run prod
```
