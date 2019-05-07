/**
 * Auto-generated action file for "SalesLoft Platform" API.
 *
 * Generated at: 2019-05-07T14:43:57.331Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / salesloft-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/v2/people/{id}.json'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "email_address": "email_address",
    "secondary_email_address": "secondary_email_address",
    "personal_email_address": "personal_email_address",
    "first_name": "first_name",
    "last_name": "last_name",
    "phone": "phone",
    "phone_extension": "phone_extension",
    "mobile_phone": "mobile_phone",
    "home_phone": "home_phone",
    "linkedin_url": "linkedin_url",
    "title": "title",
    "city": "city",
    "state": "state",
    "country": "country",
    "work_city": "work_city",
    "work_state": "work_state",
    "work_country": "work_country",
    "person_company_name": "person_company_name",
    "person_company_website": "person_company_website",
    "person_company_industry": "person_company_industry",
    "do_not_contact": "do_not_contact",
    "locale": "locale",
    "personal_website": "personal_website",
    "twitter_handle": "twitter_handle",
    "tags": "tags",
    "custom_fields": "custom_fields",
    "account_id": "account_id",
    "owner_id": "owner_id",
    "import_id": "import_id",
    "person_stage_id": "person_stage_id",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/x-www-form-urlencoded';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['OAuth2'] = {token: cfg['OAuth2']};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/v2/people/{id}.json',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}