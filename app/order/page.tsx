"use client"
import { useState } from "react"

export default function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    product: "",
    details: ""
  })

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    alert("Pedido enviado 🚀")
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl mb-5">Nuevo Pedido</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Nombre" onChange={handleChange} className="border p-2" />
        <input name="product" placeholder="Producto" onChange={handleChange} className="border p-2" />
        <textarea name="details" placeholder="Detalles" onChange={handleChange} className="border p-2" />

        <button className="bg-black text-white p-2">
          Enviar Pedido
        </button>
      </form>
    </main>
  )
}