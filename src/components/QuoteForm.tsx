"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

interface QuoteFormData {
  name: string;
  company: string;
  product: string;
  destination: string;
  shipDate: string;
  whatsapp: string;
}

interface QuoteFormProps {
  compact?: boolean;
}

const COUNTRIES = [
  "United States", "United Kingdom", "United Arab Emirates", "Germany", "France",
  "Singapore", "Australia", "Canada", "Japan", "South Korea", "Saudi Arabia",
  "South Africa", "Kenya", "Nigeria", "Netherlands", "Italy", "Spain",
  "Malaysia", "Thailand", "New Zealand", "Brazil", "Mexico", "Bangladesh",
  "Sri Lanka", "Nepal", "Maldives", "Other",
];

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    reset();
    toast.success("Quote request received!", {
      description: "We will call you back within 24 hours. You can also WhatsApp us for faster response.",
    });
    console.log("Form data:", data);
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            {...register("name", { required: true })}
            placeholder="Your name *"
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
          />
          <input
            {...register("whatsapp", { required: true })}
            placeholder="WhatsApp / Phone *"
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            {...register("product", { required: true })}
            placeholder="What are you shipping? *"
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
          />
          <select
            {...register("destination", { required: true })}
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5] text-[#475569]"
          >
            <option value="">Destination country *</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#F59E0B] text-white font-semibold py-3 rounded-full hover:bg-[#d97706] transition-colors flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Get Free Quote
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1">
            Your Name *
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Rajan Sharma"
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1">
            Company Name
          </label>
          <input
            {...register("company")}
            placeholder="ABC Exports Pvt. Ltd."
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-1">
          What are you shipping? *
        </label>
        <input
          {...register("product", { required: "Product description is required" })}
          placeholder="e.g. Basmati rice, 500 kg in 10 bags"
          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
        />
        {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1">
            Destination Country *
          </label>
          <select
            {...register("destination", { required: "Destination is required" })}
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5] text-[#475569]"
          >
            <option value="">Select country</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1">
            Approximate Ship Date
          </label>
          <input
            {...register("shipDate")}
            type="date"
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-1">
          WhatsApp / Phone *
        </label>
        <input
          {...register("whatsapp", { required: "WhatsApp number is required" })}
          placeholder="+91 98765 43210"
          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
        />
        {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#185FA5] text-white font-semibold py-3.5 rounded-full hover:bg-[#14508a] transition-colors flex items-center justify-center gap-2 text-sm"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Send Quote Request — We reply within 24 hours
      </button>

      <p className="text-xs text-[#475569] text-center">
        No commitment needed. Free quote, fixed price, zero hidden charges.
      </p>
    </form>
  );
}
