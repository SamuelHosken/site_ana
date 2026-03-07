"use client";

import { useState, useEffect, useRef } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";
import { WHATSAPP_URL } from "@/config/contact";

type FormData = {
  tipo: string;
  avaliacao: string;
  localizacao: string;
  mensagem: string;
  nome: string;
  email: string;
  telefone: string;
};

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const modalRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormData>({
    tipo: "",
    avaliacao: "",
    localizacao: "",
    mensagem: "",
    nome: "",
    email: "",
    telefone: "",
  });

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setStep(1);
        setSuccess(false);
        setSending(false);
        setErrorMessage("");
        setForm({ tipo: "", avaliacao: "", localizacao: "", mensagem: "", nome: "", email: "", telefone: "" });
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, close]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const goNext = () => {
    setDirection("forward");
    setStep((s) => s + 1);
  };
  const goBack = () => {
    setDirection("back");
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setSending(true);
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          close();
          window.open(WHATSAPP_URL, "_blank");
        }, 2000);
      } else {
        setErrorMessage("Não foi possível enviar. Tente novamente.");
      }
    } catch {
      setErrorMessage("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setSending(false);
    }
  };

  const canAdvanceStep1 = form.tipo !== "";
  const canAdvanceStep3 = form.nome !== "" && form.email !== "" && form.telefone !== "";

  const progress = success ? 100 : step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal card */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Formulário de contato"
        className={`relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 max-h-[90vh] flex flex-col ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Progress bar */}
        <div className="h-1 bg-stone-100 flex-shrink-0">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Close button */}
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-stone-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content area with scroll */}
        <div className="overflow-y-auto flex-1 p-6 md:p-8">
          {success ? (
            <SuccessView />
          ) : (
            <div className={`transition-all duration-300 ${
              direction === "forward" ? "animate-slide-in-right" : "animate-slide-in-left"
            }`} key={step}>
              {step === 1 && (
                <Step1
                  tipo={form.tipo}
                  setTipo={(v) => setForm({ ...form, tipo: v })}
                  avaliacao={form.avaliacao}
                  setAvaliacao={(v) => setForm({ ...form, avaliacao: v })}
                />
              )}
              {step === 2 && (
                <Step2
                  localizacao={form.localizacao}
                  setLocalizacao={(v) => setForm({ ...form, localizacao: v })}
                  mensagem={form.mensagem}
                  setMensagem={(v) => setForm({ ...form, mensagem: v })}
                />
              )}
              {step === 3 && (
                <Step3
                  nome={form.nome}
                  setNome={(v) => setForm({ ...form, nome: v })}
                  email={form.email}
                  setEmail={(v) => setForm({ ...form, email: v })}
                  telefone={form.telefone}
                  setTelefone={(v) => setForm({ ...form, telefone: v })}
                />
              )}
            </div>
          )}
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="flex-shrink-0 px-6 md:px-8">
            <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-2 text-center">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Footer buttons */}
        {!success && (
          <div className="flex-shrink-0 px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                onClick={goBack}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1 py-2 px-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={goNext}
                disabled={step === 1 && !canAdvanceStep1}
                className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                Continuar
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canAdvanceStep3 || sending}
                className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                {sending ? "Enviando..." : "Enviar"}
                {!sending && (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ====================== STEP COMPONENTS ====================== */

function Step1({
  tipo,
  setTipo,
  avaliacao,
  setAvaliacao,
}: {
  tipo: string;
  setTipo: (v: string) => void;
  avaliacao: string;
  setAvaliacao: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Qual seu interesse?</h3>
      <p className="text-gray-500 text-sm mb-6">Conte-nos como podemos ajudar.</p>

      {/* Tipo cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { value: "Vender", icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )},
          { value: "Alugar", icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
          )},
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => setTipo(item.value)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
              tipo === item.value
                ? "border-primary bg-primary/5 text-primary"
                : "border-stone-200 text-gray-500 hover:border-stone-300"
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.value}</span>
          </button>
        ))}
      </div>

      {/* Avaliacao */}
      <p className="text-sm text-gray-700 mb-2">Já fez avaliação do imóvel?</p>
      <div className="flex gap-2">
        {["Sim", "Nao"].map((v) => (
          <button
            key={v}
            onClick={() => setAvaliacao(v)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              avaliacao === v
                ? "bg-primary text-white"
                : "bg-stone-100 text-gray-600 hover:bg-stone-200"
            }`}
          >
            {v === "Nao" ? "Não" : v}
          </button>
        ))}
      </div>
    </div>
  );
}

function Step2({
  localizacao,
  setLocalizacao,
  mensagem,
  setMensagem,
}: {
  localizacao: string;
  setLocalizacao: (v: string) => void;
  mensagem: string;
  setMensagem: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Sobre o imóvel</h3>
      <p className="text-gray-500 text-sm mb-6">Informações básicas para entendermos melhor.</p>

      <label className="block mb-4">
        <span className="text-sm text-gray-700 mb-1 block">Localização do imóvel</span>
        <input
          type="text"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
          placeholder="Ex: Asa Sul, Lago Norte..."
          className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
        />
      </label>

      <label className="block">
        <span className="text-sm text-gray-700 mb-1 block">
          Mensagem ou pergunta <span className="text-gray-400">(opcional)</span>
        </span>
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={3}
          placeholder="Conte-nos mais sobre seu imóvel ou dúvida..."
          className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors resize-none"
        />
      </label>
    </div>
  );
}

function Step3({
  nome,
  setNome,
  email,
  setEmail,
  telefone,
  setTelefone,
}: {
  nome: string;
  setNome: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  telefone: string;
  setTelefone: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Seus dados</h3>
      <p className="text-gray-500 text-sm mb-6">Para entrarmos em contato com você.</p>

      <label className="block mb-4">
        <span className="text-sm text-gray-700 mb-1 block">Nome <span className="text-primary">*</span></span>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome completo"
          aria-required="true"
          className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-700 mb-1 block">E-mail <span className="text-primary">*</span></span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          aria-required="true"
          className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
        />
      </label>

      <label className="block">
        <span className="text-sm text-gray-700 mb-1 block">Telefone <span className="text-primary">*</span></span>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(61) 99999-9999"
          aria-required="true"
          className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
        />
      </label>
    </div>
  );
}

function SuccessView() {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      {/* Animated check */}
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-success-pop">
        <svg className="w-8 h-8 text-green-600 animate-success-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
            className="animate-success-draw"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Obrigado!</h3>
      <p className="text-gray-500 text-sm">Entraremos em contato em breve.</p>
    </div>
  );
}
