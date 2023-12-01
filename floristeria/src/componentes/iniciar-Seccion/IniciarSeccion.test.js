import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IniciarSeccion from './IniciarSeccion';

const renderComponent = ({ estado, cambiarEstado }) => {
  return render(
    <IniciarSeccion estado={estado} cambiarEstado={cambiarEstado}>
      <h1>Contenido del componente</h1>
    </IniciarSeccion>
  );
};

describe('IniciarSeccion', () => {
  test('renderiza correctamente cuando el estado es verdadero', () => {
    const { getByText } = renderComponent({ estado: true });
    expect(getByText('Contenido del componente')).toBeInTheDocument();
  });

  test('no renderiza cuando el estado es falso', () => {
    const { queryByText } = renderComponent({ estado: false });
    expect(queryByText('Contenido del componente')).toBeNull();
  });

  test('llama a la función cambiarEstado al hacer clic en el botón Cerrar', () => {
    const cambiarEstado = jest.fn();
    const { getByText } = renderComponent({ estado: true, cambiarEstado });

    fireEvent.click(getByText('X'));
    expect(cambiarEstado).toHaveBeenCalledWith(false);
  });
});
