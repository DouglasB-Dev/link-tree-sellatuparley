"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/icons";

const defaultContactIcon = "whatsapp";
const defaultIconWrapperClassName =
  "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white";
const defaultTrailingIconClassName = "text-slate-400 group-hover:text-blue-600";
const cardRevealStepMs = 85;
const channelOptions = {
  whatsapp: {
    label: "WhatsApp",
    icon: "whatsapp",
    buttonClassName:
      "border-emerald-400/50 bg-emerald-500 text-white shadow-lg shadow-emerald-950/20",
    inactiveClassName:
      "border-white/10 bg-white/5 text-white/75 hover:bg-white/10",
    accentClassName: "bg-emerald-400",
    iconWrapperClassName:
      "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white",
  },
  telegram: {
    label: "Telegram",
    icon: "telegram",
    buttonClassName:
      "border-sky-400/50 bg-sky-500 text-white shadow-lg shadow-sky-950/20",
    inactiveClassName:
      "border-white/10 bg-white/5 text-white/75 hover:bg-white/10",
    accentClassName: "bg-sky-400",
    iconWrapperClassName:
      "bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white",
  },
};

function normalizeItems(items) {
  if (Array.isArray(items)) {
    return {
      whatsapp: items,
      telegram: [],
    };
  }

  return {
    whatsapp: items?.whatsapp ?? [],
    telegram: items?.telegram ?? [],
  };
}

export default function ContactsClient({ items }) {
  const groupedItems = normalizeItems(items);
  const [selectedChannel, setSelectedChannel] = useState("whatsapp");
  const currentItems = groupedItems[selectedChannel] ?? [];
  const currentChannel = channelOptions[selectedChannel];

  return (
    <>
      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-slate-950/35 p-2 backdrop-blur-sm">
        {Object.entries(channelOptions).map(([channelKey, option]) => {
          const isActive = channelKey === selectedChannel;

          return (
            <button
              key={channelKey}
              type="button"
              onClick={() => setSelectedChannel(channelKey)}
              className={`cursor-pointer flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${
                isActive ? option.buttonClassName : option.inactiveClassName
              }`}
            >
              <Icons name={option.icon} className="size-5 text-[1.25rem]" />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-3">
        {currentItems.length > 0 ? (
          currentItems.map(
            ({
              eyebrow,
              label,
              href,
              icon = currentChannel.icon ?? defaultContactIcon,
              iconWrapperClassName,
              trailingIcon,
              trailingIconClassName,
            }, index) => (
              <Link
                key={`${selectedChannel}-${label}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center overflow-hidden rounded-xl bg-white p-4 text-slate-900 opacity-0 shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5"
                style={{
                  animation: `contacts-sweep-in 320ms ease-out ${index * cardRevealStepMs}ms forwards`,
                }}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1.5 ${currentChannel.accentClassName}`}
                />
                <div
                  className={`mr-4 ml-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${iconWrapperClassName ?? currentChannel.iconWrapperClassName ?? defaultIconWrapperClassName}`}
                >
                  <Icons name={icon} className="h-5 w-5" />
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-none text-slate-400">
                    {eyebrow}
                  </p>
                  <p className="text-lg font-black text-blue-900">{label}</p>
                </div>

                <Icons
                  name={trailingIcon}
                  className={`ml-auto h-5 w-5 ${trailingIconClassName ?? defaultTrailingIconClassName}`}
                />
              </Link>
            ),
          )
        ) : (
          <div
            className="rounded-xl border border-dashed border-white/20 bg-white/5 px-5 py-6 text-center text-sm text-white/70"
            style={{ animation: "contacts-sweep-in 220ms ease-out forwards" }}
          >
            No hay taquillas configuradas para {currentChannel.label}
          </div>
        )}
      </div>
    </>
  );
}