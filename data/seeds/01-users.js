/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Borrar datos anteriores
  await knex('users').del()

  // Insertar nuevos usuarios
  await knex('users').insert([
    {
      id_users: 1,
      first_name: 'Carlos',
      last_name: 'Hernández',
      email: 'carlos.hdz@example.com',
      password: 'hashed123',
      address: 'Av. Revolución 123',
      city: 'Monterrey',
      state: 'Nuevo León',
      postal_code: '64000',
      phone: '818-123-4567',
      active: true
    },
    {
      id_users: 2,
      first_name: 'Ana',
      last_name: 'García',
      email: 'ana.garcia@example.com',
      password: 'hashed456',
      address: 'Insurgentes Sur 456',
      city: 'Ciudad de México',
      state: 'CDMX',
      postal_code: '03020',
      phone: '555-987-6543',
      active: true
    },
    {
      id_users: 3,
      first_name: 'Luis',
      last_name: 'Ramírez',
      email: 'luis.ramirez@example.com',
      password: 'hashed789',
      address: 'Av. Vallarta 789',
      city: 'Guadalajara',
      state: 'Jalisco',
      postal_code: '44110',
      phone: '333-567-8910',
      active: true
    },
    {
      id_users: 4,
      first_name: 'María',
      last_name: 'López',
      email: 'maria.lopez@example.com',
      password: 'hashed000',
      address: 'Malecón Tajamar 321',
      city: 'Cancún',
      state: 'Quintana Roo',
      postal_code: '77500',
      phone: '998-456-7890',
      active: true
    },
    {
      id_users: 5,
      first_name: 'Jorge',
      last_name: 'Mendoza',
      email: 'jorge.mendoza@example.com',
      password: 'hashed111',
      address: 'Blvd. Díaz Ordaz 654',
      city: 'Monterrey',
      state: 'Nuevo León',
      postal_code: '64100',
      phone: '818-222-3344',
      active: true
    }
  ])
}
