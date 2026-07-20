import { useEffect, useMemo, useState } from "react";
import type { DeliveryDayRoute } from "@/data/deliveryRoutes";

type Lang = "en" | "es";

type Labels = {
  viewByDay: string;
  viewByCity: string;
  today: string;
  citySelectDefault: string;
  cityHint: string;
  cityResultLabel: string;
};

type DeliveryScheduleProps = {
  schedule: DeliveryDayRoute[];
  lang: Lang;
  labels: Labels;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function DeliverySchedule({ schedule, lang, labels }: DeliveryScheduleProps) {
  const [mode, setMode] = useState<"day" | "city">("day");
  const [activeDay, setActiveDay] = useState(0);
  const [todayIndex, setTodayIndex] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const jsDay = new Date().getDay(); // 0 = Sunday
    const idx = (jsDay + 6) % 7; // Monday = 0 ... Sunday = 6, matches schedule order
    setTodayIndex(idx);
    setActiveDay(idx);
  }, []);

  const cities = useMemo(() => {
    const set = new Set<string>();
    schedule.forEach((route) => route.cities.forEach((city) => set.add(city)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, lang));
  }, [schedule, lang]);

  const daysForCity = useMemo(() => {
    if (!selectedCity) return [];
    return schedule.filter((route) => route.cities.includes(selectedCity)).map((route) => route.day[lang]);
  }, [schedule, selectedCity, lang]);

  return (
    <div>
      <div className="mb-8 inline-flex rounded-full p-1 text-[11px] uppercase tracking-[0.2em] ring-1 ring-line">
        <button
          type="button"
          onClick={() => setMode("day")}
          aria-pressed={mode === "day"}
          className={cn(
            "rounded-full px-5 py-2 transition-colors",
            mode === "day" ? "bg-ink text-[var(--color-base)]" : "text-faded hover:text-ink",
          )}
        >
          {labels.viewByDay}
        </button>
        <button
          type="button"
          onClick={() => setMode("city")}
          aria-pressed={mode === "city"}
          className={cn(
            "rounded-full px-5 py-2 transition-colors",
            mode === "city" ? "bg-ink text-[var(--color-base)]" : "text-faded hover:text-ink",
          )}
        >
          {labels.viewByCity}
        </button>
      </div>

      {mode === "day" ? (
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {schedule.map((route, i) => (
              <button
                key={route.day.en}
                type="button"
                onClick={() => setActiveDay(i)}
                aria-pressed={activeDay === i}
                className={cn(
                  "rounded-full px-4 py-2 text-sm ring-1 transition-colors",
                  activeDay === i
                    ? "bg-accent text-[var(--color-base)] ring-accent"
                    : "ring-line hover:bg-paper",
                )}
              >
                {route.day[lang]}
                {i === todayIndex && (
                  <span className="ml-1.5 text-[10px] uppercase tracking-[0.15em] opacity-75">
                    · {labels.today}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="rounded-[min(1vw,12px)] bg-paper p-6 md:p-8">
            <ul className="flex flex-wrap gap-2">
              {schedule[activeDay].cities.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-[var(--color-base)] px-4 py-2 text-sm ring-1 ring-line"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <select
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
            className="mb-6 w-full max-w-sm rounded-full bg-[var(--color-base)] px-5 py-3 text-sm ring-1 ring-line"
          >
            <option value="">{labels.citySelectDefault}</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <div className="rounded-[min(1vw,12px)] bg-paper p-6 md:p-8">
            {selectedCity ? (
              <>
                <p className="mb-4 text-sm text-faded">
                  {labels.cityResultLabel} <span className="font-medium text-ink">{selectedCity}</span>
                </p>
                <ul className="flex flex-wrap gap-2">
                  {daysForCity.map((day) => (
                    <li
                      key={day}
                      className="rounded-full bg-[var(--color-base)] px-4 py-2 text-sm ring-1 ring-line"
                    >
                      {day}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-sm text-faded">{labels.cityHint}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
