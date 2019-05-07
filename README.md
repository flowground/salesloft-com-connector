# ![LOGO](logo.png) SalesLoft Platform **flow**ground Connector

## Description

A generated **flow**ground connector for the SalesLoft Platform API (version v2).

Generated from: https://api.apis.guru/v2/specs/salesloft.com/v2/swagger.json<br/>
Generated at: 2019-05-07T17:43:57+03:00

## API Description

SalesLoft helps transform sales teams into modern sales organizations  - converting more target accounts into customer accounts


## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### List accounts

> Fetches multiple account records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Accounts`

#### Input Parameters
* `ids` - _optional_ - IDs of accounts to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `domain` - _optional_ - Domain of the accounts to fetch. Domains are unique and lowercase
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at, last_contacted_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Create an account

> Creates an account.<br/>
> <br/>
> "domain" must be unique on the current team.

*Tags:* `Accounts`

### Delete an account

> Deletes an account. This operation is not reversible without contacting support.<br/>
> This operation can be called multiple times successfully.<br/>
> <br/>
> Deleting an account will remove all connected people from that account.

*Tags:* `Accounts`

#### Input Parameters
* `id` - _required_ - Account ID

### Fetch an account

> Fetches an account, by ID only.

*Tags:* `Accounts`

#### Input Parameters
* `id` - _required_ - Account ID

### Update an existing Account

> Updates an account.<br/>
> <br/>
> "domain" must be unique on the current team.

*Tags:* `Accounts`

#### Input Parameters
* `id` - _required_ - Account ID

### List call instructions

> Fetches multiple call instruction records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Action Details - Call Instructions`

#### Input Parameters
* `ids` - _optional_ - IDs of call instructions to fetch.
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch a call instructions

> Fetches a call instruction, by ID only.

*Tags:* `Action Details - Call Instructions`

#### Input Parameters
* `id` - _required_ - Call instructions ID

### List actions

> Fetches multiple action records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters. Only actions that are currently "in_progess" will be returned by<br/>
> this endpoint.

*Tags:* `Actions`

#### Input Parameters
* `ids` - _optional_ - IDs of actions to fetch.
* `step_id` - _optional_ - Fetch actions by step ID
* `type` - _optional_ - Filter actions by type
* `due_on` - _optional_ - Equality filters that are applied to the due_on field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch an action

> Fetches an action, by ID only.<br/>
> This endpoint will only return actions that are in_progress or pending_activity.<br/>
> Once an action is complete, the request for that action will return a 404 status code.

*Tags:* `Actions`

#### Input Parameters
* `id` - _required_ - Action ID

### List calls

> Fetches multiple call records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Calls`

#### Input Parameters
* `ids` - _optional_ - IDs of calls to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch a call

> Fetches a call, by ID only.

*Tags:* `Calls`

#### Input Parameters
* `id` - _required_ - Call ID

### List emails

> Fetches multiple email records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Emails`

#### Input Parameters
* `ids` - _optional_ - IDs of emails to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `bounced` - _optional_ - Filters emails by whether they have bounced or not
* `sort_by` - _optional_ - Key to sort on, must be one of: updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch an email

> Fetches an email, by ID only.

*Tags:* `Emails`

#### Input Parameters
* `id` - _required_ - Email ID

### List cadence memberships

> Fetches multiple cadence membership records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters. A cadence membership is the association between a person and their current and<br/>
> historical time on a cadence. Cadence membership records are mutable and change over time. If a person is<br/>
> added to a cadence and re-added to the same cadence in the future, there is a single membership record.

*Tags:* `Cadence Memberships`

#### Input Parameters
* `ids` - _optional_ - IDs of cadence memberships to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `person_id` - _optional_ - ID of the person to find cadence memberships for
* `cadence_id` - _optional_ - ID of the cadence to find cadence memberships for
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `sort_by` - _optional_ - Key to sort on, must be one of: updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Create a cadence membership

> Adds a person to a cadence. person_id and cadence_id are required, and must be visible to the authenticated user. user_id will<br/>
> default to the authenticated user, but can be set to any visible user on the authenticated team.<br/>
> <br/>
> A person cannot be added to a cadence on behalf of a teammate unless the cadence is a team cadence, or the cadence is owned by<br/>
> the teammate.

*Tags:* `Cadence Memberships`

#### Input Parameters
* `person_id` - _required_ - ID of the person to create a cadence membership for
* `cadence_id` - _required_ - ID of the cadence to create a cadence membership for
* `user_id` - _optional_ - ID of the user to create a cadence membership for. The associated cadence must be owned by the user, or it must be a team cadence

### Delete a cadence membership

*Tags:* `Cadence Memberships`

#### Input Parameters
* `id` - _required_ - CadenceMembership ID

### Fetch a cadence membership

