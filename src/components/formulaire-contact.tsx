"use client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  nom: string;
  email: string;
  message: string;
};

export default function FormulaireContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormData>();
  const [showSuccess, setShowSuccess] = React.useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onSubmit = (data: FormData) => {
    console.log("Form data submitted:", data);
    reset();
    setShowSuccess(true);
  };

  useEffect(() => {
    if (isSubmitSuccessful && showSuccess) {
      timerRef.current = setTimeout(() => setShowSuccess(false), 3000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isSubmitSuccessful, showSuccess]);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        background: "linear-gradient(135deg, #0d47a1, #4dabf5, #0288d1)",
        borderRadius: 16,
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        padding: "2rem",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Contactez-nous
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="nom" style={{ display: "block", marginBottom: 4 }}>
            Nom
          </label>
          <input
            id="nom"
            type="text"
            {...register("nom", { required: true })}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 8,
              border: "none",
              outline: "none",
              fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: 4 }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 8,
              border: "none",
              outline: "none",
              fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: 4 }}
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message", { required: true })}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 8,
              border: "none",
              outline: "none",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: 8,
              border: "none",
              background: "#4fc3f7",
              color: "#0d47a1",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s",
              textAlign: "center",
            }}
          >
            Envoyer
          </button>
        </div>
        {showSuccess && (
          <div
            style={{
              marginTop: "1rem",
              color: "#05a005",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Message envoyé !
          </div>
        )}
      </form>
    </div>
  );
}
