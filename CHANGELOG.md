# Changelog

# Changelog

## [2.1.0] - 2024-06-27
### Added
- Service layer for business logic, separating it from controllers.
- Services for v1 and v2 to handle business logic.
- Updated Controllers to use Services for v1 and v2.

## [2.0.0] - 2024-06-27
### Added
- Data Transfer Objects (DTOs) for v1 and v2.
- Data Access Objects (DAOs) for v1 and v2.
- Repositories to handle interactions with DAOs and DTOs for both versions.
- Controllers updated to support v1 and v2 versions.
- Enhanced project structure to support versioning with separate v1 and v2 endpoints.
- .gitignore to ignore node_modules and dist directories.
- Updated README with new project structure and instructions.
- Updated Swagger YAML with examples and versioning information.
- Verified functionality using Postman.

### Changed
- Aligned field names with Google People API.
- Updated field structure to match Google People API requirements.
- Expanded fields to include:
  - **Names**: Prefix, given name (first name), middle name, family name (last name), suffix, phonetic names.
  - **Nicknames**: Nickname.
  - **Organizations**: Company, department, title.
  - **Addresses**: Street address, city, region, country, postal code, address type.
  - **URLs**: Website.
  - **Relationships**: Related person, relationship type.
  - **Notes**: Content.
  - **Phone Numbers**: Value, type.
  - **Email Addresses**: Value, type.
  - **Events**: Date, type.
  - **User Defined Fields**: Key, value.
  - **Biographies**: Content.
  - **Instant Messaging (IM) Clients**: Protocol, username.
  - **Occupations**: Title, company.
  - **Memberships**: Type, domain.
- Updated SwaggerHub to reflect new endpoints and data structures.

## [1.0.1] - 2024-06-25
### Added
- API versioning: Added `/api/v1/` prefix to all endpoints.
- Documentation: Updated READMEs with versioned endpoints.

## [1.0.0] - 2024-06-25
### Added
- Initial release with basic contact management features:
  - CRUD operations for contacts.
  - Fields: picture, first name, last name, company, multiple phone numbers, emails, significant dates.
  - Data validation using Mongoose.
  - API documentation with Swagger.