> Fetches a cadence membership, by ID only.

*Tags:* `Cadence Memberships`

#### Input Parameters
* `id` - _required_ - CadenceMembership ID

### List cadences

> Fetches multiple cadence records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Cadences`

#### Input Parameters
* `ids` - _optional_ - IDs of cadences to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `team_cadence` - _optional_ - Filters cadences by whether they are a team cadence or not
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch a cadence

> Fetches a cadence, by ID only.

*Tags:* `Cadences`

#### Input Parameters
* `id` - _required_ - Cadence ID

### List call data records

> Fetches multiple call data records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.<br/>
> <br/>
> Call data records are records of all inbound and outbound calls through SalesLoft. A call data record may<br/>
> be associated with a call, but does not have to be.

*Tags:* `Call Data Records`

#### Input Parameters
* `ids` - _optional_ - IDs of call data records to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `has_call` - _optional_ - Return only call data records which have or do not have a call logged for them
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch a call data record

> Fetches a call data record, by ID only.

*Tags:* `Call Data Records`

#### Input Parameters
* `id` - _required_ - CallDataRecord ID

### List crm activities

> Fetches multiple crm activity records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `CRM Activities`

#### Input Parameters
* `ids` - _optional_ - IDs of crm activities to fetch.
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch a crm activity

> Fetches a crm activity, by ID only.

*Tags:* `CRM Activities`

#### Input Parameters
* `id` - _required_ - Crm activity ID

### List custom fields

> Fetches multiple custom field records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Custom Fields`

#### Input Parameters
* `ids` - _optional_ - IDs of custom fields to fetch.
* `field_type` - _optional_ - Type of field to fetch. Value must be one of: person, company, opportunity
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at, name. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Create a custom field

> Creates a custom field.

*Tags:* `Custom Fields`

### Delete a custom field

> Deletes a custom field.

*Tags:* `Custom Fields`

#### Input Parameters
* `id` - _required_ - Custom Field ID

### Fetch a custom field

> Fetches a custom field, by ID only.

*Tags:* `Custom Fields`

#### Input Parameters
* `id` - _required_ - Custom Field ID

### Update a custom field

> Update a custom field.

*Tags:* `Custom Fields`

#### Input Parameters
* `id` - _required_ - Custom Field ID

### List email templates

> Fetches multiple email template records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Email Templates`

#### Input Parameters
* `ids` - _optional_ - IDs of email templates to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `linked_to_team_template` - _optional_ - Filters email templates by whether they are linked to a team template or not
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at, last_used_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch an email template

> Fetches an email template, by ID only.

*Tags:* `Email Templates`

#### Input Parameters
* `id` - _required_ - EmailTemplate ID

### List imports

> Fetches multiple imports.

*Tags:* `Imports`

#### Input Parameters
* `ids` - _optional_ - IDs of imports to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `user_ids` - _optional_ - ID of users to fetch imports for. Using this filter will return an empty array for non-admin users who request other user's imports
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to created_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Create an import

> Creates an import.

*Tags:* `Imports`

### Delete an import

> Deletes an import, by ID only. The associated people can be deleted as part of the deletion process.<br/>
> <br/>
> Admin users can access imports for the entire team, but non-admin users can only access their own imports.

*Tags:* `Imports`

#### Input Parameters
* `id` - _required_ - Import ID
* `undo` - _optional_ - Whether to delete people on this Import. Possible values are: [not present], all, single.

'single' will delete people who are only present in this Import.
'all' will delete people even if they are present in other Imports.
Not specifying this parameter will not delete any people


### Fetch an import

> Fetches an import, by ID only.<br/>
> <br/>
> Admin users can access imports for the entire team, but non-admin users can only access their own imports.

*Tags:* `Imports`

#### Input Parameters
* `id` - _required_ - Import ID

### Update an import

> Updates an import, by ID only.<br/>
> <br/>
> Admin users can access imports for the entire team, but non-admin users can only access their own imports.

*Tags:* `Imports`

#### Input Parameters
* `id` - _required_ - Import ID

### Fetch current user

> Authenticated user information. This endpoint does not accept any parameters as it is<br/>
> represents your authenticated user. The "Users" resource provides user information<br/>
> for other users on the team.

*Tags:* `Me`

### List notes

> Fetches multiple note records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Notes`

#### Input Parameters
* `associated_with_type` - _optional_ - Case insensitive type of item with which the note is associated.  Value must be one of: person, account
* `associated_with_id` - _optional_ - ID of the item with which the note is associated.  The associated_with_type must also be present if this parameter is used
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `ids` - _optional_ - IDs of notes to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Create a note

> Creates a note.

*Tags:* `Notes`

### Fetch a note

> Fetches a note, by ID only.

*Tags:* `Notes`

