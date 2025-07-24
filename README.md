# Hardcover TRMNL

[Hardcover](https://hardcover.app) is a social network for book lovers to find life changing books, track what you read & want to read, and connect with passionate readers. 

This [TRMNL](https://usetrmnl.com/) plugin displays your account statistics and goals, as well as the books you've recently read, are currently reading, or want to read.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/hardcover_trmnl.git
cd hardcover_trmnl
```

### 2. Install TRMNLP

[trmnlp](https://github.com/usetrmnl/trmnlp) is a basic self-hosted web server to ease the development and sharing of TRMNL plugins.

### 3. Configure `.trmnlp.yml`

Copy the example configuration or create a `.trmnlp.yml` file in the project root:

```yaml
# .trmnlp.yml
# TRMNLP configuration
---
watch:
  - .trmnlp.yml
  - src

custom_fields:
  featuredArea: 'recently_read'
  bearerToken: ""  # Add your bearer token here

variables:
  trmnl: {}
```

**Note:**  
`.trmnlp.yml` is gitignored by default. If you need to set sensitive or environment-specific values (like `bearerToken`), do so here.

### 4. Run TRMNLP

To start TRMNLP in watch mode:

```bash
trmnlp serve
```

Or run other TRMNLP commands as needed.

## Project Structure

- `src/` - Main source code
- `.trmnlp.yml` - TRMNLP configuration (user-specific, not tracked by git)

## Contributing

Feel free to open issues or pull requests!