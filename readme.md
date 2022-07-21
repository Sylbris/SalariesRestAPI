### Exercise A: Expose an API for querying compensation data

The goal of this exercise is to design a read-only API (REST or GraphAPI) that returns one or more records from static set of compensation data.

#### User Story: As a developer I want to

* list compensation data via API `GET` request
  * Filter by one or more fields/attributes (e.g. `/compensation_data?salary[gte]=120000&zip_code=11201` )
  * Sort by one or more fields/attributes (e.g. `/compensation_data?sort=last_name`)
* fetch a single record via GET request
  * **Stretch Goal**: return a sparse fieldset (e.g. `/compensation_data?fields=first_name,last_name,salary`)
* have the JSON response be normalized into a uniform schema via a serializer or json template
  * **Stretch Goal**: serialize more than one compensation [data set](/shared/salary_datasets)

### A few quick notes on submitting Exercise A

* Don't worry about any web application concerns other than serializing JSON and returning via a GET request.
* The example above (`/compensation_data`...) is not a contract. Feel free to design the URL structure and JSON schema that you believe creates the best client/consumer experience