#### Input Parameters
* `id` - _required_ - Note ID

### Update a note

> Updates a note. Any changes to the note or associated records will not reflect in Salesforce.com.

*Tags:* `Notes`

#### Input Parameters
* `id` - _required_ - Note ID

### List people

> Fetches multiple person records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `People`

#### Input Parameters
* `ids` - _optional_ - IDs of people to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `email_addresses` - _optional_ - Filters people by email address
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at, last_contacted_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Create a person

> Creates a person. Either email_address or phone/last_name must be provided as a unique lookup<br/>
> on the team.

*Tags:* `People`

### Delete a person

> Deletes a person. This operation is not reversible without contacting support.<br/>
> This operation can be called multiple times successfully.

*Tags:* `People`

#### Input Parameters
* `id` - _required_ - Person id

### Fetch a person

> Fetches a person, by ID only.

*Tags:* `People`

#### Input Parameters
* `id` - _required_ - Person ID

### Update a person

> Updates a person.

*Tags:* `People`

#### Input Parameters
* `id` - _required_ - Person id

### List person stages

> Fetches multiple person stage records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Person Stages`

#### Input Parameters
* `ids` - _optional_ - IDs of person stages to fetch.
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Create a person stage

> Creates a person stage.

*Tags:* `Person Stages`

### Delete an person stage

> Deletes a person stage. This operation is not reversible without contacting support.<br/>
> This operation can be called multiple times successfully.

*Tags:* `Person Stages`

#### Input Parameters
* `id` - _required_ - Stage ID

### Fetch a person stage

> Fetches a person stage, by ID only.

*Tags:* `Person Stages`

#### Input Parameters
* `id` - _required_ - Stage ID

### Update a person stage

> Updates a person stage.

*Tags:* `Person Stages`

#### Input Parameters
* `id` - _required_ - Stage ID

### List caller ids

> Each entry is a possible caller ID match for the number. Multiple<br/>
> entries may be returned if the phone number is present on more than one<br/>
> person in the system.  Phone number should be in E.164 format.

*Tags:* `Caller IDs`

#### Input Parameters
* `phone_number` - _required_ - E.164 Phone Number

### Fetch recording setting

> Fetches the recording status for a given phone number, based on Do Not Record and Recording Governance for your team.<br/>
> Phone number should be in E.164 format.

*Tags:* `Recording Settings`

#### Input Parameters
* `id` - _required_ - E.164 Phone Number

### List steps

> Fetches multiple step records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Steps`

#### Input Parameters
* `ids` - _optional_ - IDs of steps to fetch.
* `cadence_id` - _optional_ - Filter by cadence ID
* `type` - _optional_ - Filter by step type
* `has_due_actions` - _optional_ - Filter by whether a step has due actions
* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch a step

> Fetches a step, by ID only.

*Tags:* `Steps`

#### Input Parameters
* `id` - _required_ - Step ID

### List successes

> Fetches multiple success records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.

*Tags:* `Successes`

#### Input Parameters
* `ids` - _optional_ - IDs of successes to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at, succeeded_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch current team

> Fetches the team of the authenticated user.

*Tags:* `Team`

### List team templates

> Fetches multiple team template records. The records can be filtered, paged, and sorted according to<br/>
> the respective parameters.<br/>
> <br/>
> Team templates are templates that are available team-wide. Admins may use<br/>
> team templates to create original content for the entire team, monitor version control to ensure templates are always up to date,<br/>
> and track template performance across the entire organization. All metrics on a team template reflect usage across the team; individual metrics can be found with the email_templates API endpoint.

*Tags:* `Team Templates`

#### Input Parameters
* `ids` - _optional_ - IDs of team templates to fetch. If a record can't be found, that record won't be returned and your request will be successful
* `updated_at` - _optional_ - Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
---CUSTOM---
{"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}

* `sort_by` - _optional_ - Key to sort on, must be one of: created_at, updated_at, last_used_at. Defaults to updated_at
* `sort_direction` - _optional_ - Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
* `per_page` - _optional_ - How many records to show per page in the range [1, 100]. Defaults to 25
* `page` - _optional_ - The current page to fetch results from. Defaults to 1
* `include_paging_counts` - _optional_ - Whether to include total_pages and total_count in the metadata. Defaults to false

### Fetch a team template

> Fetches a team template, by ID only.

*Tags:* `Team Templates`

#### Input Parameters
* `id` - _required_ - Team Template ID

### List users

> Non Admin: Lists only your user, or all on team depending on group visibility policy<br/>
> Team Admin: Lists users associated with your team

*Tags:* `Users`

### Fetch a user

> Fetches a user, by ID only.

*Tags:* `Users`

#### Input Parameters
* `id` - _required_ - User ID

## License

**flow**ground :- Telekom iPaaS / salesloft-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
