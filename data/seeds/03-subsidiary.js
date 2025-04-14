/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('subsidiary').del()
  await knex('subsidiary').insert([
    { id_subsidiary: 1, address: '88 Wall Street, New York' },
    { id_subsidiary: 2, address: '77 Sunset Blvd, Los Angeles' },
    { id_subsidiary: 3, address: '66 Michigan Ave, Chicago' },
    { id_subsidiary: 4, address: '55 Main St, Houston' }
  ])
}
