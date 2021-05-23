/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs');
const Mockaroo = require('./Mockaroo');

const mockaroo = new Mockaroo();

const SCHEMAS = [
    'tags',
    'tags-dirty'
];

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    on('before:run', () => {
        return Promise.all(SCHEMAS.map(async (schema) => {
            const response = await mockaroo.generateFromSchema(schema, 25);
    
            const poolPath = `./cypress/data-pool/dynamic/schemas/${schema}.json`;
            const poolFile = fs.existsSync(poolPath);
   
            if (poolFile) {
                const pool = JSON.parse(fs.readFileSync(poolPath));
                
                const newPool = JSON.stringify([...pool, ...response]);
    
                fs.writeFileSync(poolPath, newPool);
            } else {            
                fs.writeFileSync(poolPath, JSON.stringify(response));
            }
        }));
    });   
}
