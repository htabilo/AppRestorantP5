// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// Verifica que la ruta sea correcta
import { Input } from "../Components/Input";
import Button from "react-bootstrap/Button";
import { db } from "../firebase";
import { addDoc } from "firebase/firestore";

export const Reservas = () => {
  // referencias
  // eslint-disable-next-line no-undef
  const reservasCollectionRef = collection(db, "reservas");
  // estado para almacenar datos y controlar edición
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comensales, setComensales] = useState("");
  const [fecha, setFecha] = useState("");

  // funciones reserva
  const crearReserva = async (e) => {
    e.preventDefault();
    // Validación de campos
    if (!nombre || !email || !telefono || !comensales || !fecha) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Si los campos están completos, se crea la reserva
    // eslint-disable-next-line no-undef
    await addDoc(reservasCollectionRef, {
      nombre,
      email,
      telefono,
      comensales,
      fecha,
    });

    alert("Reserva exitosa");
  };

  return (
    <>
      <h1>Reservas</h1>
      <form onSubmit={crearReserva}>
        <Input
          nombre={nombre}
          setNombre={setNombre}
          email={email}
          setEmail={setEmail}
          telefono={telefono}
          setTelefono={setTelefono}
          comensales={comensales}
          setComensales={setComensales}
          fecha={fecha}
          setFecha={setFecha}
        />

        <div className="d-grid gap-2 col-2 mx-auto">
          <Button
            type="submit"
            variant="outline-success"
            className="align-items-center"
          >
            Agregar
          </Button>
        </div>
      </form>
    </>
  );
};
