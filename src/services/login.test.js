import { logout } from "./login";
import { it, expect } from 'vitest';

it('Prueba de logout cuando el usuario es administrador', () => {
    // Arrange <- Generar un entorno de pruebas.
    // Setear variables, crear mocks, crear el resultado esperado.
    let testToken = {role: 'ADMIN'};
    let expected = -1;

    // Act
    // Ejecutar el código a probar.
    let result = logout(testToken);

    // Assert
    // Verificar el resultado del código ejecutado.
    expect(result).toBe(expected);
});

it('Prueba de logout cuando el usuario es customer', () => {
    // Arrange <- Generar un entorno de pruebas.
    // Setear variables, crear mocks, crear el resultado esperado.
    let testToken = {role: 'CUSTOMER'};
    let expected = 0;

    // Act
    // Ejecutar el código a probar.
    let result = logout(testToken);

    // Assert
    // Verificar el resultado del código ejecutado.
    expect(result).toBe(expected);
});